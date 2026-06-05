import { UnitData } from './data';
import * as math from 'mathjs';
// @ts-ignore
import { jStat } from 'jstat';

export function getDescriptiveStats(data: UnitData[], field: keyof UnitData) {
  const values = data.map((d) => Number(d[field])).sort((a, b) => a - b);
  const n = values.length;
  
  if (n === 0) return null;

  const mean = jStat.mean(values);
  const median = jStat.median(values);
  const min = values[0];
  const max = values[n - 1];
  const amplitude = max - min;
  const variance = jStat.variance(values, true); // true for sample variance
  const std = Math.sqrt(variance);
  const cv = (std / mean) * 100;
  
  const quartiles = jStat.quartiles(values);
  const q1 = quartiles[0];
  const q3 = quartiles[2];

  return { mean, median, min, max, amplitude, variance, std, cv, q1, q3 };
}

export function getCorrelationMatrix(data: UnitData[], fields: (keyof UnitData)[]) {
  const matrix = fields.map((f1) => {
    return fields.map((f2) => {
      const v1 = data.map((d) => Number(d[f1]));
      const v2 = data.map((d) => Number(d[f2]));
      return jStat.corrcoeff(v1, v2);
    });
  });
  return matrix;
}

export function simpleLinearRegression(data: UnitData[], yField: keyof UnitData, xField: keyof UnitData) {
  const y = data.map((d) => Number(d[yField]));
  const x = data.map((d) => Number(d[xField]));
  const n = y.length;

  const meanX = jStat.mean(x);
  const meanY = jStat.mean(y);

  let ssXY = 0;
  let ssXX = 0;
  let sst = 0;

  for (let i = 0; i < n; i++) {
    ssXY += (x[i] - meanX) * (y[i] - meanY);
    ssXX += (x[i] - meanX) ** 2;
    sst += (y[i] - meanY) ** 2;
  }

  const b1 = ssXY / ssXX;
  const b0 = meanY - b1 * meanX;

  let sse = 0;
  let ssr = 0;
  for (let i = 0; i < n; i++) {
    const yHat = b0 + b1 * x[i];
    sse += (y[i] - yHat) ** 2;
    ssr += (yHat - meanY) ** 2;
  }

  const r2 = ssr / sst;
  const mse = sse / (n - 2);
  const seB1 = Math.sqrt(mse / ssXX);
  const tStatB1 = b1 / seB1;
  const pValueB1 = 2 * (1 - jStat.studentt.cdf(Math.abs(tStatB1), n - 2));

  const fStat = (ssr / 1) / mse;
  const pValueF = 1 - jStat.centralF.cdf(fStat, 1, n - 2);

  return { b0, b1, r2, tStatB1, pValueB1, fStat, pValueF, seB1 };
}

export function multipleLinearRegression(data: UnitData[], yField: keyof UnitData, xFields: (keyof UnitData)[]) {
  const n = data.length;
  const k = xFields.length;

  const Y = data.map(d => [Number(d[yField])]);
  const X = data.map(d => [1, ...xFields.map(f => Number(d[f]))]); // with intercept

  // Beta = (X'X)^-1 X'Y
  const Xt = math.transpose(X);
  const XtX = math.multiply(Xt, X);
  const XtX_inv = math.inv(XtX);
  const XtY = math.multiply(Xt, Y);
  const Beta = math.multiply(XtX_inv, XtY) as number[][];
  
  const coefs = Beta.map(b => b[0]); // array of coefficients: [intercept, b1, b2, ...]

  const Y_hat = math.multiply(X, Beta) as number[][];
  const meanY = jStat.mean(Y.map(y => y[0]));

  let sse = 0;
  let ssr = 0;
  let sst = 0;

  for (let i = 0; i < n; i++) {
    const yActual = Y[i][0];
    const yPred = Y_hat[i][0];
    sse += (yActual - yPred) ** 2;
    ssr += (yPred - meanY) ** 2;
    sst += (yActual - meanY) ** 2;
  }

  const r2 = ssr / sst;
  const r2Adjusted = 1 - ((1 - r2) * (n - 1) / (n - k - 1));

  const mse = sse / (n - k - 1);
  const varBetaMatrix = math.multiply(mse, XtX_inv) as number[][];
  
  const seCoefs = coefs.map((_, i) => Math.sqrt(varBetaMatrix[i][i]));
  const tStats = coefs.map((b, i) => b / seCoefs[i]);
  const pValuesT = tStats.map(t => 2 * (1 - jStat.studentt.cdf(Math.abs(t), n - k - 1)));

  const msr = ssr / k;
  const fStat = msr / mse;
  const pValueF = 1 - jStat.centralF.cdf(fStat, k, n - k - 1);

  return {
    coefs, // [intercept, ...xCoefs]
    seCoefs,
    tStats,
    pValuesT,
    r2,
    r2Adjusted,
    anova: {
      ssr, msr, sse, mse, sst, fStat, pValueF,
      dfRegression: k,
      dfError: n - k - 1,
      dfTotal: n - 1
    }
  };
}

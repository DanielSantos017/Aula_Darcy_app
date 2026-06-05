"use client"

import React from "react"
import { UnitData, coworkingData } from "@/lib/data"
import { multipleLinearRegression } from "@/lib/statistics"

export function MultipleRegression() {
  const xFields: (keyof UnitData)[] = [
    "estacoes", "mensalidade", "internet", "nps", "salas", "eventos", "tempo"
  ];

  const model = multipleLinearRegression(coworkingData, "ocupacao", xFields);

  return (
    <div className="space-y-6">
      <p className="font-light text-muted-foreground">
        Modelo de regressão linear múltipla incluindo todas as variáveis independentes quantitativas.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="p-6 border border-border rounded-lg bg-background">
          <h3 className="text-sm font-medium mb-4 text-muted-foreground uppercase tracking-widest">Métricas Globais</h3>
          <div className="space-y-2 text-sm font-light">
            <p className="flex justify-between border-b border-border pb-1">
              <span>R² Múltiplo:</span>
              <span className="font-medium">{(model.r2 * 100).toFixed(2)}%</span>
            </p>
            <p className="flex justify-between border-b border-border pb-1">
              <span>R² Ajustado:</span>
              <span className="font-medium">{(model.r2Adjusted * 100).toFixed(2)}%</span>
            </p>
            <p className="flex justify-between border-b border-border pb-1">
              <span>Estatística F:</span>
              <span className="font-medium">{model.anova.fStat.toFixed(4)}</span>
            </p>
            <p className="flex justify-between pb-1">
              <span>Valor-p Global (Teste F):</span>
              <span className="font-medium">{model.anova.pValueF < 0.0001 ? "< 0.0001" : model.anova.pValueF.toFixed(4)}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm text-left font-light">
          <thead className="bg-muted text-foreground border-b border-border uppercase">
            <tr>
              <th className="px-4 py-3 font-medium">Variável</th>
              <th className="px-4 py-3 font-medium">Coeficiente (b)</th>
              <th className="px-4 py-3 font-medium">Erro Padrão</th>
              <th className="px-4 py-3 font-medium">Estatística t</th>
              <th className="px-4 py-3 font-medium">Valor-p</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr className="hover:bg-accent/50 transition-colors">
              <td className="px-4 py-3 font-medium">Intercepto</td>
              <td className="px-4 py-3">{model.coefs[0].toFixed(4)}</td>
              <td className="px-4 py-3">{model.seCoefs[0].toFixed(4)}</td>
              <td className="px-4 py-3">{model.tStats[0].toFixed(4)}</td>
              <td className="px-4 py-3">{model.pValuesT[0] < 0.0001 ? "< 0.0001" : model.pValuesT[0].toFixed(4)}</td>
            </tr>
            {xFields.map((field, index) => {
              const i = index + 1;
              return (
                <tr key={field} className="hover:bg-accent/50 transition-colors">
                  <td className="px-4 py-3 capitalize font-medium">{field}</td>
                  <td className="px-4 py-3">{model.coefs[i].toFixed(4)}</td>
                  <td className="px-4 py-3">{model.seCoefs[i].toFixed(4)}</td>
                  <td className="px-4 py-3">{model.tStats[i].toFixed(4)}</td>
                  <td className="px-4 py-3 font-medium">
                    {model.pValuesT[i] < 0.05 ? (
                      <span className="text-green-600 dark:text-green-400 font-medium">
                        {model.pValuesT[i] < 0.0001 ? "< 0.0001" : model.pValuesT[i].toFixed(4)} *
                      </span>
                    ) : (
                      <span className="opacity-70">
                        {model.pValuesT[i].toFixed(4)}
                      </span>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-muted-foreground font-light">* Estatisticamente significativo ao nível de 5% (p &lt; 0.05)</p>
    </div>
  )
}

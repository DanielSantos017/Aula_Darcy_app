"use client"

import React, { useState } from "react"
import { UnitData, coworkingData } from "@/lib/data"
import { multipleLinearRegression } from "@/lib/statistics"

export function Simulation() {
  const xFields: (keyof UnitData)[] = [
    "estacoes", "mensalidade", "internet", "nps", "salas", "eventos", "tempo"
  ];
  const model = multipleLinearRegression(coworkingData, "ocupacao", xFields);

  const [inputs, setInputs] = useState<Record<string, number>>({
    estacoes: 100,
    mensalidade: 800,
    internet: 480,
    nps: 70,
    salas: 6,
    eventos: 10,
    tempo: 0
  });

  const handleInputChange = (field: string, value: string) => {
    setInputs(prev => ({ ...prev, [field]: Number(value) }));
  };

  // Predict
  const predOcupacao = model.coefs[0] + 
    model.coefs[1] * inputs.estacoes +
    model.coefs[2] * inputs.mensalidade +
    model.coefs[3] * inputs.internet +
    model.coefs[4] * inputs.nps +
    model.coefs[5] * inputs.salas +
    model.coefs[6] * inputs.eventos +
    model.coefs[7] * inputs.tempo;

  const setScenario = (num: number) => {
    if (num === 1) { // Nova unidade BH
      setInputs({ estacoes: 100, mensalidade: 800, internet: 480, nps: 70, salas: 6, eventos: 10, tempo: 0 });
    } else if (num === 2) { // Revitalização Porto Velho (original: 35 est, R$380, 150Mbps, NPS 35, 2 salas, 1 evento, 1 ano)
      // Ajuste: internet 150->400, salas 2->4, eventos 1->6, mensalidade 380->320
      setInputs({ estacoes: 35, mensalidade: 320, internet: 400, nps: 35, salas: 4, eventos: 6, tempo: 1 });
    } else if (num === 3) { // Eventos premium
      // Average current unit
      setInputs({ estacoes: 100, mensalidade: 700, internet: 400, nps: 60, salas: 6, eventos: 18, tempo: 4 }); // just generic example
    }
  }

  return (
    <div className="space-y-8">
      <p className="font-light text-muted-foreground">
        Insira os valores das variáveis preditoras para simular a Taxa de Ocupação prevista com base no modelo de Regressão Múltipla.
      </p>

      <div className="flex gap-4 mb-6">
        <button onClick={() => setScenario(1)} className="px-4 py-2 text-sm border border-border rounded-md hover:bg-accent font-light">Cenário 1: Nova Unidade BH</button>
        <button onClick={() => setScenario(2)} className="px-4 py-2 text-sm border border-border rounded-md hover:bg-accent font-light">Cenário 2: Revitalizar Porto Velho</button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          {xFields.map((field) => (
            <div key={field} className="flex flex-col gap-1">
              <label className="text-sm font-medium capitalize">{field}</label>
              <input
                type="number"
                value={inputs[field]}
                onChange={(e) => handleInputChange(field, e.target.value)}
                className="p-2 text-sm border border-border bg-background rounded-md font-light"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center items-center p-8 border border-border rounded-lg bg-card h-full min-h-[300px]">
          <h3 className="text-sm font-medium mb-2 text-muted-foreground uppercase tracking-widest">Ocupação Prevista</h3>
          <div className="text-6xl font-light text-primary">
            {predOcupacao.toFixed(1)}<span className="text-3xl">%</span>
          </div>
          {predOcupacao < 65 && (
            <p className="mt-4 text-red-500 font-medium text-sm">Alerta: Ocupação abaixo de 65% (Risco de Prejuízo)</p>
          )}
          {predOcupacao > 100 && (
            <p className="mt-4 text-orange-500 font-medium text-sm">Nota: Modelo prevê &gt; 100% devido à extrapolação linear.</p>
          )}
        </div>
      </div>
    </div>
  )
}

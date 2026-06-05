"use client"

import React from "react"
import { UnitData, coworkingData } from "@/lib/data"
import { getCorrelationMatrix } from "@/lib/statistics"

export function CorrelationMatrix() {
  const fields: (keyof UnitData)[] = [
    "ocupacao",
    "estacoes",
    "mensalidade",
    "internet",
    "nps",
    "salas",
    "eventos",
    "tempo"
  ];

  const matrix = getCorrelationMatrix(coworkingData, fields);

  return (
    <div className="space-y-6">
      <p className="font-light text-muted-foreground">
        Matriz de correlação de Pearson entre as variáveis quantitativas. Valores próximos de 1 indicam forte correlação positiva, e próximos de -1 indicam forte correlação negativa.
      </p>
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm text-center font-light">
          <thead className="bg-muted text-foreground border-b border-border">
            <tr>
              <th className="px-3 py-3 font-medium text-left">Variável</th>
              {fields.map(f => (
                <th key={f} className="px-3 py-3 font-medium capitalize">{f.slice(0, 4)}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {matrix.map((row, i) => (
              <tr key={fields[i]} className="hover:bg-accent/50 transition-colors">
                <td className="px-3 py-3 font-medium capitalize text-left">{fields[i]}</td>
                {row.map((val, j) => {
                  const isStrongPositive = val > 0.7 && i !== j;
                  const isStrongNegative = val < -0.7 && i !== j;
                  return (
                    <td 
                      key={j} 
                      className={`px-3 py-3 ${isStrongPositive ? "text-blue-500 font-medium" : isStrongNegative ? "text-red-500 font-medium" : ""}`}
                    >
                      {val.toFixed(2)}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

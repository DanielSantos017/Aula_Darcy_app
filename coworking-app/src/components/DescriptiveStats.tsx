"use client"

import React from "react"
import { UnitData, coworkingData } from "@/lib/data"
import { getDescriptiveStats } from "@/lib/statistics"

export function DescriptiveStats() {
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

  return (
    <div className="space-y-6">
      <p className="font-light text-muted-foreground">
        Tabela com as medidas de tendência central e dispersão para as variáveis quantitativas da rede Espaço Livre.
      </p>
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm text-left font-light">
          <thead className="bg-muted text-foreground border-b border-border uppercase">
            <tr>
              <th className="px-4 py-3 font-medium">Variável</th>
              <th className="px-4 py-3 font-medium">Média</th>
              <th className="px-4 py-3 font-medium">Mediana</th>
              <th className="px-4 py-3 font-medium">Desvio Padrão</th>
              <th className="px-4 py-3 font-medium">CV (%)</th>
              <th className="px-4 py-3 font-medium">Mínimo</th>
              <th className="px-4 py-3 font-medium">Máximo</th>
              <th className="px-4 py-3 font-medium">Q1</th>
              <th className="px-4 py-3 font-medium">Q3</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {fields.map((field) => {
              const stats = getDescriptiveStats(coworkingData, field);
              if (!stats) return null;
              return (
                <tr key={field} className="hover:bg-accent/50 transition-colors">
                  <td className="px-4 py-3 capitalize font-medium">{field}</td>
                  <td className="px-4 py-3">{stats.mean.toFixed(2)}</td>
                  <td className="px-4 py-3">{stats.median.toFixed(2)}</td>
                  <td className="px-4 py-3">{stats.std.toFixed(2)}</td>
                  <td className="px-4 py-3">{stats.cv.toFixed(2)}%</td>
                  <td className="px-4 py-3">{stats.min.toFixed(2)}</td>
                  <td className="px-4 py-3">{stats.max.toFixed(2)}</td>
                  <td className="px-4 py-3">{stats.q1.toFixed(2)}</td>
                  <td className="px-4 py-3">{stats.q3.toFixed(2)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

"use client"

import React, { useState } from "react"
import { UnitData, coworkingData } from "@/lib/data"
import { XAxis, YAxis, CartesianGrid, Tooltip, ScatterChart, Scatter, ResponsiveContainer } from "recharts"

export function ExploratoryCharts() {
  const [selectedVar, setSelectedVar] = useState<keyof UnitData>("mensalidade")
  
  const scatterData = coworkingData.map(d => ({
    x: Number(d[selectedVar]),
    y: Number(d.ocupacao),
    name: d.unidade
  }))

  const vars: { key: keyof UnitData, label: string }[] = [
    { key: "estacoes", label: "Estações" },
    { key: "mensalidade", label: "Mensalidade (R$)" },
    { key: "internet", label: "Internet (Mbps)" },
    { key: "nps", label: "NPS" },
    { key: "salas", label: "Salas de Reunião" },
    { key: "eventos", label: "Eventos por Mês" },
    { key: "tempo", label: "Tempo de Operação" },
  ]

  return (
    <div className="space-y-6">
      <p className="font-light text-muted-foreground">
        Explore visualmente a relação entre a Taxa de Ocupação (Y) e cada variável independente (X) por meio do diagrama de dispersão.
      </p>

      <div className="flex items-center gap-4">
        <label className="text-sm font-medium">Selecione a Variável X:</label>
        <select 
          value={selectedVar} 
          onChange={e => setSelectedVar(e.target.value as keyof UnitData)}
          className="p-2 text-sm bg-background border border-border rounded-md font-light"
        >
          {vars.map(v => (
            <option key={v.key} value={v.key}>{v.label}</option>
          ))}
        </select>
      </div>

      <div className="h-[400px] w-full border border-border rounded-lg p-4 bg-background">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis type="number" dataKey="x" name={selectedVar} tick={{ fontSize: 12, fill: "var(--foreground)" }} stroke="var(--border)" />
            <YAxis type="number" dataKey="y" name="Ocupação (%)" tick={{ fontSize: 12, fill: "var(--foreground)" }} stroke="var(--border)" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={{ backgroundColor: "var(--background)", borderColor: "var(--border)", fontWeight: 300 }} />
            <Scatter name="Unidade" data={scatterData} fill="currentColor" className="text-muted-foreground" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

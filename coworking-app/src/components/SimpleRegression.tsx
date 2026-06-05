"use client"

import React, { useState } from "react"
import { UnitData, coworkingData } from "@/lib/data"
import { simpleLinearRegression } from "@/lib/statistics"

export function SimpleRegression() {
  const [selectedVar, setSelectedVar] = useState<keyof UnitData>("internet")
  
  const vars: { key: keyof UnitData, label: string }[] = [
    { key: "estacoes", label: "Estações" },
    { key: "mensalidade", label: "Mensalidade (R$)" },
    { key: "internet", label: "Internet (Mbps)" },
    { key: "nps", label: "NPS" },
    { key: "salas", label: "Salas de Reunião" },
    { key: "eventos", label: "Eventos por Mês" },
    { key: "tempo", label: "Tempo de Operação" },
  ]

  const model = simpleLinearRegression(coworkingData, "ocupacao", selectedVar)

  return (
    <div className="space-y-6">
      <p className="font-light text-muted-foreground">
        Modelo de regressão linear simples: estimativa da Taxa de Ocupação (Y) baseada em uma única variável preditora (X).
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

      <div className="grid gap-4 md:grid-cols-2">
        <div className="p-6 border border-border rounded-lg bg-background">
          <h3 className="text-sm font-medium mb-4 text-muted-foreground uppercase tracking-widest">Equação Estimada</h3>
          <p className="text-2xl font-light">
            Y = {model.b0.toFixed(4)} {model.b1 >= 0 ? "+" : "-"} {Math.abs(model.b1).toFixed(4)}X
          </p>
          <div className="mt-4 text-sm font-light space-y-1">
            <p><strong>Intercepto (b0):</strong> {model.b0.toFixed(4)}</p>
            <p><strong>Inclinação (b1):</strong> {model.b1.toFixed(4)}</p>
          </div>
        </div>

        <div className="p-6 border border-border rounded-lg bg-background">
          <h3 className="text-sm font-medium mb-4 text-muted-foreground uppercase tracking-widest">Qualidade de Ajuste</h3>
          <div className="space-y-2 text-sm font-light">
            <p className="flex justify-between border-b border-border pb-1">
              <span>R² (Poder Explicativo):</span>
              <span className="font-medium">{(model.r2 * 100).toFixed(2)}%</span>
            </p>
            <p className="flex justify-between border-b border-border pb-1">
              <span>Estatística t (b1):</span>
              <span className="font-medium">{model.tStatB1.toFixed(4)}</span>
            </p>
            <p className="flex justify-between border-b border-border pb-1">
              <span>Valor-p (t):</span>
              <span className="font-medium">{model.pValueB1 < 0.0001 ? "< 0.0001" : model.pValueB1.toFixed(4)}</span>
            </p>
            <p className="flex justify-between border-b border-border pb-1">
              <span>Estatística F:</span>
              <span className="font-medium">{model.fStat.toFixed(4)}</span>
            </p>
            <p className="flex justify-between pb-1">
              <span>Valor-p (F):</span>
              <span className="font-medium">{model.pValueF < 0.0001 ? "< 0.0001" : model.pValueF.toFixed(4)}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

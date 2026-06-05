"use client"

import React, { useState } from "react"
import { BarChart3, Calculator, Home, LineChart, Moon, Sun, Table2, Lightbulb } from "lucide-react"
import { useTheme } from "next-themes"
import { DescriptiveStats } from "@/components/DescriptiveStats"
import { CorrelationMatrix } from "@/components/CorrelationMatrix"
import { InterpretativeQA } from "@/components/InterpretativeQA"
import { ExploratoryCharts } from "@/components/ExploratoryCharts"
import { SimpleRegression } from "@/components/SimpleRegression"
import { MultipleRegression } from "@/components/MultipleRegression"
import { Simulation } from "@/components/Simulation"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("descriptive")
  const { setTheme, theme } = useTheme()

  const navItems = [
    { id: "descriptive", label: "Descritiva", icon: Table2 },
    { id: "exploratory", label: "Gráficos", icon: BarChart3 },
    { id: "correlation", label: "Correlação", icon: LineChart },
    { id: "simple", label: "Regressão Simples", icon: Calculator },
    { id: "multiple", label: "Regressão Múltipla", icon: Calculator },
    { id: "simulation", label: "Simulação", icon: Home },
    { id: "qa", label: "Respostas Gerenciais", icon: Lightbulb },
  ]

  return (
    <div className="flex h-screen w-full bg-background text-foreground transition-colors duration-300">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card flex flex-col transition-colors duration-300">
        <div className="p-6 border-b border-border">
          <h1 className="text-lg font-light tracking-widest uppercase">Espaço Livre</h1>
          <p className="text-xs text-muted-foreground font-light mt-1">Análise de Regressão</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center w-full gap-3 px-4 py-3 text-sm font-light transition-all border rounded-md ${
                activeTab === item.id
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent border-transparent hover:border-border hover:bg-accent"
              }`}
            >
              <item.icon className="w-4 h-4 stroke-[1.25]" />
              {item.label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-border">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center w-full gap-3 px-4 py-3 text-sm font-light transition-all border border-transparent rounded-md hover:border-border hover:bg-accent"
          >
            <Sun className="w-4 h-4 stroke-[1.25] hidden dark:block" />
            <Moon className="w-4 h-4 stroke-[1.25] block dark:hidden" />
            <span className="hidden dark:inline">Modo Claro</span>
            <span className="inline dark:hidden">Modo Escuro</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-10 bg-background transition-colors duration-300">
        <header className="mb-8">
          <h2 className="text-3xl font-light tracking-wide text-foreground">
            {navItems.find((n) => n.id === activeTab)?.label}
          </h2>
          <hr className="mt-6 border-t border-border" />
        </header>

        <div className="border border-border rounded-xl p-8 bg-card font-light shadow-sm">
          {activeTab === "descriptive" && <DescriptiveStats />}
          {activeTab === "correlation" && <CorrelationMatrix />}
          {activeTab === "exploratory" && <ExploratoryCharts />}
          {activeTab === "simple" && <SimpleRegression />}
          {activeTab === "multiple" && <MultipleRegression />}
          {activeTab === "simulation" && <Simulation />}
          {activeTab === "qa" && <InterpretativeQA />}
          
          {/* Content Placeholder for others */}
          {!["descriptive", "correlation", "qa", "exploratory", "simple", "multiple", "simulation"].includes(activeTab) && (
            <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
              <Calculator className="w-12 h-12 stroke-[1] mb-4 opacity-50" />
              <p className="text-lg font-light">Módulo de {navItems.find((n) => n.id === activeTab)?.label}</p>
              <p className="text-sm mt-2 opacity-70">Os gráficos e cálculos serão integrados aqui em breve.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

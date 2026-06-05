"use client"

import React from "react"

export function InterpretativeQA() {
  const qaPairs = [
    {
      q: "Questão 1: Explique o R² para Gabriel, que é empreendedor de tecnologia.",
      a: "O R² (R-quadrado) funciona como uma métrica de 'explicação do modelo'. É parecido com medir o quanto um dashboard realmente consegue prever churn ou retenção. Quanto maior o R², maior o 'poder explicativo' do modelo. Mas R² alto não significa causalidade. O modelo pode prever bem e ainda assim confundir causa com correlação."
    },
    {
      q: "Questão 2: ROI de 4 eventos extras por mês em unidade com 100 estações e R$ 750/mês. Custo R$ 3mil cada.",
      a: "Custo = 4 x 3.000 = R$ 12.000. \nAumento estimado (2 p.p. por evento) = 8 pontos percentuais. \nEstações adicionais ocupadas = 100 x 8% = 8. \nReceita adicional = 8 x R$ 750 = R$ 6.000. \nROI mensal = (Receita - Custo) / Custo = (6000 - 12000) / 12000 = -50%."
    },
    {
      q: "Questão 3: Endogeneidade da Velocidade da Internet.",
      a: "Unidades maiores possuem mais receita e investem em internet premium, além de terem melhor localização, marca e estrutura. A ocupação alta pode estar ligada ao conjunto da operação, e não apenas à internet. O coeficiente captura esses efeitos combinados."
    },
    {
      q: "Questão 4: Multicolinearidade entre 'Estações' e 'Salas de Reunião'.",
      a: "Essas variáveis crescem juntas (coworkings maiores têm mais estações e mais salas). O modelo passa a ter dificuldade para separar o impacto de cada uma. Coeficientes ficam instáveis e é difícil interpretar qual variável realmente importa."
    },
    {
      q: "Questão 5: 3 hipóteses para Espaço Livre Itaim Bibi ter ocupação acima do previsto.",
      a: "1. Localização premium (startups e escritórios financeiros geram demanda). 2. Comunidade forte (networking ativo aumenta retenção). 3. Perfil de empresas residentes (empresas 'âncora' atraem outras empresas)."
    },
    {
      q: "Questão 6: Relação entre mensalidade e ocupação (negativa ou positiva?).",
      a: "Relação negativa: preço alto afasta clientes sensíveis a preço. \nRelação positiva: mensalidades maiores refletem melhor infraestrutura e serviços (como hotéis premium), onde preço alto sinaliza qualidade."
    },
    {
      q: "Questão 7: Fatores culturais do home office no modelo.",
      a: "O modelo provavelmente não captura bem fatores culturais. Variáveis como preferência por trabalho remoto, hábitos pós-pandemia e resistência a deslocamento são difíceis de medir e reduzem a demanda, mesmo com boa infraestrutura."
    },
    {
      q: "Questão 8: Causalidade reversa entre NPS e ocupação.",
      a: "NPS alto atrai indicações (maior ocupação). Mas unidades cheias geram mais interação social, networking e sensação de comunidade, o que melhora a experiência e consequentemente o NPS. A ocupação também causa aumento no NPS."
    },
    {
      q: "Questão 9: Se pudesse adicionar uma variável, qual escolheria?",
      a: "Proximidade de metrô/transporte. Impacta diretamente conveniência e tempo de deslocamento, reduzindo atrito e afetando retenção. Outra boa opção seria a presença de empresas âncora."
    },
    {
      q: "Questão 10: Sumário executivo com 5 recomendações.",
      a: "1. Priorizar localização premium (alta densidade e fácil acesso). \n2. Fortalecer comunidade e networking para reter clientes. \n3. Avaliar rigorosamente o ROI dos eventos (foco em conversão e retenção). \n4. Investir em infraestrutura estratégica conforme perfil da unidade. \n5. Incorporar variáveis qualitativas ao modelo de tomada de decisão futura."
    }
  ]

  return (
    <div className="space-y-8 max-w-4xl">
      <p className="font-light text-muted-foreground">
        Com base no caso da Espaço Livre, aqui estão as respostas traduzindo os resultados estatísticos em recomendações estratégicas.
      </p>
      <div className="grid gap-6">
        {qaPairs.map((pair, index) => (
          <div key={index} className="p-6 border border-border rounded-lg bg-card">
            <h3 className="text-lg font-medium mb-3">{pair.q}</h3>
            <p className="text-sm font-light text-muted-foreground whitespace-pre-line leading-relaxed">
              {pair.a}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

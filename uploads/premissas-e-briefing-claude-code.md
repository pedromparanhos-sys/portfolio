# LBO Fleury — Premissas e Briefing para Claude Code

## 1. Premissas de mercado (dados públicos, jul/2026)

| Indicador | Valor | Fonte / observação |
|---|---|---|
| Ticker | FLRY3 (B3) | — |
| Receita líquida (LTM aprox.) | ~R$ 8,5 bi | Agregadores de mercado — **conferir no ITR/DFP oficial** |
| EBITDA (LTM aprox.) | ~R$ 2,19 bi | Idem |
| Margem EBITDA | ~26-27% | Estável nos últimos trimestres |
| Dívida líquida | ~R$ 2,04 bi | 3T25 |
| Alavancagem (Dív. Líq./EBITDA) | ~1,0x | Muito baixa — espaço para alavancar mais no LBO |
| Valor de mercado (equity) | ~R$ 8,6-9,0 bi | Varia por fonte/data |
| Enterprise Value (EV) estimado | ~R$ 10,7 bi | EV = Equity + Dívida Líquida |
| Múltiplo EV/EBITDA implícito (mercado) | ~4,9x | Ponto de partida para o múltiplo de entrada |
| P/L | ~12-14x | Referência geral, não usado direto no LBO |
| Dividend yield | ~7% | Referência de política de distribuição |

**Nota de qualidade dos dados**: os números acima vêm de agregadores (Investidor10, TradingView, ADVFN) e servem para orientar as premissas iniciais. Antes de travar os números definitivos do modelo, a Fase 1 do Claude Code deve puxar os dados oficiais (CVM/RI) para reconciliar.

## 2. Premissas de estrutura da transação (ponto de partida — refinar depois da Fase 1)

| Parâmetro | Premissa inicial | Racional |
|---|---|---|
| Múltiplo de entrada (EV/EBITDA) | ~6,0-6,5x (prêmio de ~25-30% sobre os ~4,9x de mercado) | Prêmio de controle típico em take-private |
| Estrutura de capital | 60% dívida / 40% equity | Alavancagem atual é muito baixa (1,0x) — há espaço real para subir |
| Alavancagem inicial pós-transação | ~4,5-5,0x Dív. Líq./EBITDA | Nível comum em LBOs de setores defensivos |
| Custo da dívida | CDI + spread (a definir com debêntures comparáveis) | Buscar emissões recentes do setor de saúde |
| Horizonte de saída | 5 anos | Padrão de fundo de PE |
| Múltiplo de saída (caso base) | Igual à entrada (6,0-6,5x) | Premissa conservadora — não assumir expansão de múltiplo |

## 3. Briefing — Fase 1 no Claude Code (coleta e reconciliação de dados)

Objetivo desta primeira etapa: montar um dataset limpo e confiável com o histórico financeiro da Fleury, que vai alimentar tanto o Excel quanto o motor de Monte Carlo depois.

**O que pedir ao Claude Code:**

1. **Ambiente**: criar um projeto Python novo (ex: `lbo-fleury/`), com estrutura simples: `data/`, `src/`, `notebooks/` ou `analysis/`.
2. **Coleta via yfinance**: puxar histórico de preço, número de ações, e indicadores de mercado do ticker `FLRY3.SA` — isso dá o valor de mercado e a série de preços ao longo do tempo.
3. **Coleta de fundamentos históricos**: buscar (via scraping responsável ou download manual dos arquivos) as demonstrações financeiras dos últimos 3-5 anos fiscais — receita, EBITDA, dívida bruta, caixa, capex, contas a receber, contas a pagar, estoques. A fonte mais confiável é o site de RI da Fleury (seção de resultados/central de downloads) ou os dados abertos da CVM.
4. **Organizar em uma tabela única**: uma linha por trimestre ou ano, colunas para cada métrica — isso vira a base tanto do Excel (você exporta/copia) quanto do motor de simulação.
5. **Calcular os derivados**: margem EBITDA, dívida líquida, alavancagem, capital de giro (contas a receber + estoques − contas a pagar) e sua variação ano a ano — para já deixar visível o padrão histórico dessas variáveis, que serão a base das distribuições estatísticas do Monte Carlo mais adiante.
6. **Saída esperada desta fase**: um arquivo de dados limpo (CSV ou similar) + um resumo estatístico simples (média, desvio padrão, mínimo, máximo) de cada métrica-chave nos últimos anos. Isso é o que vamos usar para parametrizar as distribuições da simulação na Fase 3.

**O que ainda não fazer nesta fase**: não montar o modelo de LBO em si, nem o motor de Monte Carlo — isso é Fase 2 e 3. Fase 1 é só dado limpo e confiável.

## 4. Próximo checkpoint
Depois que o Claude Code trouxer o dataset da Fase 1, o próximo passo é usarmos essas médias e desvios históricos reais (em vez das premissas genéricas da tabela da seção 2) para calibrar o modelo — e aí sim entramos na Fase 2 (Excel) e Fase 3 (motor Python).

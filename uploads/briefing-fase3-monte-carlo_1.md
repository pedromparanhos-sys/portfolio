# LBO Fleury — Briefing Fase 3: Motor de Monte Carlo (Claude Code)

## 1. Objetivo desta fase

Construir, em Python, um motor de simulação que replica exatamente a lógica do modelo de Excel (Sources & Uses, projeções operacionais, debt schedule com cash sweep, cálculo de saída e retorno), mas em vez de rodar uma única vez com premissas fixas, roda milhares de vezes sorteando valores aleatórios e correlacionados para as variáveis incertas, gerando uma distribuição completa de IRR e MOIC.

## 2. Estrutura do projeto (adicionar à pasta `lbo-fleury/` já existente)

```
lbo-fleury/
  src/
    lbo_engine.py       # a lógica do modelo (Sources&Uses, debt schedule, saída, retorno)
    monte_carlo.py       # a camada de simulação (sorteio + loop de rodadas)
  analysis/
    monte_carlo_results.py  # análise e visualização dos resultados
  data/
    clean/
      flry3_historico_anual.csv  # já existe, da Fase 1
```

## 3. O motor determinístico (`lbo_engine.py`) — replicar a lógica do Excel

Antes de simular, o motor precisa reproduzir exatamente o caso base do Excel quando alimentado com os mesmos inputs fixos. Essa é a validação obrigatória antes de simular qualquer coisa.

**Inputs da função principal** (equivalente à Aba de Premissas do Excel):
- EBITDA base: R$ 2.190.000 mil
- Múltiplo de entrada: 6,25x
- Múltiplo de saída: 6,25x (será substituído por variável aleatória na simulação)
- Alavancagem inicial: 4,5x
- Dívida existente a refinanciar: R$ 1.630.000 mil
- Taxas de transação: 2% do EV
- Custo da dívida: 14% a.a. (será substituído por variável aleatória na simulação)
- Crescimento de receita: 8% a.a. (será substituído por variável aleatória)
- Margem EBITDA: 27,5% (será substituído por variável aleatória)
- Capex: 7% da receita
- Alíquota de imposto: 34%
- Passivo de arrendamento: R$ 1.250.000 mil, pagamento anual de 15% do saldo
- % cash sweep: 100%
- Horizonte: 5 anos

**Lógica interna** (replicar exatamente o que já validamos no Excel):
1. Calcular Sources & Uses (EV, equity a pagar, dívida nova, equity do sponsor)
2. Projetar receita, EBITDA, capex e variação de capital de giro para os 5 anos
3. Rodar o debt schedule ano a ano: juros sobre saldo médio (isso cria uma equação implícita — resolver com iteração numérica simples, tipo um loop `while` até convergir, equivalente ao cálculo iterativo do Excel), caixa disponível para sweep, amortização
4. Calcular EV e equity value de saída no Ano 5
5. Calcular MOIC e IRR (usar `numpy_financial.irr` ou uma função de TIR equivalente, já que o `numpy` puro não tem IRR nativo)

**Validação obrigatória**: rodar essa função com os inputs fixos do caso base e conferir que o resultado bate com o Excel: MOIC 2,74x e IRR 22,3%. Só depois disso seguir para a simulação.

## 4. A camada de Monte Carlo (`monte_carlo.py`)

### 4.1 Variáveis tratadas como aleatórias

| Variável | Distribuição | Média | Desvio padrão |
|---|---|---|---|
| Crescimento de receita | Normal | 8% | 3% |
| Margem EBITDA | Normal | 27,5% | 1,2 p.p. (do histórico 2022-2025) |
| Múltiplo de saída | Normal | 6,25x | 0,75x |
| Custo da dívida (CDI + spread) | Normal | 14% | 2% |

### 4.2 Matriz de correlação entre essas 4 variáveis

| | Cresc. Receita | Margem EBITDA | Múlt. Saída | Custo Dívida |
|---|---|---|---|---|
| Cresc. Receita | 1,0 | 0,4 | 0,25 | 0,0 |
| Margem EBITDA | 0,4 | 1,0 | 0,1 | 0,0 |
| Múlt. Saída | 0,25 | 0,1 | 1,0 | -0,25 |
| Custo Dívida | 0,0 | 0,0 | -0,25 | 1,0 |

**Implementação**: usar `numpy.random.multivariate_normal(mean, cov_matrix, size=n_simulacoes)`, onde `cov_matrix` é derivada da matriz de correlação acima combinada com os desvios padrão de cada variável (covariância = correlação × desvio_A × desvio_B). Isso já aplica a decomposição de Cholesky internamente, não precisa implementar na mão.

**Importante**: truncar ou tratar valores extremos que não fazem sentido economicamente (ex: margem EBITDA negativa, múltiplo de saída negativo, crescimento de receita abaixo de -100%). Uma forma simples é usar `np.clip` para limitar cada variável a uma faixa plausível (ex: margem EBITDA entre 15% e 40%, múltiplo de saída entre 3x e 10x).

### 4.3 Loop de simulação

1. Sortear `n_simulacoes` (sugestão: 10.000) combinações correlacionadas das 4 variáveis
2. Para cada combinação, rodar a função do `lbo_engine.py` com essas variáveis substituindo os valores fixos (mantendo tudo mais igual: alavancagem inicial, taxas, horizonte)
3. Guardar o IRR e o MOIC resultante de cada rodada num array
4. Ao final, ter dois arrays de tamanho 10.000: um de IRRs, um de MOICs

## 5. Análise dos resultados (`monte_carlo_results.py`)

- **Estatísticas descritivas**: média, mediana, desvio padrão, percentis P10/P25/P50/P75/P90 do IRR e do MOIC
- **Validação cruzada**: a média (ou mediana) do IRR simulado deve ficar próxima dos 22,3% do caso base do Excel. Se estiver muito distante, é sinal de erro na implementação, não assumir que "a simulação está certa e o Excel errado"
- **Probabilidade de IRR abaixo de um limiar**: calcular, por exemplo, `% de simulações com IRR < 15%` (thresholds de risco que fundos costumam monitorar)
- **Gráficos**:
  - Histograma da distribuição de IRR
  - Histograma da distribuição de MOIC
  - Gráfico de dispersão (scatter) entre duas variáveis-chave (ex: crescimento de receita vs. IRR resultante) para visualizar a sensibilidade
- **Análise de sensibilidade estatística (opcional, mas valioso)**: calcular a correlação entre cada variável de entrada e o IRR de saída, para identificar qual delas mais "move a agulha" do retorno (isso é conhecido como análise tipo "tornado")

## 6. Prompt sugerido para o Claude Code

```
No projeto lbo-fleury/, crie src/lbo_engine.py com uma função que replica exatamente
o modelo de LBO já validado no Excel (Sources & Uses, projeções operacionais, debt
schedule com cash sweep e juros sobre saldo médio resolvidos por iteração numérica,
cálculo de saída, MOIC e IRR), usando os inputs fixos do caso base documentados no
briefing. Valide que o resultado bate com MOIC 2,74x e IRR 22,3% do Excel antes de
prosseguir.

Depois, crie src/monte_carlo.py que roda 10.000 simulações, sorteando de forma
correlacionada (via numpy.random.multivariate_normal) as variáveis: crescimento de
receita, margem EBITDA, múltiplo de saída e custo da dívida, conforme as médias,
desvios padrão e matriz de correlação do briefing. Trunque valores implausíveis com
np.clip nas faixas indicadas. Para cada simulação, rode o motor do lbo_engine.py e
armazene o IRR e o MOIC resultante.

Por fim, crie analysis/monte_carlo_results.py que calcula estatísticas descritivas
(média, mediana, percentis 10/25/50/75/90) do IRR e MOIC, compara a mediana do IRR
simulado com o caso base do Excel (22,3%) como validação, calcula a probabilidade de
IRR abaixo de 15%, e gera histogramas da distribuição de IRR e MOIC, além de um
gráfico de dispersão entre crescimento de receita e IRR resultante.
```

## 7. O que fazer com o resultado depois

Depois que o Claude Code rodar isso, o resultado (estatísticas + gráficos) vira o complemento quantitativo do memo de investimento: em vez de só "22,3% de TIR no caso base", o memo final pode dizer algo como "22,3% no caso base, com 80% dos cenários simulados entre X% e Y% de TIR, e Z% de probabilidade de retorno abaixo do mínimo aceitável de 15%". É exatamente esse tipo de afirmação, apoiada em simulação, que diferencia o projeto do candidato médio.

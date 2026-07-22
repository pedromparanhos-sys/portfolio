# Pedro Muralha Paranhos — Portfólio

Portfólio pessoal de **Pedro Henrique Muralha Paranhos**, estudante de Engenharia Mecânica na UFRJ, com foco em **finanças quantitativas, ciência de dados e inteligência artificial**.

🔗 **Site:** https://pedromparanhos-sys.github.io/portfolio/ · **GitHub:** https://github.com/pedromparanhos-sys

---

## Sobre

Site estático de página única com quatro seções — *sobre mim*, *projetos*, *experiência* e *resume* — além de dois relatórios de pesquisa quantitativa que abrem embutidos no próprio site:

- **pairs trading** — arbitragem estatística sobre pares cointegrados (QQQ/XLK) com hedge ratio dinâmico via Kalman Filter e validação walk-forward.
- **orderbook signal** — order book imbalance como sinal preditivo de preço em BTC/USDT, com signal decay e backtest de microestrutura.

Recursos:

- **Bilíngue** (Português / Inglês) com seletor no cabeçalho — a escolha vale para o site e os relatórios.
- **Tema claro/escuro**.
- **Responsivo** (desktop e mobile).
- **SEO**: meta tags, Open Graph/Twitter Card e dados estruturados JSON-LD para descoberta por nome.

---

## Estrutura

```
.
├── index.html                     # página inicial (entrada do site)
├── Relatorio Orderbook.dc.html    # relatório orderbook signal
├── sitemap.xml                    # mapa do site (trocar domínio)
├── .nojekyll                      # OBRIGATÓRIO: mantém a pasta _ds/ publicada
├── support.js                     # runtime que renderiza as páginas
├── dither-image.js                # componente da imagem dithered do topo
├── _ds/                           # design system (Psyche) — tokens, fontes, componentes
├── assets/                        # recursos auxiliares
└── uploads/                       # imagens, currículo (PDF), figuras dos relatórios
    └── Pairs Trading HTML/        # relatório pairs trading + suas figuras
```

> `Portfolio.dc.html` é a cópia-fonte editável do site; `index.html` é a versão publicada.

---

## Publicar (GitHub Pages)

1. Suba os arquivos para um repositório no GitHub (mantendo a estrutura de pastas).
2. **Settings → Pages** → *Source*: **Deploy from a branch** → Branch **main** / **/(root)** → **Save**.
3. Aguarde 1–2 min e acesse o endereço mostrado no topo da página.

**Importante:**
- O arquivo **`.nojekyll`** precisa estar na raiz — sem ele o GitHub ignora a pasta `_ds/` (começa com `_`) e o site quebra.
- Depois de publicar, troque o domínio em `sitemap.xml` e nas meta tags do `index.html` pelo endereço real.

## Rodar localmente

Por usar `fetch` de arquivos locais, sirva a pasta com um servidor estático (abrir o `index.html` direto no navegador não basta):

```bash
python -m http.server 8000
# abra http://localhost:8000
```

---

## Tecnologias

HTML · JavaScript · [Psyche Design System](https://psyche.network) · sem build step (arquivos estáticos).

Relatórios construídos com Python (pandas, numpy, scikit-learn, xgboost, statsmodels, pykalman).

---

© 2026 Pedro Muralha Paranhos

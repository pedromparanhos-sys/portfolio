# Psyche Design System

Design system for **Psyche** (psyche.network) — the distributed intelligence network by the Psyche Foundation / Nous Research. Psyche coordinates cooperative, over-the-internet training of large AI models on Solana; the website lets people watch training runs live and contribute compute/funds to a mining pool.

Header brand line: **"nous psyche — DISTRIBUTED INTELLIGENCE NETWORK"**, with a `TESTNET` chip.

## Sources

- GitHub: https://github.com/PsycheFoundation/nousnet (`website/` subtree) — also see https://github.com/PsycheFoundation/psyche
- Attached local codebase: `website/` (frontend: Vite + React + TanStack Router + Linaria; backend: chain indexer)
- Live site: https://psyche.network/runs
- Key source files: `frontend/src/colors.ts`, `fonts.ts`, `themes.ts`, `components/*.tsx`, `routes/runs/*`

Explore those repositories for deeper fidelity — every value in this system was lifted verbatim from them.

## One product: the Psyche website

A single-page app at `/runs`: a two-column layout ("contribute compute" | "training") inside giant fieldset outline boxes, plus a run-detail view with loss/speed charts, prompt streams, and a contributor leaderboard.

## CONTENT FUNDAMENTALS

- **Voice**: terse, technical, machine-room. No marketing fluff. Sentences like "Cooperative training over-the-internet".
- **Casing is the brand**: display type is FORCED lowercase ("nous psyche", "contribute compute", "training"); labels/buttons/table headers are UPPERCASE ("POOL CAPACITY", "CONNECT WALLET", "DISTRIBUTED INTELLIGENCE NETWORK", "RANK / ADDRESS / CONTRIBUTION"); aux copy is sentence case.
- **Person**: imperative & impersonal. "connect wallet", "donate", "back". Rarely addresses "you".
- **Numbers everywhere**: token counts animate live; abbreviations `12.3b`, `1.2m` (lowercase suffixes k/m/b/t/q), `tok/s`, percentages to 3–4 decimals (`<0.001%`).
- **No emoji.** Whimsy comes from pictographic SVGs instead (smiley icon on the donate button, medusa heads for top-3 leaderboard ranks, fleur ornaments).
- **Labels are lowercase single words**: "params", "arch", "type", "tokens", "loss", "training rate".
- Footer: "©2025 psyche foundation", "built using libraries by" + iroh/pytorch/hf logos, links "twitter · discord · legal · nous research" separated by symbol glyphs.

## VISUAL FOUNDATIONS

- **Vibe**: retro terminal / early-OS utility meets illuminated manuscript. Chunky borders, zero radius, monospace, ornamental fleurs.
- **Color**: green-tinted neutrals (`slate`), deep brand greens (`forest`), gold for the single primary action, lime for progress/funding, teal `success`, rust `error`. Two themes: light (`slate-200` bg / `forest-700` fg) and dark (`forest-700` bg / `slate-0` fg). Class `.theme-light` / `.theme-dark` on a root element.
- **Background**: tiled quatrefoil/fleur SVG pattern (`--bg-svg`, `background-size: 12px`) over `--color-bg`; content boxes paint solid `--color-bg` on top.
- **Type**: `Soufflet Vert Hybrid 106R` for display (ALWAYS text-transform lowercase), `Geist Mono` for headline/body (-0.25px tracking) and buttons (+0.5px tracking, uppercase), `Geist` for aux/small labels. Sizes follow a Tailwind-like rem scale xs→7xl.
- **Corners**: 0px radius everywhere (only exception: 100% round status dots).
- **Borders**: 2px solid, always. Fieldset `OutlineBox` with a display-font legend is a defining motif.
- **Shadows**: no blur anywhere. Two systems: (1) bevel — 1px light/dark inset pairs (`--bevel-out`; flipped to `--bevel-in` when pressed) on buttons and chits; (2) hard 8px offset shadow blocks behind cards (a solid fg-colored div offset +8px/+8px with a bg-colored inner inset 2px).
- **Press state**: bevel inversion (no scale/color change). **Hover**: cards fill their offset shadow solid; action buttons lighten text color; links standard underline.
- **Progress bars**: chunked/segmented — repeating-gradient stripes (16px chunks, 4px gaps), or dot-matrix halftone fill for pool capacity. Never smooth fills.
- **Animation**: minimal & functional — pulsing status dot (scale 1→2 fade, 2s ease-in-out), live counting token numbers, dithered rotating icosphere orb (WebGL, pixelated rendering). No page transitions, no bounces.
- **Imagery**: no photos. Dithered/pixelated GL orb, geometric SVG symbols, ornamental corner fleur. Color: monochrome in currentColor.
- **Layout**: container queries; main grid `512px 1fr` gap 36px on a 1700px basis; everything dense and boxed.
- **Transparency/blur**: none. Only the rgba() bevel insets.

## ICONOGRAPHY

Bespoke SVG icon set (copied into `assets/icons/`) — no icon font, no external icon library, no emoji ever:

- Functional: arrow-left/right, chevron-up/down, copy, link, fullscreen, sun, moon
- Brand/ornamental: psyche-box (logo mark), corner-fleur, symbol-02, symbol-06 (link separator), medusa-head (top-3 ranks), smiley (donate button)
- Partner logos in `assets/logos/`: iroh, pytorch, huggingface, anchor

Icons render at ~1em inside text, always `fill: currentColor` (the `iconClass` pattern). Symbol glyphs are used as decorative separators between links. Do NOT substitute Lucide/Heroicons — use these files.

`assets/psyche-bg.svg` is the quatrefoil pattern tile; `assets/bgPattern.png` a raster variant. The logo is `assets/icons/psyche-box.svg` rendered inline before the lowercase wordmark "nous psyche" in display type.

## Index

- `styles.css` — global entry; imports `tokens/{fonts,colors,typography,effects}.css`
- `tokens/` — colors (slate/forest/gold/lime/success/error + theme vars), type scale + `.t-*` utilities, bevels/spacing
- `assets/` — fonts (woff2), icons, logos, background patterns
- `components/core/` — Button, OutlineBox, RunBox, ShadowCard, MiniCard, StatusChip, InfoChit, ProgressBar, RadioSelectBar, SymbolSeparatedItems, StatBox
- `guidelines/` — foundation specimen cards (Design System tab)
- `ui_kits/website/` — interactive recreation of psyche.network/runs (runs list + contribute panel + run detail)
- `SKILL.md` — agent skill entrypoint

### Intentional additions
- `Icon` — currentColor mask wrapper for the SVG glyph set (the site uses vite `?react` imports, impossible here). Set `window.PSYCHE_ASSET_BASE` when assets aren't at `assets/`.
Everything else mirrors `frontend/src/components/` (wallet/chart internals simplified for prototyping).

### Notes / caveats
- The WebGL dither-orb is recreated as a static dot-matrix placeholder circle; see `gl/` in the source repo for the real shader.
- `Sort` (react-select) is recreated as a simple styled select; `Chart`/`RadialGraph` are simplified SVG line charts matching the visual style.

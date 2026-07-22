// <dither-image> — dithering Bayer 8×8 com pontos redondos (portado do
// playground "Dither Verde · Vivo"), espaçamento mínimo (3px). Tamanho do
// ponto modulado pelo brilho, contraste 1.4. Cores seguem o tema da página
// (--color-bg / --color-fg) e repintam ao alternar claro/escuro.
(function () {
  function parseColor(str) {
    const c = document.createElement('canvas');
    c.width = c.height = 1;
    const x = c.getContext('2d');
    x.fillStyle = '#000';
    x.fillStyle = str;
    x.fillRect(0, 0, 1, 1);
    return x.getImageData(0, 0, 1, 1).data;
  }
  const lumOf = (c) => 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  const css = (c) => `rgb(${c[0] | 0},${c[1] | 0},${c[2] | 0})`;
  const mix = (a, b, t) => [
    a[0] + (b[0] - a[0]) * t,
    a[1] + (b[1] - a[1]) * t,
    a[2] + (b[2] - a[2]) * t,
  ];

  // Matriz de Bayer 8×8 normalizada (0..1)
  const BAYER = (() => {
    const m2 = [[0, 2], [3, 1]];
    const expand = (m) => {
      const n = m.length, r = [];
      for (let y = 0; y < 2 * n; y++) {
        r[y] = [];
        for (let x = 0; x < 2 * n; x++) {
          const add = (y < n ? (x < n ? 0 : 2) : (x < n ? 3 : 1));
          r[y][x] = m[y % n][x % n] * 4 + add;
        }
      }
      return r;
    };
    const m8 = expand(expand(m2));
    return m8.map((row) => row.map((v) => (v + 0.5) / 64));
  })();

  // parâmetros do playground, espaçamento no mínimo
  const SPACING = 2;      // px CSS
  const RADIUS_F = 0.42;  // raio do ponto (fração do espaçamento)
  const CONTRAST = 1.4;
  const BRIGHT = 0;
  const MODULATE = true;  // tamanho segue o brilho

  class DitherImage extends HTMLElement {
    connectedCallback() {
      this.style.display = 'block';
      this.style.width = '100%';
      this.style.height = '100%';
      this.style.overflow = 'hidden';
      this.style.background = 'var(--color-bg)';

      this.canvas = document.createElement('canvas');
      this.canvas.style.cssText = 'width:100%;height:100%;display:block';
      this.appendChild(this.canvas);

      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        this.img = img;
        if (this.bufW) { this.prepare(); this.render(); }
        this.watchTheme();
      };
      // src: única, ou lista separada por vírgulas — sorteia uma por carregamento
      const srcs = (this.getAttribute('src') || '').split(',').map((s) => s.trim()).filter(Boolean);
      img.src = srcs[Math.floor(Math.random() * srcs.length)] || '';

      // re-render a cada mudança de tamanho/zoom — buffer sempre 1:1 com os
      // pixels físicos (evita moiré/emendas de reamostragem)
      this.ro = new ResizeObserver((entries) => this.onResize(entries[0]));
      this.ro.observe(this);
    }

    onResize(entry) {
      let dw, dh;
      if (entry && entry.devicePixelContentBoxSize && entry.devicePixelContentBoxSize.length) {
        dw = entry.devicePixelContentBoxSize[0].inlineSize;
        dh = entry.devicePixelContentBoxSize[0].blockSize;
      } else {
        const r = this.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        dw = Math.round(r.width * dpr);
        dh = Math.round(r.height * dpr);
      }
      if (!dw || !dh) return;
      const dpr = window.devicePixelRatio || 1;
      // supersampling inteiro em ecrãs 1x: downscale por razão exata = sem emendas
      const ss = dpr < 2 ? 2 : 1;
      const w = dw * ss, h = dh * ss;
      if (w === this.bufW && h === this.bufH) return;
      this.bufW = w;
      this.bufH = h;
      this.pxScale = dpr * ss;
      if (this.img) { this.prepare(); this.render(); }
    }

    disconnectedCallback() {
      if (this.themeObserver) this.themeObserver.disconnect();
      if (this.themePoll) clearInterval(this.themePoll);
      if (this.ro) this.ro.disconnect();
    }

    readColors() {
      const cs = getComputedStyle(this);
      const bgS = cs.getPropertyValue('--color-bg').trim();
      const fgS = cs.getPropertyValue('--color-fg').trim();
      if (!bgS || !fgS) return null;
      return { key: bgS + '|' + fgS, bg: parseColor(bgS), fg: parseColor(fgS) };
    }

    watchTheme() {
      const recheck = () => {
        const c = this.readColors();
        if (c && c.key !== this.colorKey) this.render();
      };
      this.themeObserver = new MutationObserver(recheck);
      this.themeObserver.observe(document.body, { attributes: true, subtree: true, attributeFilter: ['class'] });
      this.themePoll = setInterval(recheck, 500);
    }

    prepare() {
      const w = this.bufW, h = this.bufH;
      this.canvas.width = w;
      this.canvas.height = h;

      this.spacing = Math.max(2, Math.round(SPACING * (this.pxScale || 1)));
      this.gw = Math.ceil(w / this.spacing);
      this.gh = Math.ceil(h / this.spacing);

      // amostra da imagem à resolução da grade (cover)
      const tmp = document.createElement('canvas');
      tmp.width = this.gw; tmp.height = this.gh;
      const tctx = tmp.getContext('2d');
      const ir = this.img.width / this.img.height;
      const cr = w / h;
      let sw, sh, sx, sy;
      if (ir > cr) { sh = this.img.height; sw = sh * cr; sx = (this.img.width - sw) / 2; sy = 0; }
      else { sw = this.img.width; sh = sw / cr; sx = 0; sy = (this.img.height - sh) / 2; }
      tctx.drawImage(this.img, sx, sy, sw, sh, 0, 0, this.gw, this.gh);
      const data = tctx.getImageData(0, 0, this.gw, this.gh).data;

      // brilho ajustado por célula (contraste + brilho, como no playground)
      this.cells = new Float32Array(this.gw * this.gh);
      for (let i = 0; i < this.gw * this.gh; i++) {
        let b = (0.2126 * data[i * 4] + 0.7152 * data[i * 4 + 1] + 0.0722 * data[i * 4 + 2]) / 255;
        b = (b - 0.5) * CONTRAST + 0.5 + BRIGHT;
        this.cells[i] = Math.max(0, Math.min(1, b));
      }
    }

    render() {
      const c = this.readColors();
      if (!c) { setTimeout(() => this.render(), 150); return; }
      this.colorKey = c.key;

      const bgIsDark = lumOf(c.bg) < lumOf(c.fg);
      // ponto: verde vivo no escuro (estilo #9ce69c), fg no claro
      const dot = bgIsDark ? mix(c.fg, [156, 230, 156], 0.7) : c.fg;

      const ctx = this.canvas.getContext('2d');
      const spacing = this.spacing, gw = this.gw, gh = this.gh;

      ctx.fillStyle = css(c.bg);
      ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      ctx.fillStyle = css(dot);

      ctx.beginPath();
      for (let gy = 0; gy < gh; gy++) {
        for (let gx = 0; gx < gw; gx++) {
          // "Inverter" do playground: b = 1 - b (nos dois temas)
          const b0 = this.cells[gy * gw + gx];
          const b = 1 - b0;
          if (b <= BAYER[gy % 8][gx % 8]) continue;
          const r = spacing * RADIUS_F * (MODULATE ? (0.6 + 0.7 * b) : 1);
          const cx = gx * spacing + spacing / 2, cy = gy * spacing + spacing / 2;
          ctx.moveTo(cx + r, cy);
          ctx.arc(cx, cy, r, 0, Math.PI * 2);
        }
      }
      ctx.fill();
    }
  }

  if (!customElements.get('dither-image')) customElements.define('dither-image', DitherImage);
})();

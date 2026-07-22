/* @ds-bundle: {"format":4,"namespace":"PsycheDesignSystem_d0a47d","components":[{"name":"MiniCard","sourcePath":"components/containers/MiniCard.jsx"},{"name":"OutlineBox","sourcePath":"components/containers/OutlineBox.jsx"},{"name":"RunBox","sourcePath":"components/containers/RunBox.jsx"},{"name":"ShadowCard","sourcePath":"components/containers/ShadowCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"InfoChit","sourcePath":"components/core/InfoChit.jsx"},{"name":"ProgressBar","sourcePath":"components/core/ProgressBar.jsx"},{"name":"Progress","sourcePath":"components/core/ProgressBar.jsx"},{"name":"RadioSelectBar","sourcePath":"components/core/RadioSelectBar.jsx"},{"name":"Sort","sourcePath":"components/core/Sort.jsx"},{"name":"StatBox","sourcePath":"components/core/StatBox.jsx"},{"name":"StatusChip","sourcePath":"components/core/StatusChip.jsx"},{"name":"SymbolSeparatedItems","sourcePath":"components/core/SymbolSeparatedItems.jsx"},{"name":"PSYCHE_ICONS","sourcePath":"components/core/iconData.js"},{"name":"Footer","sourcePath":"components/site/Footer.jsx"},{"name":"Header","sourcePath":"components/site/Header.jsx"}],"sourceHashes":{"components/containers/MiniCard.jsx":"2dd94f22071b","components/containers/OutlineBox.jsx":"e1d63ff32f80","components/containers/RunBox.jsx":"24e82020a61a","components/containers/ShadowCard.jsx":"69ce15868531","components/core/Button.jsx":"4f55c6ee68e8","components/core/Icon.jsx":"cd00de143441","components/core/InfoChit.jsx":"68d5e784cf44","components/core/ProgressBar.jsx":"0595a8dbb2e6","components/core/RadioSelectBar.jsx":"c9a7afee9a51","components/core/Sort.jsx":"285e52bb4414","components/core/StatBox.jsx":"ffa1b846fa29","components/core/StatusChip.jsx":"668f11b1f138","components/core/SymbolSeparatedItems.jsx":"4914e367959f","components/core/iconData.js":"489ad4bddb6d","components/site/Footer.jsx":"755d823daf30","components/site/Header.jsx":"e8345f718520","ui_kits/website/ContributePanel.jsx":"4634afa5d787","ui_kits/website/TrainingPanel.jsx":"35f0f907acac","ui_kits/website/data.js":"a631f6c3569f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PsycheDesignSystem_d0a47d = window.PsycheDesignSystem_d0a47d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/containers/MiniCard.jsx
try { (() => {
const CSS_ID = 'psy-minicard-css';
const css = `
.psy-minicard{flex-grow:1;border:2px solid var(--color-fg);max-width:216px;min-width:164px;position:relative;background:var(--color-bg);transform-style:preserve-3d;display:flex;flex-direction:column;padding:16px;gap:16px;color:var(--color-fg)}
.theme-dark .psy-minicard{border-color:var(--forest-400)}
.psy-minicard .sh{background:var(--color-fg);width:100%;height:100%;position:absolute;top:8px;left:8px;transform:translateZ(-10px)}
.theme-dark .psy-minicard .sh{background:var(--forest-400)}
.psy-minicard .sh i{display:block;background:var(--color-bg);width:calc(100% - 4px);height:calc(100% - 4px);position:absolute;top:2px;left:2px}
`;
function ensureCss() {
  if (typeof document !== 'undefined' && !document.getElementById(CSS_ID)) {
    const s = document.createElement('style');
    s.id = CSS_ID;
    s.textContent = css;
    document.head.appendChild(s);
  }
}

// Small stat card: display-font value over aux label, with offset shadow.
function MiniCard({
  value,
  text
}) {
  ensureCss();
  return /*#__PURE__*/React.createElement("div", {
    className: "psy-minicard"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'lowercase',
      fontSize: '1.875rem',
      lineHeight: '2.25rem'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-aux)',
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      fontWeight: 500
    }
  }, text), /*#__PURE__*/React.createElement("div", {
    className: "sh"
  }, /*#__PURE__*/React.createElement("i", null)));
}
Object.assign(__ds_scope, { MiniCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/containers/MiniCard.jsx", error: String((e && e.message) || e) }); }

// components/containers/OutlineBox.jsx
try { (() => {
// Giant fieldset with display-font legend — the site's defining container
// ("contribute compute", "training").
function OutlineBox({
  title,
  children,
  titleStyle,
  style
}) {
  return /*#__PURE__*/React.createElement("fieldset", {
    style: {
      position: 'relative',
      border: '2px solid var(--color-border)',
      padding: 0,
      margin: 0,
      flexShrink: 1,
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--color-bg)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("legend", {
    style: {
      margin: '0 1ch',
      transform: 'translateY(-10%)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '0 0.4ch',
      color: 'var(--color-accent-text)',
      fontFamily: 'var(--font-display)',
      textTransform: 'lowercase',
      fontSize: '2.25rem',
      lineHeight: '2.5rem',
      ...titleStyle
    }
  }, title)), children);
}
Object.assign(__ds_scope, { OutlineBox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/containers/OutlineBox.jsx", error: String((e && e.message) || e) }); }

// components/containers/RunBox.jsx
try { (() => {
// Bordered box with a tinted header bar (run detail: title + status + actions).
function RunBox({
  title,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      marginBottom: 24,
      border: '2px solid var(--color-border)',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 8,
      justifyContent: 'space-between',
      borderBottom: '2px solid var(--color-border)',
      padding: '8px 16px',
      color: 'var(--color-accent-text)',
      background: 'var(--surface-header)'
    }
  }, title), children);
}
Object.assign(__ds_scope, { RunBox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/containers/RunBox.jsx", error: String((e && e.message) || e) }); }

// components/containers/ShadowCard.jsx
try { (() => {
const CSS_ID = 'psy-shadowcard-css';
const css = `
.psy-shadowcard{flex-grow:1;text-decoration:none;border:2px solid var(--color-card-shadow);padding:16px;position:relative;cursor:pointer;background:var(--color-bg);transform-style:preserve-3d;display:block;color:var(--color-fg)}
.theme-dark .psy-shadowcard{color:var(--forest-300)}
.psy-shadowcard .psy-sc-shadow{background:var(--color-card-shadow);width:100%;height:100%;position:absolute;top:8px;left:8px;transform:translateZ(-10px)}
.psy-shadowcard .psy-sc-inner{background:var(--color-bg);width:calc(100% - 4px);height:calc(100% - 4px);position:absolute;top:2px;left:2px}
.psy-shadowcard:hover .psy-sc-inner{display:none}
.psy-shadowcard .psy-sc-content{display:flex;flex-direction:column;position:relative;gap:16px}
`;
function ensureCss() {
  if (typeof document !== 'undefined' && !document.getElementById(CSS_ID)) {
    const s = document.createElement('style');
    s.id = CSS_ID;
    s.textContent = css;
    document.head.appendChild(s);
  }
}

// Clickable card with a hard 8px offset shadow block; hover fills it solid.
function ShadowCard({
  children,
  href,
  onClick,
  style,
  className
}) {
  ensureCss();
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onClick: onClick,
    className: `psy-shadowcard${className ? ' ' + className : ''}`,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "psy-sc-content"
  }, children), /*#__PURE__*/React.createElement("div", {
    className: "psy-sc-shadow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "psy-sc-inner"
  })));
}
Object.assign(__ds_scope, { ShadowCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/containers/ShadowCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS_ID = 'psy-button-css';
const css = `
.psy-btn{font-family:var(--font-button,'Geist Mono',monospace);letter-spacing:.5px;font-size:.875rem;line-height:1.25rem;text-decoration:none;padding:0;display:inline-flex;align-items:center;justify-content:flex-start;border:none;cursor:pointer;text-transform:uppercase;border-radius:0;box-shadow:inset -1px -1px 0 rgba(0,0,0,.5),inset 1px 1px 0 rgba(255,255,255,.5)}
.psy-btn.center{justify-content:center}
.psy-btn:disabled{cursor:not-allowed}
.psy-btn:not(:disabled):active,.psy-btn.fakePressed{box-shadow:inset -1px -1px 0 rgba(255,255,255,.5),inset 1px 1px 0 rgba(0,0,0,.5)}
.psy-btn .contents{overflow:hidden;text-overflow:ellipsis;padding:0 4px}
.psy-btn:not(:has(.contents)){padding:3px 0}
.psy-btn .icon{display:flex;align-self:stretch;align-items:center;justify-content:center}
.psy-btn .icon>*{margin:0 3px;width:.9em;height:.9em}
.psy-btn:has(.icon.left) .contents{padding-left:0}
.psy-btn:has(.icon.right) .contents{padding-right:0}

.psy-btn--primary{background:var(--gold-300);color:var(--slate-1000)}
.psy-btn--primary:disabled{background:var(--slate-300);color:var(--slate-400);text-shadow:1px 1px 0 var(--slate-200)}
.theme-dark .psy-btn--primary:disabled{background:var(--forest-600);color:var(--forest-700);text-shadow:1px 1px 0 var(--forest-500)}

.psy-btn--secondary{background:var(--slate-300);color:var(--slate-1000)}
.psy-btn--secondary:disabled{background:var(--slate-200);color:var(--slate-300);text-shadow:1px 1px 0 var(--slate-100)}
.theme-dark .psy-btn--secondary{background:var(--forest-500);color:var(--slate-0)}
.theme-dark .psy-btn--secondary:disabled{background:var(--forest-600);color:var(--forest-700);text-shadow:1px 1px 0 var(--forest-500)}

.psy-btn--theme{background:var(--slate-200);color:var(--slate-1000)}
.psy-btn--theme:not(:disabled):active,.psy-btn--theme.fakePressed{background:var(--slate-100)}
.theme-dark .psy-btn--theme{background:var(--forest-700);color:var(--slate-0)}
.theme-dark .psy-btn--theme:not(:disabled):active,.theme-dark .psy-btn--theme.fakePressed{background:var(--forest-600)}

.psy-btn--action{--button-color:var(--forest-700);--button-bg:var(--slate-0);border:2px solid var(--button-color);background:transparent;color:var(--button-color);box-shadow:none}
.psy-btn--action:not(:disabled):not(:active):not(.fakePressed):hover{--button-color:var(--forest-400)}
.psy-btn--action:disabled{--button-color:var(--slate-300)}
.psy-btn--action:not(:disabled):active,.psy-btn--action.fakePressed{background:var(--forest-700);color:var(--slate-0);border-color:var(--forest-700);box-shadow:none}
.theme-dark .psy-btn--action{--button-color:var(--slate-0);--button-bg:var(--forest-700)}
.theme-dark .psy-btn--action:not(:disabled):not(:active):not(.fakePressed):hover{--button-color:var(--slate-400)}
.theme-dark .psy-btn--action:disabled{--button-color:var(--forest-600)}
.theme-dark .psy-btn--action:not(:disabled):active,.theme-dark .psy-btn--action.fakePressed{background:var(--slate-0);color:var(--forest-700);border-color:var(--slate-0)}
.psy-btn--action .icon{background:var(--button-color);color:var(--button-bg)}
.psy-btn--action:has(.icon.left) .contents{padding-left:4px}
.psy-btn--action:has(.icon.right) .contents{padding-right:4px}
`;
function ensureCss() {
  if (typeof document !== 'undefined' && !document.getElementById(CSS_ID)) {
    const s = document.createElement('style');
    s.id = CSS_ID;
    s.textContent = css;
    document.head.appendChild(s);
  }
}

// Psyche button — chunky beveled block. variant: primary (gold, the ONE main
// action), secondary, theme (toggle-style), action (outlined w/ filled icon well).
function Button({
  variant = 'primary',
  icon,
  iconSide = 'left',
  pressed,
  center,
  disabled,
  href,
  children,
  className,
  ...rest
}) {
  ensureCss();
  const cls = ['psy-btn', `psy-btn--${variant}`, pressed && 'fakePressed', center && 'center', className].filter(Boolean).join(' ');
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, icon && iconSide === 'left' && /*#__PURE__*/React.createElement("div", {
    className: "icon left"
  }, icon), children != null && children !== false && /*#__PURE__*/React.createElement("span", {
    className: "contents"
  }, children), icon && iconSide === 'right' && /*#__PURE__*/React.createElement("div", {
    className: "icon right"
  }, icon));
  if (href) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      className: cls
    }, rest), inner);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    disabled: disabled
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/InfoChit.jsx
try { (() => {
// Beveled value-over-label stat chit ("1.1b / params").
function InfoChit({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '4px 8px',
      boxShadow: 'inset -1px -1px 0px rgba(0,0,0,0.5), inset 1px 1px 0px rgba(255,255,255,0.5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 4px',
      fontFamily: "var(--font-body)",
      letterSpacing: '-0.25px',
      fontSize: '0.875rem',
      lineHeight: '1.25rem'
    }
  }, children), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-muted)',
      fontFamily: 'var(--font-aux)',
      fontSize: '0.75rem',
      lineHeight: '1rem'
    }
  }, label));
}
Object.assign(__ds_scope, { InfoChit });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/InfoChit.jsx", error: String((e && e.message) || e) }); }

// components/core/ProgressBar.jsx
try { (() => {
// Chunked segment progress bar (16px chunks / 4px gaps by default).
function ProgressBar({
  ratio = 0,
  chunkWidth = 16,
  chunkHeight = 12,
  chunkSpacing = 4,
  size = 'normal',
  disabled = false,
  dark = false
}) {
  const borderW = size === 'small' ? 1 : 2;
  const alpha = disabled ? 0.2 : 0.5;
  const fill = disabled ? 'var(--slate-300)' : size === 'big' && dark ? 'var(--lime-300)' : 'var(--forest-500)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: chunkHeight + 8,
      padding: size === 'small' ? 1 : 2,
      backgroundColor: 'var(--color-bg)',
      border: `${borderW}px solid`,
      borderColor: `rgba(0,0,0,${alpha}) rgba(255,255,255,${alpha}) rgba(255,255,255,${alpha}) rgba(0,0,0,${alpha})`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: `${Math.min(ratio, 1) * 100}%`,
      backgroundSize: `${chunkWidth + chunkSpacing}px 16px`,
      backgroundImage: `linear-gradient(to right, ${fill} ${chunkWidth}px, transparent ${chunkSpacing}px)`
    }
  }));
}

// ProgressBar + label row underneath ("tokens   1.2b/20b").
function Progress({
  label,
  current = 0,
  total = 1,
  ratio,
  chunkWidth = 16,
  chunkHeight = 12,
  chunkSpacing,
  size,
  format,
  showRight = true,
  dark
}) {
  const fmt = format || (n => {
    const suf = ['', 'k', 'm', 'b', 't', 'q'];
    let i = 0;
    let v = n;
    while (v >= 1000 && i < suf.length - 1) {
      v /= 1000;
      i++;
    }
    return `${+v.toFixed(3)}${suf[i]}`;
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    ratio: ratio ?? current / total,
    chunkHeight: chunkHeight,
    chunkWidth: chunkWidth,
    chunkSpacing: chunkSpacing,
    size: size,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 8,
      fontFamily: 'var(--font-aux)',
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      fontWeight: 500,
      color: 'var(--color-accent-text)'
    }
  }, /*#__PURE__*/React.createElement("span", null, label), showRight && /*#__PURE__*/React.createElement("span", null, fmt(current), "/", fmt(total))));
}
Object.assign(__ds_scope, { ProgressBar, Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/core/RadioSelectBar.jsx
try { (() => {
const CSS_ID = 'psy-radio-css';
const css = `
.psy-radio{display:inline-flex}
.psy-radio label{border:2px solid var(--color-fg);border-left-width:1px;border-right-width:1px;padding:2px 4px;text-transform:uppercase;cursor:pointer;font-family:var(--font-button);letter-spacing:.5px;font-size:.875rem;line-height:1.25rem}
.psy-radio label:first-of-type{border-left-width:2px}
.psy-radio label:last-of-type{border-right-width:2px}
.theme-dark .psy-radio label{border-color:var(--forest-300);color:var(--forest-300)}
.psy-radio label input{display:none}
.psy-radio label.checked{background:var(--color-fg);color:var(--color-bg)}
.theme-dark .psy-radio label.checked{background:var(--forest-300)}
`;
function ensureCss() {
  if (typeof document !== 'undefined' && !document.getElementById(CSS_ID)) {
    const s = document.createElement('style');
    s.id = CSS_ID;
    s.textContent = css;
    document.head.appendChild(s);
  }
}

// Joined segmented radio bar ("All | Active | Completed | Paused").
function RadioSelectBar({
  options = [],
  selected,
  onChange
}) {
  ensureCss();
  return /*#__PURE__*/React.createElement("div", {
    className: "psy-radio"
  }, options.map(({
    label,
    value
  }) => /*#__PURE__*/React.createElement("label", {
    key: value,
    className: value === selected ? 'checked' : ''
  }, label, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    value: value,
    checked: value === selected,
    onChange: () => onChange && onChange(value)
  }))));
}
Object.assign(__ds_scope, { RadioSelectBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/RadioSelectBar.jsx", error: String((e && e.message) || e) }); }

// components/core/StatBox.jsx
try { (() => {
// Global stat box: 2px currentColor border, big display value + small mono label.
function StatBox({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      border: '2px solid currentColor',
      display: 'inline-flex',
      gap: '0.5em',
      alignItems: 'center',
      padding: '0.5em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'lowercase',
      fontSize: '1.5rem',
      lineHeight: '2rem'
    }
  }, children), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      letterSpacing: '-0.25px',
      fontSize: '0.875rem',
      lineHeight: '1.25rem'
    }
  }, label));
}
Object.assign(__ds_scope, { StatBox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatBox.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusChip.jsx
try { (() => {
const CSS_ID = 'psy-statuschip-css';
const css = `
.psy-chip{display:flex;align-items:center;justify-content:center;gap:8px;text-transform:uppercase;font-family:var(--font-body);letter-spacing:-.25px;font-size:.875rem;line-height:1.25rem;font-weight:500;color:var(--color-fg)}
.psy-chip--bold{color:var(--color-bg);background:var(--color-fg)}
.psy-chip--bold-inverted{color:var(--color-fg);background:var(--color-bg)}
.psy-chip .dot{height:1em;width:1em;border-radius:100%;display:inline-block;position:relative}
.psy-chip .dot.pulse::after{content:'';position:absolute;inset:0;background:inherit;border-radius:100%;opacity:.5;animation:psy-pulse 2s ease-in-out infinite}
@keyframes psy-pulse{0%{transform:scale(1);opacity:.5}100%{transform:scale(2);opacity:0}}
`;
function ensureCss() {
  if (typeof document !== 'undefined' && !document.getElementById(CSS_ID)) {
    const s = document.createElement('style');
    s.id = CSS_ID;
    s.textContent = css;
    document.head.appendChild(s);
  }
}
const colors = {
  active: 'var(--success-400)',
  funding: 'var(--lime-300)',
  completed: 'var(--forest-500)',
  paused: 'var(--slate-400)',
  waitingForMembers: 'var(--gold-300)'
};
const labels = {
  active: 'active',
  funding: 'funding',
  completed: 'completed',
  paused: 'paused',
  waitingForMembers: 'waiting for compute'
};

// Run status indicator: colored dot (pulses when active) + uppercase label.
function StatusChip({
  status = 'active',
  variant = 'minimal',
  inverted,
  children
}) {
  ensureCss();
  const cls = ['psy-chip', variant === 'bold' && (inverted ? 'psy-chip--bold-inverted' : 'psy-chip--bold')].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, /*#__PURE__*/React.createElement("span", {
    className: `dot${status === 'active' ? ' pulse' : ''}`,
    style: {
      backgroundColor: colors[status]
    }
  }), children ?? labels[status]);
}
Object.assign(__ds_scope, { StatusChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusChip.jsx", error: String((e && e.message) || e) }); }

// components/core/iconData.js
try { (() => {
// AUTO-GENERATED from assets/icons + assets/logos.
// Small SVGs inlined; larger ones (corner-fleur.svg, fullscreen.svg, medusa-head.svg, symbol-02.svg, symbol-06.svg, hf.svg) are fetched at runtime by Icon.jsx.
const PSYCHE_ICONS = {
  "arrow-left": "<svg width=\"6\" height=\"12\" viewBox=\"0 0 6 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.25 12C5.66421 12 6 11.6642 6 11.25C6 10.8358 5.66421 10.5 5.25 10.5C4.83579 10.5 4.5 10.8358 4.5 11.25C4.5 11.6642 4.83579 12 5.25 12ZM5.25 1.5C5.66421 1.5 6 1.16421 6 0.75C6 0.33579 5.66421 0 5.25 0C4.83579 0 4.5 0.33579 4.5 0.75C4.5 1.16421 4.83579 1.5 5.25 1.5ZM4.5 9.75C4.5 10.1642 4.16421 10.5 3.75 10.5C3.33579 10.5 3 10.1642 3 9.75C3 9.33585 3.33579 9 3.75 9C4.16421 9 4.5 9.33585 4.5 9.75ZM3.75 3C4.16421 3 4.5 2.66421 4.5 2.25C4.5 1.83579 4.16421 1.5 3.75 1.5C3.33579 1.5 3 1.83579 3 2.25C3 2.66421 3.33579 3 3.75 3ZM3 8.25C3 8.66421 2.66421 9 2.25 9C1.83579 9 1.5 8.66421 1.5 8.25C1.5 7.83579 1.83579 7.5 2.25 7.5C2.66421 7.5 3 7.83579 3 8.25ZM2.25 4.5C2.66421 4.5 3 4.16421 3 3.75C3 3.33579 2.66421 3 2.25 3C1.83579 3 1.5 3.33579 1.5 3.75C1.5 4.16421 1.83579 4.5 2.25 4.5ZM1.5 6.75C1.5 7.16421 1.16421 7.5 0.75 7.5C0.33579 7.5 0 7.16421 0 6.75C0 6.33579 0.33579 6 0.75 6C1.16421 6 1.5 6.33579 1.5 6.75ZM0.75 6C0.33579 6 0 5.66421 0 5.25C0 4.83579 0.33579 4.5 0.75 4.5C1.16421 4.5 1.5 4.83579 1.5 5.25C1.5 5.66421 1.16421 6 0.75 6Z\" fill=\"#FCFDFC\"></path>\n</svg>",
  "arrow-right": "<svg width=\"6\" height=\"12\" viewBox=\"0 0 6 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0.75 0C0.33579 0 0 0.33579 0 0.75C0 1.16421 0.33579 1.5 0.75 1.5C1.16421 1.5 1.5 1.16421 1.5 0.75C1.5 0.33579 1.16421 0 0.75 0ZM0.75 10.5C0.33579 10.5 0 10.8358 0 11.25C0 11.6642 0.33579 12 0.75 12C1.16421 12 1.5 11.6642 1.5 11.25C1.5 10.8358 1.16421 10.5 0.75 10.5ZM1.5 2.25C1.5 1.83579 1.83579 1.5 2.25 1.5C2.66421 1.5 3 1.83579 3 2.25C3 2.66421 2.66421 3 2.25 3C1.83579 3 1.5 2.66421 1.5 2.25ZM2.25 9C1.83579 9 1.5 9.33585 1.5 9.75C1.5 10.1642 1.83579 10.5 2.25 10.5C2.66421 10.5 3 10.1642 3 9.75C3 9.33585 2.66421 9 2.25 9ZM3 3.75C3 3.33579 3.33579 3 3.75 3C4.16421 3 4.5 3.33579 4.5 3.75C4.5 4.16421 4.16421 4.5 3.75 4.5C3.33579 4.5 3 4.16421 3 3.75ZM3.75 7.5C3.33579 7.5 3 7.83579 3 8.25C3 8.66421 3.33579 9 3.75 9C4.16421 9 4.5 8.66421 4.5 8.25C4.5 7.83579 4.16421 7.5 3.75 7.5ZM4.5 5.25C4.5 4.83579 4.83579 4.5 5.25 4.5C5.66421 4.5 6 4.83579 6 5.25C6 5.66421 5.66421 6 5.25 6C4.83579 6 4.5 5.66421 4.5 5.25ZM5.25 6C5.66421 6 6 6.33579 6 6.75C6 7.16421 5.66421 7.5 5.25 7.5C4.83579 7.5 4.5 7.16421 4.5 6.75C4.5 6.33579 4.83579 6 5.25 6Z\" fill=\"#FCFDFC\"></path>\n</svg>",
  "chevron-down": "<svg width=\"12\" height=\"6\" viewBox=\"0 0 12 6\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 0.75C12 0.33579 11.6642 0 11.25 0C10.8358 0 10.5 0.33579 10.5 0.75C10.5 1.16421 10.8358 1.5 11.25 1.5C11.6642 1.5 12 1.16421 12 0.75ZM1.5 0.75C1.5 0.33579 1.16421 0 0.75 0C0.33579 0 0 0.33579 0 0.75C0 1.16421 0.33579 1.5 0.75 1.5C1.16421 1.5 1.5 1.16421 1.5 0.75ZM9.75 1.5C10.1642 1.5 10.5 1.83579 10.5 2.25C10.5 2.66421 10.1642 3 9.75 3C9.33585 3 9 2.66421 9 2.25C9 1.83579 9.33585 1.5 9.75 1.5ZM3 2.25C3 1.83579 2.66421 1.5 2.25 1.5C1.83579 1.5 1.5 1.83579 1.5 2.25C1.5 2.66421 1.83579 3 2.25 3C2.66421 3 3 2.66421 3 2.25ZM8.25 3C8.66421 3 9 3.33579 9 3.75C9 4.16421 8.66421 4.5 8.25 4.5C7.83579 4.5 7.5 4.16421 7.5 3.75C7.5 3.33579 7.83579 3 8.25 3ZM4.5 3.75C4.5 3.33579 4.16421 3 3.75 3C3.33579 3 3 3.33579 3 3.75C3 4.16421 3.33579 4.5 3.75 4.5C4.16421 4.5 4.5 4.16421 4.5 3.75ZM6.75 4.5C7.16421 4.5 7.5 4.83579 7.5 5.25C7.5 5.66421 7.16421 6 6.75 6C6.33579 6 6 5.66421 6 5.25C6 4.83579 6.33579 4.5 6.75 4.5ZM6 5.25C6 5.66421 5.66421 6 5.25 6C4.83579 6 4.5 5.66421 4.5 5.25C4.5 4.83579 4.83579 4.5 5.25 4.5C5.66421 4.5 6 4.83579 6 5.25Z\" fill=\"#FCFDFC\"></path>\n</svg>",
  "chevron-up": "<svg width=\"12\" height=\"6\" viewBox=\"0 0 12 6\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0 5.25C0 5.66421 0.33579 6 0.75 6C1.16421 6 1.5 5.66421 1.5 5.25C1.5 4.83579 1.16421 4.5 0.75 4.5C0.33579 4.5 0 4.83579 0 5.25ZM10.5 5.25C10.5 5.66421 10.8358 6 11.25 6C11.6642 6 12 5.66421 12 5.25C12 4.83579 11.6642 4.5 11.25 4.5C10.8358 4.5 10.5 4.83579 10.5 5.25ZM2.25 4.5C1.83579 4.5 1.5 4.16421 1.5 3.75C1.5 3.33579 1.83579 3 2.25 3C2.66421 3 3 3.33579 3 3.75C3 4.16421 2.66421 4.5 2.25 4.5ZM9 3.75C9 4.16421 9.33585 4.5 9.75 4.5C10.1642 4.5 10.5 4.16421 10.5 3.75C10.5 3.33579 10.1642 3 9.75 3C9.33585 3 9 3.33579 9 3.75ZM3.75 3C3.33579 3 3 2.66421 3 2.25C3 1.83579 3.33579 1.5 3.75 1.5C4.16421 1.5 4.5 1.83579 4.5 2.25C4.5 2.66421 4.16421 3 3.75 3ZM7.5 2.25C7.5 2.66421 7.83579 3 8.25 3C8.66421 3 9 2.66421 9 2.25C9 1.83579 8.66421 1.5 8.25 1.5C7.83579 1.5 7.5 1.83579 7.5 2.25ZM5.25 1.5C4.83579 1.5 4.5 1.16421 4.5 0.75C4.5 0.33579 4.83579 0 5.25 0C5.66421 0 6 0.33579 6 0.75C6 1.16421 5.66421 1.5 5.25 1.5ZM6 0.75C6 0.33579 6.33579 0 6.75 0C7.16421 0 7.5 0.33579 7.5 0.75C7.5 1.16421 7.16421 1.5 6.75 1.5C6.33579 1.5 6 1.16421 6 0.75Z\" fill=\"#FCFDFC\"></path>\n</svg>",
  "copy": "<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><title>ionicons-v5-e</title><path d=\"M456,480H136a24,24,0,0,1-24-24V128a16,16,0,0,1,16-16H456a24,24,0,0,1,24,24V456A24,24,0,0,1,456,480Z\"></path><path d=\"M112,80H400V56a24,24,0,0,0-24-24H60A28,28,0,0,0,32,60V376a24,24,0,0,0,24,24H80V112A32,32,0,0,1,112,80Z\"></path></svg>",
  "huggingface": "<svg width=\"20\" height=\"18\" viewBox=\"0 0 20 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M9.94354 15.2784C11.724 15.2784 13.4315 14.5712 14.6904 13.3122C15.9493 12.0533 16.6566 10.3458 16.6566 8.56536C16.6566 6.78495 15.9493 5.07745 14.6904 3.81851C13.4315 2.55956 11.724 1.85229 9.94354 1.85229C8.16312 1.85229 6.45563 2.55956 5.19668 3.81851C3.93774 5.07745 3.23047 6.78495 3.23047 8.56536C3.23047 10.3458 3.93774 12.0533 5.19668 13.3122C6.45563 14.5712 8.16312 15.2784 9.94354 15.2784Z\" fill=\"#FFD21E\"></path>\n<path d=\"M16.6559 8.56539C16.6559 6.78497 15.9486 5.07747 14.6897 3.81853C13.4307 2.55958 11.7232 1.85232 9.94283 1.85232C8.16241 1.85232 6.45492 2.55958 5.19597 3.81853C3.93703 5.07747 3.22976 6.78497 3.22976 8.56539C3.22976 10.3458 3.93703 12.0533 5.19597 13.3122C6.45492 14.5712 8.16241 15.2785 9.94283 15.2785C11.7232 15.2785 13.4307 14.5712 14.6897 13.3122C15.9486 12.0533 16.6559 10.3458 16.6559 8.56539ZM2.45703 8.56539C2.45703 7.58234 2.65066 6.60891 3.02685 5.7007C3.40305 4.79248 3.95445 3.96725 4.64957 3.27213C5.34469 2.57701 6.16992 2.02561 7.07814 1.64941C7.98636 1.27322 8.95978 1.07959 9.94283 1.07959C10.9259 1.07959 11.8993 1.27322 12.8075 1.64941C13.7157 2.02561 14.541 2.57701 15.2361 3.27213C15.9312 3.96725 16.4826 4.79248 16.8588 5.7007C17.235 6.60891 17.4286 7.58234 17.4286 8.56539C17.4286 10.5507 16.6399 12.4548 15.2361 13.8586C13.8322 15.2625 11.9282 16.0512 9.94283 16.0512C7.95747 16.0512 6.05343 15.2625 4.64957 13.8586C3.24571 12.4548 2.45703 10.5507 2.45703 8.56539Z\" fill=\"#FF9D0B\"></path>\n<path d=\"M12.1242 6.73976C12.3715 6.82476 12.4681 7.33089 12.7173 7.19953C12.886 7.10994 13.0244 6.97232 13.1149 6.80407C13.2055 6.63583 13.2441 6.44452 13.2259 6.25433C13.2076 6.06415 13.1334 5.88364 13.0126 5.73563C12.8918 5.58762 12.7298 5.47876 12.5472 5.42282C12.3645 5.36688 12.1693 5.36638 11.9863 5.42136C11.8034 5.47635 11.6408 5.58437 11.5192 5.73174C11.3977 5.87912 11.3225 6.05925 11.3033 6.24933C11.2841 6.43942 11.3217 6.63093 11.4114 6.79964C11.5292 7.0218 11.904 6.66055 12.1262 6.73782L12.1242 6.73976ZM7.57479 6.73976C7.32751 6.82476 7.22899 7.33089 6.98172 7.19953C6.81297 7.10994 6.67459 6.97232 6.58406 6.80407C6.49354 6.63583 6.45494 6.44452 6.47315 6.25433C6.49136 6.06415 6.56556 5.88364 6.68637 5.73563C6.80718 5.58762 6.96917 5.47876 7.15185 5.42282C7.33453 5.36688 7.52969 5.36638 7.71266 5.42136C7.89563 5.47635 8.05818 5.58437 8.17976 5.73174C8.30134 5.87912 8.37648 6.05925 8.39568 6.24933C8.41488 6.43942 8.37728 6.63093 8.28763 6.79964C8.16979 7.0218 7.79308 6.66055 7.57285 6.73782L7.57479 6.73976Z\" fill=\"#3A3B45\"></path>\n<path d=\"M9.89615 11.3742C11.7951 11.3742 12.4075 9.68197 12.4075 8.81265C12.4075 8.36061 12.1042 8.50356 11.6174 8.74311C11.1673 8.96527 10.5626 9.27243 9.89808 9.27243C8.50911 9.27243 7.38672 7.94334 7.38672 8.81265C7.38672 9.68197 7.99717 11.3742 9.89808 11.3742H9.89615Z\" fill=\"#FF323D\"></path>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.43952 10.9318C8.54145 10.7247 8.68497 10.5408 8.86113 10.3915C9.03728 10.2423 9.2423 10.131 9.46338 10.0645C9.54065 10.0413 9.61986 10.1746 9.70293 10.3117C9.7802 10.4431 9.86134 10.5764 9.94247 10.5764C10.0294 10.5764 10.1163 10.445 10.1994 10.3156C10.2863 10.1804 10.3713 10.049 10.4544 10.0741C10.8694 10.2059 11.2162 10.4951 11.4203 10.8797C12.1409 10.3117 12.4055 9.38445 12.4055 8.81263C12.4055 8.36059 12.1022 8.50354 11.6154 8.74309L11.5884 8.75661C11.1421 8.97877 10.5471 9.27241 9.89418 9.27241C9.24122 9.27241 8.64815 8.97877 8.19997 8.75661C7.6977 8.50741 7.38281 8.35093 7.38281 8.81263C7.38281 9.40184 7.66486 10.3697 8.43952 10.9318Z\" fill=\"#3A3B45\"></path>\n<path d=\"M14.4838 7.64777C14.6503 7.64777 14.81 7.58162 14.9278 7.46388C15.0455 7.34614 15.1116 7.18644 15.1116 7.01993C15.1116 6.85342 15.0455 6.69372 14.9278 6.57598C14.81 6.45824 14.6503 6.39209 14.4838 6.39209C14.3173 6.39209 14.1576 6.45824 14.0399 6.57598C13.9221 6.69372 13.856 6.85342 13.856 7.01993C13.856 7.18644 13.9221 7.34614 14.0399 7.46388C14.1576 7.58162 14.3173 7.64777 14.4838 7.64777ZM5.50085 7.64777C5.66737 7.64777 5.82706 7.58162 5.9448 7.46388C6.06255 7.34614 6.12869 7.18644 6.12869 7.01993C6.12869 6.85342 6.06255 6.69372 5.9448 6.57598C5.82706 6.45824 5.66737 6.39209 5.50085 6.39209C5.33434 6.39209 5.17465 6.45824 5.0569 6.57598C4.93916 6.69372 4.87301 6.85342 4.87301 7.01993C4.87301 7.18644 4.93916 7.34614 5.0569 7.46388C5.17465 7.58162 5.33434 7.64777 5.50085 7.64777ZM4.20847 9.77277C3.89551 9.77277 3.61733 9.90027 3.42222 10.134C3.25584 10.3395 3.16513 10.596 3.16528 10.8604C3.04365 10.8238 2.91752 10.8043 2.79051 10.8024C2.49108 10.8024 2.22062 10.9164 2.02937 11.1231C1.85875 11.3003 1.75117 11.5287 1.72324 11.7731C1.69531 12.0175 1.74858 12.2643 1.87483 12.4754C1.70386 12.615 1.58257 12.806 1.52903 13.0202C1.48267 13.194 1.43631 13.5611 1.68358 13.9358C1.59088 14.0784 1.53572 14.242 1.52323 14.4115C1.51073 14.5811 1.5413 14.751 1.6121 14.9056C1.80915 15.3538 2.30176 15.7054 3.25801 16.084C3.85108 16.3197 4.39585 16.4704 4.39972 16.4723C5.0879 16.663 5.79723 16.7668 6.51119 16.7814C7.64324 16.7814 8.45267 16.4337 8.91824 15.7498C9.66779 14.6506 9.56154 13.6441 8.58983 12.6744C8.05472 12.1373 7.69733 11.3472 7.62392 11.1733C7.47324 10.6595 7.07529 10.0877 6.41653 10.0877C6.24128 10.0904 6.06922 10.135 5.91466 10.2177C5.7601 10.3003 5.62751 10.4187 5.5279 10.5629C5.33472 10.3195 5.1454 10.1282 4.9754 10.0181C4.74854 9.86454 4.48234 9.77938 4.20847 9.77277ZM4.20847 10.5455C4.30699 10.5455 4.42869 10.588 4.56006 10.6711C4.97347 10.9338 5.76744 12.2996 6.05915 12.8308C6.15574 13.0086 6.32381 13.0839 6.47256 13.0839C6.77199 13.0839 7.00381 12.7883 6.50153 12.4116C5.74426 11.8456 6.00892 10.9203 6.37017 10.8642C6.38563 10.8604 6.40301 10.8604 6.41653 10.8604C6.74494 10.8604 6.88983 11.4264 6.88983 11.4264C6.88983 11.4264 7.31483 12.4928 8.04506 13.223C8.77335 13.9513 8.81199 14.5366 8.28074 15.3152C7.91756 15.8464 7.22403 16.0067 6.51119 16.0067C5.77517 16.0067 5.0179 15.8329 4.59483 15.7247C4.57358 15.7189 1.99653 14.9906 2.32301 14.3724C2.3771 14.2681 2.4679 14.2256 2.58187 14.2256C3.04165 14.2256 3.87619 14.9095 4.23744 14.9095C4.31665 14.9095 4.37267 14.8766 4.39778 14.7936C4.5504 14.243 2.06801 14.0112 2.27665 13.2153C2.31528 13.0742 2.41381 13.0182 2.55483 13.0182C3.16142 13.0182 4.52528 14.0865 4.81119 14.0865C4.83244 14.0865 4.84983 14.0807 4.85756 14.0672C5.00051 13.8354 4.92131 13.6731 3.91097 13.0627C2.90449 12.4522 2.19551 12.0852 2.59733 11.6466C2.64369 11.5964 2.70937 11.5732 2.79051 11.5732C3.4029 11.5732 4.84983 12.8907 4.84983 12.8907C4.84983 12.8907 5.24006 13.2964 5.47767 13.2964C5.53176 13.2964 5.57813 13.2771 5.60903 13.223C5.77517 12.941 4.05199 11.635 3.9554 11.0961C3.88972 10.729 4.00176 10.5455 4.20847 10.5455Z\" fill=\"#FF9D0B\"></path>\n<path d=\"M8.28218 15.3151C8.81343 14.5346 8.77479 13.9493 8.0465 13.221C7.31627 12.4927 6.89127 11.4244 6.89127 11.4244C6.89127 11.4244 6.73286 10.8062 6.37161 10.8642C6.01036 10.9221 5.7457 11.8455 6.50297 12.4116C7.25831 12.9776 6.35229 13.362 6.06059 12.8308C5.77081 12.2995 4.97491 10.9337 4.5615 10.671C4.15002 10.4102 3.86025 10.5551 3.95684 11.096C4.05343 11.635 5.77854 12.9409 5.61047 13.221C5.44241 13.505 4.85127 12.8906 4.85127 12.8906C4.85127 12.8906 3.00252 11.208 2.59877 11.6466C2.19695 12.0851 2.90593 12.4521 3.9124 13.0626C4.92275 13.673 5.00195 13.8353 4.859 14.0671C4.71411 14.2989 2.48672 12.4193 2.27809 13.2171C2.06945 14.0111 4.55184 14.241 4.39922 14.7916C4.24468 15.3421 2.649 13.7522 2.32445 14.3704C1.99604 14.9905 4.57502 15.7188 4.59627 15.7246C5.42695 15.941 7.54229 16.3988 8.28218 15.3151Z\" fill=\"#FFD21E\"></path>\n<path d=\"M15.7755 9.77271C16.0885 9.77271 16.3686 9.9002 16.5618 10.134C16.7282 10.3395 16.8189 10.5959 16.8187 10.8603C16.941 10.8236 17.0678 10.8041 17.1954 10.8024C17.4949 10.8024 17.7653 10.9163 17.9566 11.123C18.1272 11.3002 18.2348 11.5286 18.2627 11.773C18.2906 12.0174 18.2374 12.2642 18.1111 12.4753C18.2814 12.6152 18.402 12.8062 18.455 13.0201C18.5013 13.194 18.5477 13.561 18.3004 13.9358C18.3931 14.0783 18.4483 14.2419 18.4608 14.4115C18.4733 14.581 18.4427 14.751 18.3719 14.9055C18.1749 15.3537 17.6823 15.7053 16.7279 16.084C16.1329 16.3196 15.5882 16.4703 15.5843 16.4722C14.8961 16.6629 14.1868 16.7667 13.4728 16.7813C12.3408 16.7813 11.5313 16.4336 11.0658 15.7497C10.3162 14.6505 10.4225 13.6441 11.3942 12.6743C11.9312 12.1373 12.2886 11.3471 12.362 11.1733C12.5127 10.6594 12.9087 10.0876 13.5675 10.0876C13.7427 10.0904 13.9148 10.1349 14.0694 10.2176C14.2239 10.3002 14.3565 10.4186 14.4561 10.5628C14.6493 10.3194 14.8386 10.1282 15.0105 10.018C15.2369 9.86482 15.5023 9.77968 15.7755 9.77271ZM15.7755 10.5454C15.677 10.5454 15.5573 10.5879 15.424 10.671C15.0125 10.9337 14.2166 12.2995 13.9249 12.8308C13.8855 12.9066 13.8262 12.9702 13.7534 13.0148C13.6805 13.0594 13.5969 13.0833 13.5115 13.0838C13.214 13.0838 12.9802 12.7883 13.4844 12.4116C14.2398 11.8455 13.9751 10.9202 13.6138 10.8642C13.5985 10.8617 13.583 10.8604 13.5675 10.8603C13.2391 10.8603 13.0942 11.4263 13.0942 11.4263C13.0942 11.4263 12.6692 12.4927 11.9409 13.2229C11.2107 13.9512 11.172 14.5366 11.7052 15.3151C12.0665 15.8463 12.7619 16.0067 13.4728 16.0067C14.2108 16.0067 14.9661 15.8328 15.3911 15.7246C15.4104 15.7188 17.9894 14.9905 17.6629 14.3724C17.6069 14.268 17.518 14.2255 17.4041 14.2255C16.9443 14.2255 16.1078 14.9094 15.7485 14.9094C15.6674 14.9094 15.6113 14.8766 15.5882 14.7935C15.4336 14.2429 17.916 14.0111 17.7074 13.2152C17.6707 13.0742 17.5721 13.0182 17.4292 13.0182C16.8226 13.0182 15.4587 14.0865 15.1728 14.0865C15.1535 14.0865 15.1361 14.0807 15.1284 14.0671C14.9854 13.8353 15.0627 13.673 16.0711 13.0626C17.0815 12.4521 17.7904 12.0851 17.3848 11.6466C17.3403 11.5963 17.2746 11.5732 17.1954 11.5732C16.5811 11.5732 15.1342 12.8907 15.1342 12.8907C15.1342 12.8907 14.744 13.2963 14.5083 13.2963C14.4817 13.2975 14.4554 13.2913 14.4322 13.2783C14.4089 13.2654 14.3898 13.2462 14.3769 13.2229C14.2088 12.9409 15.932 11.635 16.0286 11.096C16.0943 10.729 15.9823 10.5454 15.7755 10.5454Z\" fill=\"#FF9D0B\"></path>\n<path d=\"M11.7045 15.3151C11.1732 14.5346 11.21 13.9493 11.9402 13.221C12.6685 12.4927 13.0935 11.4244 13.0935 11.4244C13.0935 11.4244 13.2519 10.8062 13.6151 10.8642C13.9744 10.9221 14.239 11.8455 13.4837 12.4116C12.7264 12.9776 13.6344 13.362 13.9242 12.8308C14.2159 12.2995 15.0118 10.9337 15.4232 10.671C15.8347 10.4102 16.1264 10.5551 16.0279 11.096C15.9313 11.635 14.2081 12.9409 14.3762 13.221C14.5423 13.505 15.1335 12.8906 15.1335 12.8906C15.1335 12.8906 16.9842 11.208 17.386 11.6466C17.7878 12.0851 17.0807 12.4521 16.0723 13.0626C15.062 13.673 14.9847 13.8353 15.1257 14.0671C15.2706 14.2989 17.498 12.4193 17.7067 13.2171C17.9153 14.0111 15.4348 14.241 15.5875 14.7916C15.742 15.3421 17.3357 13.7522 17.6622 14.3704C17.9887 14.9905 15.4117 15.7188 15.3904 15.7246C14.5578 15.941 12.4425 16.3988 11.7045 15.3151Z\" fill=\"#FFD21E\"></path>\n</svg>",
  "link": "<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M14 7H16C18.7614 7 21 9.23858 21 12C21 14.7614 18.7614 17 16 17H14M10 7H8C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17H10M8 12H16\" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>",
  "moon": "<svg width=\"6\" height=\"16\" viewBox=\"0 0 6 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M0 11.75C0 12.1642 0.33579 12.5 0.75 12.5C1.16421 12.5 1.5 12.1642 1.5 11.75C1.5 11.3358 1.16421 11 0.75 11C1.16421 11 1.5 10.6642 1.5 10.25C1.5 9.83579 1.16421 9.5 0.75 9.5C1.16421 9.5 1.5 9.16421 1.5 8.75C1.5 8.33579 1.16421 8 0.75 8C1.16421 8 1.5 7.66421 1.5 7.25C1.5 6.83579 1.16421 6.5 0.75 6.5C1.16421 6.5 1.5 6.16421 1.5 5.75C1.5 5.33579 1.16421 5 0.75 5C1.16421 5 1.5 4.66415 1.5 4.25C1.5 3.83585 1.16421 3.5 0.75 3.5C0.33579 3.5 0 3.83585 0 4.25C0 4.66415 0.33579 5 0.75 5C0.33579 5 0 5.33579 0 5.75C0 6.16421 0.33579 6.5 0.75 6.5C0.33579 6.5 0 6.83579 0 7.25C0 7.66421 0.33579 8 0.75 8C0.33579 8 0 8.33579 0 8.75C0 9.16421 0.33579 9.5 0.75 9.5C0.33579 9.5 0 9.83579 0 10.25C0 10.6642 0.33579 11 0.75 11C0.33579 11 0 11.3358 0 11.75Z\" fill=\"#0C100A\"></path>\n<path d=\"M1.5 13.25C1.5 13.6642 1.83579 14 2.25 14C2.66421 14 3 13.6642 3 13.25C3 12.8358 2.66421 12.5 2.25 12.5C1.83579 12.5 1.5 12.8358 1.5 13.25Z\" fill=\"#0C100A\"></path>\n<path d=\"M3 14.75C3 15.1642 3.33579 15.5 3.75 15.5C4.16421 15.5 4.5 15.1642 4.5 14.75C4.5 15.1642 4.83579 15.5 5.25 15.5C5.66421 15.5 6 15.1642 6 14.75C6 14.3358 5.66421 14 5.25 14C5.66421 14 6 13.6642 6 13.25C6 12.8358 5.66421 12.5 5.25 12.5C5.66421 12.5 6 12.1642 6 11.75C6 11.3358 5.66421 11 5.25 11C5.66421 11 6 10.6642 6 10.25C6 9.83579 5.66421 9.5 5.25 9.5C5.66421 9.5 6 9.16421 6 8.75C6 8.33579 5.66421 8 5.25 8C5.66421 8 6 7.66421 6 7.25C6 6.83579 5.66421 6.5 5.25 6.5C5.66421 6.5 6 6.16421 6 5.75C6 5.33579 5.66421 5 5.25 5C5.66421 5 6 4.66415 6 4.25C6 3.83585 5.66421 3.5 5.25 3.5C5.66421 3.5 6 3.16415 6 2.75C6 2.33585 5.66421 2 5.25 2C5.66421 2 6 1.66415 6 1.25C6 0.83585 5.66421 0.5 5.25 0.5C4.83579 0.5 4.5 0.83585 4.5 1.25C4.5 0.83585 4.16421 0.5 3.75 0.5C3.33579 0.5 3 0.83585 3 1.25C3 1.66415 3.33579 2 3.75 2C4.16421 2 4.5 1.66415 4.5 1.25C4.5 1.66415 4.83579 2 5.25 2C4.83579 2 4.5 2.33585 4.5 2.75C4.5 3.16415 4.83579 3.5 5.25 3.5C4.83579 3.5 4.5 3.83585 4.5 4.25C4.5 4.66415 4.83579 5 5.25 5C4.83579 5 4.5 5.33579 4.5 5.75C4.5 6.16421 4.83579 6.5 5.25 6.5C4.83579 6.5 4.5 6.83579 4.5 7.25C4.5 7.66421 4.83579 8 5.25 8C4.83579 8 4.5 8.33579 4.5 8.75C4.5 9.16421 4.83579 9.5 5.25 9.5C4.83579 9.5 4.5 9.83579 4.5 10.25C4.5 10.6642 4.83579 11 5.25 11C4.83579 11 4.5 11.3358 4.5 11.75C4.5 12.1642 4.83579 12.5 5.25 12.5C4.83579 12.5 4.5 12.8358 4.5 13.25C4.5 13.6642 4.83579 14 5.25 14C4.83579 14 4.5 14.3358 4.5 14.75C4.5 14.3358 4.16421 14 3.75 14C3.33579 14 3 14.3358 3 14.75Z\" fill=\"#0C100A\"></path>\n<path d=\"M2.25 3.5C1.83579 3.5 1.5 3.16415 1.5 2.75C1.5 2.33585 1.83579 2 2.25 2C2.66421 2 3 2.33585 3 2.75C3 3.16415 2.66421 3.5 2.25 3.5Z\" fill=\"#0C100A\"></path>\n</svg>",
  "psyche-box": "<svg width=\"120\" height=\"120\" viewBox=\"0 0 120 120\" xmlns=\"http://www.w3.org/2000/svg\">\n<g clip-path=\"url(#clip0_55_2145)\">\n<path d=\"M0 120V0H120V120H0ZM34.2276 66.4997C34.2276 67.2984 34.2291 68.0971 34.2276 68.8973C34.2173 72.415 34.232 75.9327 34.207 79.4503C34.1805 83.0476 34.1981 86.6448 34.1539 90.2421C34.12 93.0258 34.1303 95.8111 34.123 98.5963C34.1215 99.1563 34.0729 99.7134 33.9712 100.263C33.7472 101.461 33.1636 102.428 32.0996 103.059C31.0386 103.688 29.8921 103.878 28.6777 103.658C27.8127 103.502 27.0641 103.144 26.4893 102.453C26.1371 102.029 25.8807 101.553 25.6832 101.047C25.1674 99.7311 24.7843 98.3797 24.6133 96.9694C24.5102 96.1117 24.3687 95.2585 24.2199 94.4081C24.1226 93.8526 23.9192 93.3382 23.4978 92.93C22.7315 92.1873 21.5761 92.2816 20.9586 93.1467C20.8186 93.3427 20.7052 93.5534 20.6226 93.7804C20.434 94.2976 20.3338 94.837 20.3279 95.3808C20.3161 96.5126 20.3028 97.6458 20.3441 98.7776C20.4252 100.932 20.49 103.088 20.5563 105.244C20.5666 105.59 20.574 105.935 20.6079 106.28C20.6934 107.126 21.0868 107.621 21.9033 107.857C22.366 107.991 22.8449 108.028 23.3254 108.028C31.4394 108.028 39.5535 108.028 47.6675 108.028C52.1976 108.028 56.7277 108.028 61.2578 108.028C61.8723 108.028 62.4839 107.982 63.066 107.768C64.0872 107.394 64.2832 106.301 63.4639 105.582C63.2915 105.431 63.0969 105.318 62.8891 105.225C62.4338 105.02 61.9519 104.918 61.4567 104.914C59.4201 104.893 57.382 104.902 55.3454 104.831C54.2475 104.793 53.1644 104.627 52.1519 104.201C49.3402 103.02 47.7501 100.866 47.2431 97.8845C47.0457 96.7218 47.0663 95.5502 47.1694 94.3816C47.2726 93.2174 47.3934 92.0532 47.5128 90.8905C47.5614 90.413 47.6484 89.9444 47.8871 89.5155C48.2924 88.7875 49.1677 88.1922 50.2465 88.9526C51.0629 89.5273 51.8719 90.1109 52.7399 90.6105C55.2629 92.0606 57.9656 93.045 60.7862 93.7155C63.4315 94.3433 66.1135 94.7382 68.8207 94.9652C69.9215 95.058 71.0253 95.0964 72.1276 95.1361C73.7796 95.1966 75.4287 95.1302 77.0689 94.9387C78.9227 94.722 80.7442 94.333 82.5495 93.8702C84.9221 93.2616 87.1989 92.4216 89.212 90.9804C90.3821 90.1418 91.3768 89.1309 92.1608 87.921C92.4762 87.4332 92.6839 86.9086 92.6972 86.3132C92.7178 85.4113 92.0989 84.7585 91.1941 84.7644C90.5707 84.7688 89.9901 84.9633 89.4256 85.2065C88.5709 85.5749 87.7191 85.9492 86.8629 86.3162C85.3833 86.9513 83.8949 87.5629 82.3196 87.9225C79.9573 88.4619 77.5846 88.932 75.1472 88.9821C73.3478 89.0189 71.5544 88.9762 69.7624 88.8155C68.1841 88.6741 66.619 88.4412 65.0672 88.1185C62.5163 87.5865 60.0494 86.8128 57.7151 85.6368C54.8576 84.197 52.5277 82.1693 50.7873 79.471C49.5185 77.5036 48.6505 75.3697 48.0566 73.115C47.5939 71.3613 47.2976 69.5767 47.1945 67.7685C47.1149 66.3611 47.1149 64.9479 47.2254 63.5361C47.3183 62.3542 47.473 61.1826 47.6941 60.0199C48.1259 57.7475 48.8568 55.5679 49.7985 53.4606C50.4734 51.9515 51.2058 50.472 52.2492 49.1722C52.9256 48.3307 53.5991 47.4892 54.2858 46.6566C55.3366 45.3848 56.5582 44.2899 57.9302 43.3865C60.882 41.4442 64.1329 40.7781 67.6138 41.3278C70.651 41.8082 73.0988 43.2907 74.8716 45.8284C75.5996 46.8703 76.2156 47.9711 76.4735 49.2385C76.6047 49.8854 76.6238 50.5309 76.444 51.1734C76.3497 51.5109 76.1964 51.813 75.9415 52.0606C75.3358 52.65 74.6255 52.8239 73.8091 52.6353C73.2712 52.5115 72.7849 52.2654 72.2971 52.0223C71.3761 51.561 70.4255 51.1867 69.3969 51.0511C68.6424 50.9524 67.8849 50.9568 67.1274 50.9848C66.1091 51.0231 65.1173 51.1999 64.1771 51.6052C62.8184 52.1903 61.7574 53.1349 60.8967 54.3256C59.5513 56.1854 58.5418 58.2176 57.8226 60.3942C57.2509 62.1228 56.9296 63.9001 56.9414 65.7245C56.9473 66.7369 57.1005 67.7375 57.2833 68.7323C57.41 69.4264 57.578 70.1116 57.8389 70.7704C58.7466 73.0649 60.1835 74.9674 62.1022 76.5089C63.3047 77.4741 64.6428 78.2124 66.0531 78.8225C67.6447 79.5107 69.2775 80.0737 70.9914 80.3728C72.5064 80.6381 74.0316 80.6956 75.5657 80.6116C76.951 80.5364 78.3215 80.3581 79.6743 80.0619C82.4345 79.4548 85.1255 78.6206 87.7294 77.5154C89.1412 76.9171 90.5029 76.22 91.7644 75.3417C93.7081 73.9889 95.4618 72.4224 97.046 70.6613C99.9005 67.487 101.999 63.8795 103.297 59.8121C103.722 58.4814 104.045 57.1271 104.286 55.7477C104.512 54.4612 104.652 53.1658 104.708 51.866C104.749 50.8964 104.74 49.9237 104.675 48.9511C104.596 47.756 104.473 46.5682 104.269 45.3863C103.695 42.0779 102.603 38.9522 100.987 36.0108C99.0841 32.5476 96.5833 29.5841 93.5063 27.1083C91.5654 25.5462 89.4816 24.2317 87.1267 23.3696C85.4614 22.7595 83.7594 22.2879 82.0293 21.9062C80.924 21.6616 79.9661 21.1355 79.216 20.266C78.9905 20.0037 78.7651 19.7399 78.5322 19.4835C78.1682 19.0826 77.7379 18.785 77.2221 18.6007C76.5074 18.3458 75.7676 18.281 75.0219 18.281C63.0969 18.2765 51.1719 18.278 39.247 18.278C33.7973 18.278 28.3476 18.278 22.898 18.278C22.2982 18.278 21.6984 18.3134 21.1163 18.4696C20.3957 18.6641 19.9462 19.1254 19.7944 19.8637C19.734 20.154 19.7414 20.4458 19.7841 20.7361C19.8961 21.4759 20.238 22.1228 20.6212 22.7491C21.4346 24.0769 22.6165 24.9007 24.1197 25.2691C24.9272 25.4681 25.7569 25.4548 26.5792 25.5034C27.3367 25.5491 28.1015 25.5963 28.834 25.782C30.3194 26.1607 31.6251 26.8916 32.695 28.0057C33.6485 28.999 34.2571 30.1735 34.2954 31.5662C34.3249 32.6434 34.3352 33.7236 34.3632 34.8009C34.3794 35.4419 34.3072 36.0771 34.3057 36.7167C34.2925 44.032 34.3337 51.3473 34.2836 58.6641C34.2659 61.2755 34.291 63.8868 34.2276 66.4982V66.4997Z\" fill=\"#FCFDFC\"></path>\n<path d=\"M61.4066 27.7302C62.8184 27.7302 64.2302 27.7287 65.642 27.7302C67.7464 27.7331 69.8523 27.7125 71.9567 27.7493C74.9055 27.7994 77.7129 28.4655 80.2903 29.923C82.6747 31.2714 84.8838 32.8718 86.7863 34.8613C88.1038 36.2392 89.1501 37.8086 90.0033 39.5063C91.4151 42.3151 92.4364 45.264 93.0656 48.3454C93.3338 49.6614 93.4812 50.9922 93.5623 52.3362C93.6934 54.5452 93.4561 56.7159 93.0126 58.8749C92.4703 61.5127 91.5536 64.0077 90.2524 66.3685C89.2458 68.1944 87.949 69.755 86.2602 70.9826C85.8505 71.2803 85.4364 71.5691 85.0297 71.8712C83.5236 72.9883 81.8406 73.7295 80.0457 74.2409C78.715 74.6196 77.3754 74.9497 76.0004 75.1162C72.6979 75.5171 69.5457 75.044 66.6058 73.4466C65.5933 72.8969 64.7607 72.0967 64.0136 71.2198C62.8906 69.9038 62.0418 68.4479 61.7073 66.7251C61.6129 66.2418 61.5452 65.754 61.5054 65.2647C61.4449 64.5235 61.3536 63.7807 61.414 63.035C61.5805 61.0102 62.3262 59.233 63.7807 57.805C65.1277 56.4831 66.7811 55.9938 68.6512 56.1942C69.9318 56.3313 71.0563 56.7778 71.8859 57.802C72.5992 58.6818 72.9897 59.7104 73.1607 60.8201C73.3758 62.2083 73.0325 63.4565 72.1733 64.5677C71.8226 65.0201 71.4704 65.474 71.1859 65.9721C70.7807 66.6794 71.0091 67.3072 71.7784 67.599C72.3398 67.8127 72.9043 67.7449 73.4672 67.6034C74.1701 67.4281 74.8274 67.1436 75.4287 66.7369C77.287 65.4784 78.9345 64.0047 80.14 62.083C81.4192 60.0449 82.2017 57.833 82.5244 55.45C82.6718 54.3639 82.7145 53.2719 82.6467 52.1829C82.5038 49.8736 81.9246 47.6793 80.9078 45.5926C80.196 44.1322 79.331 42.7823 78.2655 41.5636C75.691 38.6192 72.5329 36.6282 68.6866 35.7941C66.2226 35.2592 63.7689 35.3432 61.3359 35.9916C58.8837 36.6444 56.6776 37.7895 54.6837 39.3531C53.4841 40.2947 52.4187 41.3705 51.4578 42.5524C51.1277 42.9591 50.7357 43.2981 50.2686 43.5427C49.3461 44.0261 48.3896 43.7652 47.8503 42.8781C47.504 42.3092 47.3492 41.6785 47.2623 41.0286C47.1444 40.14 47.168 39.2469 47.193 38.3568C47.2151 37.5699 47.1783 36.7859 47.1385 36.0019C47.0678 34.5916 46.9911 33.1828 47.0162 31.771C47.0235 31.3451 47.0339 30.9207 47.0707 30.4948C47.1768 29.279 47.756 28.4243 48.9084 27.9807C49.6408 27.6992 50.4086 27.6196 51.1823 27.6049C52.6869 27.5784 54.1915 27.5651 55.6961 27.6255C56.6408 27.6624 57.5869 27.6594 58.533 27.6653C59.4923 27.6712 60.4517 27.6653 61.411 27.6653C61.411 27.6874 61.411 27.7095 61.411 27.7316L61.4066 27.7302Z\" fill=\"#FCFDFC\"></path>\n</g>\n<defs>\n<clipPath id=\"clip0_55_2145\">\n<rect width=\"120\" height=\"120\" fill=\"white\"></rect>\n</clipPath>\n</defs>\n</svg>",
  "smiley": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.5 1.25C3.5 0.83579 3.83579 0.5 4.25 0.5C4.66421 0.5 5 0.83579 5 1.25C5 1.66421 4.66421 2 4.25 2C3.83579 2 3.5 1.66421 3.5 1.25ZM3.5 1.25C3.5 1.66421 3.16421 2 2.75 2C2.33579 2 2 1.66421 2 1.25C2 0.83579 2.33579 0.5 2.75 0.5C3.16421 0.5 3.5 0.83579 3.5 1.25ZM6.5 1.25C6.5 1.66421 6.16421 2 5.75 2C5.33579 2 5 1.66421 5 1.25C5 0.83579 5.33579 0.5 5.75 0.5C6.16421 0.5 6.5 0.83579 6.5 1.25ZM8 1.25C8 1.66421 7.66421 2 7.25 2C6.83579 2 6.5 1.66421 6.5 1.25C6.5 0.83579 6.83579 0.5 7.25 0.5C7.66421 0.5 8 0.83579 8 1.25ZM9.5 1.25C9.5 1.66421 9.16421 2 8.75 2C8.33579 2 8 1.66421 8 1.25C8 0.83579 8.33579 0.5 8.75 0.5C9.16421 0.5 9.5 0.83579 9.5 1.25ZM11 1.25C11 1.66421 10.6642 2 10.25 2C9.83579 2 9.5 1.66421 9.5 1.25C9.5 0.83579 9.83579 0.5 10.25 0.5C10.6642 0.5 11 0.83579 11 1.25ZM12.5 1.25C12.5 1.66421 12.1642 2 11.75 2C11.3358 2 11 1.66421 11 1.25C11 0.83579 11.3358 0.5 11.75 0.5C12.1642 0.5 12.5 0.83579 12.5 1.25ZM12.5 1.25C12.5 0.83579 12.8358 0.5 13.25 0.5C13.6642 0.5 14 0.83579 14 1.25C14 1.66421 13.6642 2 13.25 2C12.8358 2 12.5 1.66421 12.5 1.25ZM3.5 14.75C3.5 14.3358 3.83579 14 4.25 14C4.66421 14 5 14.3358 5 14.75C5 15.1642 4.66421 15.5 4.25 15.5C3.83579 15.5 3.5 15.1642 3.5 14.75ZM6.5 14.75C6.5 15.1642 6.16421 15.5 5.75 15.5C5.33579 15.5 5 15.1642 5 14.75C5 14.3358 5.33579 14 5.75 14C6.16421 14 6.5 14.3358 6.5 14.75ZM8 14.75C8 15.1642 7.66421 15.5 7.25 15.5C6.83579 15.5 6.5 15.1642 6.5 14.75C6.5 14.3358 6.83579 14 7.25 14C7.66421 14 8 14.3358 8 14.75ZM9.5 14.75C9.5 15.1642 9.16421 15.5 8.75 15.5C8.33579 15.5 8 15.1642 8 14.75C8 14.3358 8.33579 14 8.75 14C9.16421 14 9.5 14.3358 9.5 14.75ZM11 14.75C11 15.1642 10.6642 15.5 10.25 15.5C9.83579 15.5 9.5 15.1642 9.5 14.75C9.5 14.3358 9.83579 14 10.25 14C10.6642 14 11 14.3358 11 14.75ZM12.5 14.75C12.5 15.1642 12.1642 15.5 11.75 15.5C11.3358 15.5 11 15.1642 11 14.75C11 14.3358 11.3358 14 11.75 14C12.1642 14 12.5 14.3358 12.5 14.75ZM12.5 14.75C12.5 14.3358 12.8358 14 13.25 14C13.6642 14 14 14.3358 14 14.75C14 15.1642 13.6642 15.5 13.25 15.5C12.8358 15.5 12.5 15.1642 12.5 14.75ZM2.75 14C3.16421 14 3.5 14.3358 3.5 14.75C3.5 15.1642 3.16421 15.5 2.75 15.5C2.33579 15.5 2 15.1642 2 14.75C2 14.3358 2.33579 14 2.75 14ZM0.5 13.25C0.5 12.8358 0.83579 12.5 1.25 12.5C1.66421 12.5 2 12.8358 2 13.25C2 13.6642 1.66421 14 1.25 14C0.83579 14 0.5 13.6642 0.5 13.25ZM1.25 11C1.66421 11 2 11.3358 2 11.75C2 12.1642 1.66421 12.5 1.25 12.5C0.83579 12.5 0.5 12.1642 0.5 11.75C0.5 11.3358 0.83579 11 1.25 11ZM1.25 9.5C1.66421 9.5 2 9.83579 2 10.25C2 10.6642 1.66421 11 1.25 11C0.83579 11 0.5 10.6642 0.5 10.25C0.5 9.83579 0.83579 9.5 1.25 9.5ZM1.25 8C1.66421 8 2 8.33579 2 8.75C2 9.16421 1.66421 9.5 1.25 9.5C0.83579 9.5 0.5 9.16421 0.5 8.75C0.5 8.33579 0.83579 8 1.25 8ZM1.25 6.5C1.66421 6.5 2 6.83579 2 7.25C2 7.66421 1.66421 8 1.25 8C0.83579 8 0.5 7.66421 0.5 7.25C0.5 6.83579 0.83579 6.5 1.25 6.5ZM1.25 5C1.66421 5 2 5.33579 2 5.75C2 6.16421 1.66421 6.5 1.25 6.5C0.83579 6.5 0.5 6.16421 0.5 5.75C0.5 5.33579 0.83579 5 1.25 5ZM1.25 3.5C1.66421 3.5 2 3.83579 2 4.25C2 4.66421 1.66421 5 1.25 5C0.83579 5 0.5 4.66421 0.5 4.25C0.5 3.83579 0.83579 3.5 1.25 3.5ZM1.25 3.5C1.66421 3.5 2 3.16421 2 2.75C2 2.33579 1.66421 2 1.25 2C0.83579 2 0.5 2.33579 0.5 2.75C0.5 3.16421 0.83579 3.5 1.25 3.5ZM14.75 12.5C14.3358 12.5 14 12.8358 14 13.25C14 13.6642 14.3358 14 14.75 14C15.1642 14 15.5 13.6642 15.5 13.25C15.5 12.8358 15.1642 12.5 14.75 12.5ZM14.75 11C14.3358 11 14 10.6642 14 10.25C14 9.83579 14.3358 9.5 14.75 9.5C15.1642 9.5 15.5 9.83579 15.5 10.25C15.5 10.6642 15.1642 11 14.75 11ZM14.75 8C14.3358 8 14 7.66421 14 7.25C14 6.83579 14.3358 6.5 14.75 6.5C15.1642 6.5 15.5 6.83579 15.5 7.25C15.5 7.66421 15.1642 8 14.75 8ZM14.75 5C14.3358 5 14 4.66421 14 4.25C14 3.83579 14.3358 3.5 14.75 3.5C15.1642 3.5 15.5 3.83579 15.5 4.25C15.5 4.66421 15.1642 5 14.75 5ZM14.75 5C14.3358 5 14 5.33579 14 5.75C14 6.16421 14.3358 6.5 14.75 6.5C15.1642 6.5 15.5 6.16421 15.5 5.75C15.5 5.33579 15.1642 5 14.75 5ZM14.75 8C14.3358 8 14 8.33579 14 8.75C14 9.16421 14.3358 9.5 14.75 9.5C15.1642 9.5 15.5 9.16421 15.5 8.75C15.5 8.33579 15.1642 8 14.75 8ZM14.75 11C14.3358 11 14 11.3358 14 11.75C14 12.1642 14.3358 12.5 14.75 12.5C15.1642 12.5 15.5 12.1642 15.5 11.75C15.5 11.3358 15.1642 11 14.75 11ZM14.75 3.5C15.1642 3.5 15.5 3.16421 15.5 2.75C15.5 2.33579 15.1642 2 14.75 2C14.3358 2 14 2.33579 14 2.75C14 3.16421 14.3358 3.5 14.75 3.5ZM5 5.75C5 5.33579 5.33579 5 5.75 5C6.16421 5 6.5 5.33579 6.5 5.75C6.5 6.16421 6.16421 6.5 5.75 6.5C5.33579 6.5 5 6.16421 5 5.75ZM10.25 5C9.83579 5 9.5 5.33579 9.5 5.75C9.5 6.16421 9.83579 6.5 10.25 6.5C10.6642 6.5 11 6.16421 11 5.75C11 5.33579 10.6642 5 10.25 5ZM6.5 11.75C6.5 11.3358 6.83579 11 7.25 11C7.66421 11 8 11.3358 8 11.75C8 12.1642 7.66421 12.5 7.25 12.5C6.83579 12.5 6.5 12.1642 6.5 11.75ZM6.5 11.75C6.5 12.1642 6.16421 12.5 5.75 12.5C5.33579 12.5 5 12.1642 5 11.75C5 11.3358 5.33579 11 5.75 11C6.16421 11 6.5 11.3358 6.5 11.75ZM9.5 11.75C9.5 12.1642 9.16421 12.5 8.75 12.5C8.33579 12.5 8 12.1642 8 11.75C8 11.3358 8.33579 11 8.75 11C9.16421 11 9.5 11.3358 9.5 11.75ZM9.5 11.75C9.5 11.3358 9.83579 11 10.25 11C10.6642 11 11 11.3358 11 11.75C11 12.1642 10.6642 12.5 10.25 12.5C9.83579 12.5 9.5 12.1642 9.5 11.75ZM11.75 9.5C11.3358 9.5 11 9.83579 11 10.25C11 10.6642 11.3358 11 11.75 11C12.1642 11 12.5 10.6642 12.5 10.25C12.5 9.83579 12.1642 9.5 11.75 9.5ZM4.25 9.5C3.83579 9.5 3.5 9.83579 3.5 10.25C3.5 10.6642 3.83579 11 4.25 11C4.66421 11 5 10.6642 5 10.25C5 9.83579 4.66421 9.5 4.25 9.5Z\" fill=\"#0C100A\"></path>\n</svg>",
  "sun": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.25 0.5C0.83579 0.5 0.5 0.83579 0.5 1.25C0.5 1.66421 0.83579 2 1.25 2C1.66421 2 2 1.66421 2 1.25C2 0.83579 1.66421 0.5 1.25 0.5ZM14 1.25C14 0.83579 14.3358 0.5 14.75 0.5C15.1642 0.5 15.5 0.83579 15.5 1.25C15.5 1.66421 15.1642 2 14.75 2C14.3358 2 14 1.66421 14 1.25ZM2.75 2C2.33579 2 2 2.33579 2 2.75C2 3.16421 2.33579 3.5 2.75 3.5C3.16421 3.5 3.5 3.16421 3.5 2.75C3.5 2.33579 3.16421 2 2.75 2ZM12.5 2.75C12.5 2.33579 12.8358 2 13.25 2C13.6642 2 14 2.33579 14 2.75C14 3.16421 13.6642 3.5 13.25 3.5C12.8358 3.5 12.5 3.16421 12.5 2.75ZM5 4.25C5 3.83579 5.33579 3.5 5.75 3.5C6.16421 3.5 6.5 3.83579 6.5 4.25C6.5 4.66421 6.16421 5 5.75 5C5.33579 5 5 4.66421 5 4.25ZM8 4.25C8 4.66421 7.66421 5 7.25 5C6.83579 5 6.5 4.66421 6.5 4.25C6.5 3.83579 6.83579 3.5 7.25 3.5C7.66421 3.5 8 3.83579 8 4.25ZM9.5 4.25C9.5 4.66421 9.16421 5 8.75 5C8.33579 5 8 4.66421 8 4.25C8 3.83579 8.33579 3.5 8.75 3.5C9.16421 3.5 9.5 3.83579 9.5 4.25ZM9.5 4.25C9.5 3.83579 9.83579 3.5 10.25 3.5C10.6642 3.5 11 3.83579 11 4.25C11 4.66421 10.6642 5 10.25 5C9.83579 5 9.5 4.66421 9.5 4.25ZM3.5 5.75C3.5 5.33579 3.83579 5 4.25 5C4.66421 5 5 5.33579 5 5.75C5 6.16421 4.66421 6.5 4.25 6.5C3.83579 6.5 3.5 6.16421 3.5 5.75ZM4.25 8C3.83579 8 3.5 7.66421 3.5 7.25C3.5 6.83579 3.83579 6.5 4.25 6.5C4.66421 6.5 5 6.83579 5 7.25C5 7.66421 4.66421 8 4.25 8ZM4.25 9.5C3.83579 9.5 3.5 9.16421 3.5 8.75C3.5 8.33579 3.83579 8 4.25 8C4.66421 8 5 8.33579 5 8.75C5 9.16421 4.66421 9.5 4.25 9.5ZM4.25 9.5C4.66421 9.5 5 9.83579 5 10.25C5 10.6642 4.66421 11 4.25 11C3.83579 11 3.5 10.6642 3.5 10.25C3.5 9.83579 3.83579 9.5 4.25 9.5ZM5 11.75C5 11.3358 5.33579 11 5.75 11C6.16421 11 6.5 11.3358 6.5 11.75C6.5 12.1642 6.16421 12.5 5.75 12.5C5.33579 12.5 5 12.1642 5 11.75ZM8 11.75C8 12.1642 7.66421 12.5 7.25 12.5C6.83579 12.5 6.5 12.1642 6.5 11.75C6.5 11.3358 6.83579 11 7.25 11C7.66421 11 8 11.3358 8 11.75ZM9.5 11.75C9.5 12.1642 9.16421 12.5 8.75 12.5C8.33579 12.5 8 12.1642 8 11.75C8 11.3358 8.33579 11 8.75 11C9.16421 11 9.5 11.3358 9.5 11.75ZM9.5 11.75C9.5 11.3358 9.83579 11 10.25 11C10.6642 11 11 11.3358 11 11.75C11 12.1642 10.6642 12.5 10.25 12.5C9.83579 12.5 9.5 12.1642 9.5 11.75ZM11.75 9.5C11.3358 9.5 11 9.83579 11 10.25C11 10.6642 11.3358 11 11.75 11C12.1642 11 12.5 10.6642 12.5 10.25C12.5 9.83579 12.1642 9.5 11.75 9.5ZM11.75 8C11.3358 8 11 7.66421 11 7.25C11 6.83579 11.3358 6.5 11.75 6.5C12.1642 6.5 12.5 6.83579 12.5 7.25C12.5 7.66421 12.1642 8 11.75 8ZM11.75 8C11.3358 8 11 8.33579 11 8.75C11 9.16421 11.3358 9.5 11.75 9.5C12.1642 9.5 12.5 9.16421 12.5 8.75C12.5 8.33579 12.1642 8 11.75 8ZM11.75 6.5C12.1642 6.5 12.5 6.16421 12.5 5.75C12.5 5.33579 12.1642 5 11.75 5C11.3358 5 11 5.33579 11 5.75C11 6.16421 11.3358 6.5 11.75 6.5ZM2 13.25C2 12.8358 2.33579 12.5 2.75 12.5C3.16421 12.5 3.5 12.8358 3.5 13.25C3.5 13.6642 3.16421 14 2.75 14C2.33579 14 2 13.6642 2 13.25ZM13.25 12.5C12.8358 12.5 12.5 12.8358 12.5 13.25C12.5 13.6642 12.8358 14 13.25 14C13.6642 14 14 13.6642 14 13.25C14 12.8358 13.6642 12.5 13.25 12.5ZM0.5 14.75C0.5 14.3358 0.83579 14 1.25 14C1.66421 14 2 14.3358 2 14.75C2 15.1642 1.66421 15.5 1.25 15.5C0.83579 15.5 0.5 15.1642 0.5 14.75ZM14.75 14C14.3358 14 14 14.3358 14 14.75C14 15.1642 14.3358 15.5 14.75 15.5C15.1642 15.5 15.5 15.1642 15.5 14.75C15.5 14.3358 15.1642 14 14.75 14ZM8 1.25C8 0.83579 8.33579 0.5 8.75 0.5C9.16421 0.5 9.5 0.83579 9.5 1.25C9.5 1.66421 9.16421 2 8.75 2C8.33579 2 8 1.66421 8 1.25ZM7.25 0.5C7.66421 0.5 8 0.83579 8 1.25C8 1.66421 7.66421 2 7.25 2C6.83579 2 6.5 1.66421 6.5 1.25C6.5 0.83579 6.83579 0.5 7.25 0.5ZM6.5 14.75C6.5 14.3358 6.83579 14 7.25 14C7.66421 14 8 14.3358 8 14.75C8 15.1642 7.66421 15.5 7.25 15.5C6.83579 15.5 6.5 15.1642 6.5 14.75ZM8 14.75C8 14.3358 8.33579 14 8.75 14C9.16421 14 9.5 14.3358 9.5 14.75C9.5 15.1642 9.16421 15.5 8.75 15.5C8.33579 15.5 8 15.1642 8 14.75ZM14 7.25C14 6.83579 14.3358 6.5 14.75 6.5C15.1642 6.5 15.5 6.83579 15.5 7.25C15.5 7.66421 15.1642 8 14.75 8C14.3358 8 14 7.66421 14 7.25ZM14 8.75C14 8.33579 14.3358 8 14.75 8C15.1642 8 15.5 8.33579 15.5 8.75C15.5 9.16421 15.1642 9.5 14.75 9.5C14.3358 9.5 14 9.16421 14 8.75ZM1.25 6.5C0.83579 6.5 0.5 6.83579 0.5 7.25C0.5 7.66421 0.83579 8 1.25 8C0.83579 8 0.5 8.33579 0.5 8.75C0.5 9.16421 0.83579 9.5 1.25 9.5C1.66421 9.5 2 9.16421 2 8.75C2 8.33579 1.66421 8 1.25 8C1.66421 8 2 7.66421 2 7.25C2 6.83579 1.66421 6.5 1.25 6.5Z\" fill=\"#0C100A\"></path>\n</svg>",
  "anchor": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"512\" height=\"512\" viewBox=\"0 0 512 512\" version=\"1.1\"><path d=\"M 238 110.507 C 214.196 116.309, 195.683 135.713, 190.953 159.816 C 190.193 163.688, 189.934 169.684, 190.282 175.316 C 191.702 198.261, 204.598 217.461, 225.217 227.328 L 233.934 231.500 233.967 300.378 L 234 369.256 230.159 368.641 C 222.164 367.363, 208.173 362.784, 199.500 358.608 C 174.634 346.633, 162.727 330.134, 160.397 304.423 L 159.724 297 140.711 297 L 121.699 297 122.302 307.250 C 124.856 350.648, 153.324 384.737, 200.030 400.328 C 234.956 411.986, 270.059 412.010, 305 400.397 C 352.597 384.579, 380.481 351.257, 383.632 306.433 L 384.295 297 365.264 297 C 343.761 297, 345.063 296.454, 344.999 305.500 C 344.925 315.884, 339.251 330.602, 331.887 339.514 C 320.743 353, 297.938 364.869, 276.250 368.470 L 272 369.176 272 300.224 L 272 231.272 276.434 229.578 C 282.941 227.093, 292.558 220.587, 298.033 214.966 C 311.047 201.605, 317.845 180.901, 315.077 163.060 C 311.038 137.028, 293.422 117.374, 268.391 110.972 C 259.414 108.676, 246.333 108.476, 238 110.507 M 245.882 148.324 C 236.515 151.818, 230.943 157.832, 228.987 166.558 C 225.806 180.754, 237.320 195.181, 252 195.390 C 262.325 195.537, 271.790 189.533, 275.597 180.422 C 277.388 176.136, 277.402 166.899, 275.625 162.645 C 273.684 158, 268.350 152.219, 263.919 149.959 C 258.861 147.378, 250.459 146.617, 245.882 148.324\" stroke=\"none\" fill=\"#fbfbfb\" fill-rule=\"evenodd\"></path><path d=\"M 223.564 1.571 C 188.852 6.187, 151.782 19.277, 122 37.434 C 88.610 57.791, 55.807 90.886, 35.976 124.223 C 19.401 152.086, 7.658 184.601, 2.469 217 C -0.094 233.004, -0.642 269.061, 1.419 286 C 4.800 313.776, 13.005 341.957, 24.834 366.420 C 38.526 394.736, 52.922 415.028, 74.947 437.053 C 108.487 470.593, 146.762 492.583, 191.500 504.016 C 213.899 509.740, 224.583 511.147, 250 511.718 C 283.979 512.482, 306.389 509.201, 337.420 498.918 C 375.107 486.430, 408.263 465.842, 437.053 437.053 C 470.592 403.514, 492.580 365.244, 504.017 320.500 C 507.714 306.034, 511 287.534, 511 281.181 C 511 279.496, 511.450 277.840, 512 277.500 C 512.618 277.118, 513 268.470, 513 254.882 C 513 242.782, 512.638 233.106, 512.196 233.379 C 511.753 233.653, 510.866 229.179, 510.225 223.439 C 506.621 191.190, 492.829 151.955, 474.566 122 C 454.209 88.610, 421.114 55.807, 387.777 35.976 C 359.929 19.410, 327.515 7.699, 295 2.458 C 280.359 0.098, 238.543 -0.421, 223.564 1.571 M 238 110.507 C 214.196 116.309, 195.683 135.713, 190.953 159.816 C 190.193 163.688, 189.934 169.684, 190.282 175.316 C 191.702 198.261, 204.598 217.461, 225.217 227.328 L 233.934 231.500 233.967 300.378 L 234 369.256 230.159 368.641 C 222.164 367.363, 208.173 362.784, 199.500 358.608 C 174.634 346.633, 162.727 330.134, 160.397 304.423 L 159.724 297 140.711 297 L 121.699 297 122.302 307.250 C 124.856 350.648, 153.324 384.737, 200.030 400.328 C 234.956 411.986, 270.059 412.010, 305 400.397 C 352.597 384.579, 380.481 351.257, 383.632 306.433 L 384.295 297 365.264 297 C 343.761 297, 345.063 296.454, 344.999 305.500 C 344.925 315.884, 339.251 330.602, 331.887 339.514 C 320.743 353, 297.938 364.869, 276.250 368.470 L 272 369.176 272 300.224 L 272 231.272 276.434 229.578 C 282.941 227.093, 292.558 220.587, 298.033 214.966 C 311.047 201.605, 317.845 180.901, 315.077 163.060 C 311.038 137.028, 293.422 117.374, 268.391 110.972 C 259.414 108.676, 246.333 108.476, 238 110.507 M 245.882 148.324 C 236.515 151.818, 230.943 157.832, 228.987 166.558 C 225.806 180.754, 237.320 195.181, 252 195.390 C 262.325 195.537, 271.790 189.533, 275.597 180.422 C 277.388 176.136, 277.402 166.899, 275.625 162.645 C 273.684 158, 268.350 152.219, 263.919 149.959 C 258.861 147.378, 250.459 146.617, 245.882 148.324 M 0.428 256 C 0.428 268.375, 0.571 273.438, 0.747 267.250 C 0.922 261.063, 0.922 250.938, 0.747 244.750 C 0.571 238.563, 0.428 243.625, 0.428 256\" stroke=\"none\" fill=\"#1071dd\" fill-rule=\"evenodd\"></path></svg>",
  "iroh": "<svg id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 93.26 32\"><defs></defs><path class=\"cls-1\" d=\"m61.21,9.93h-7.74c-3.25,0-5.89,2.64-5.89,5.89v8.27c0,3.25,2.64,5.89,5.89,5.89h7.74c3.25,0,5.89-2.64,5.89-5.89v-8.27c0-3.25-2.64-5.89-5.89-5.89Zm2.93,14.79c0,.29-.11.57-.32.77l-1.21,1.21c-.2.2-.49.32-.77.32h-8.99c-.29,0-.57-.11-.77-.32l-1.21-1.21c-.21-.21-.32-.48-.32-.77v-9.53c0-.29.11-.57.32-.77l1.21-1.21c.21-.21.48-.32.77-.32h8.99c.29,0,.57.12.77.32l1.21,1.21c.21.21.32.48.32.77v9.53Z\"></path><path class=\"cls-1\" d=\"m90.26,14.29c-.29-1.14-.73-2.04-1.32-2.69-.59-.66-1.35-1.11-2.28-1.38-.93-.26-2.03-.39-3.28-.39-1.6,0-2.94.26-4.01.77-1.08.51-1.94,1.33-2.83,2.14h-.2V3.03c0-.33-.27-.6-.6-.6h-4.46v2.64h2.03v24.9h3.03v-13.25h0v-.18c0-.29.11-.57.32-.77,0,0,2.49-2.45,3.83-2.93.68-.24,1.37-.37,2.08-.37,1.02,0,1.86.14,2.51.43.65.29,1.17.71,1.55,1.28.38.56.63,1.27.76,2.1.13.84.2,1.82.2,2.95v10.74h3.11v-11.33c0-1.76-.14-3.21-.43-4.35Z\"></path><path class=\"cls-1\" d=\"m1.71,29.97v-2.64h8.16v-14.4H1.71v-2.64h11.27v17.03h8.21v2.64H1.71Z\"></path><circle class=\"cls-1\" cx=\"11.41\" cy=\"4.65\" r=\"2.44\"></circle><path class=\"cls-1\" d=\"m42.74,14.29c-.11-.93-.31-1.72-.61-2.38-.3-.66-.72-1.15-1.26-1.49-.54-.34-1.25-.51-2.14-.51-1.52,0-2.83.29-3.93.87-1.1.58-2.1,1.27-2.99,2.08h-.2l-.55-2.22c-.05-.2-.23-.34-.43-.34h-7.01v2.64h5.31v14.4h-5.31v2.64h15.89v-2.64h-7.55v-10.63s0-.02,0-.03v-.45c0-.29.11-.57.32-.77,0,0,1.87-1.96,3.38-2.47.66-.22,1.39-.3,2.2-.3.87,0,1.46.39,1.79,1.17.33.78.49,2,.49,3.67l2.75-.04c0-1.18-.05-2.24-.16-3.17Z\"></path></svg>",
  "pytorch": "<svg width=\"488px\" height=\"121px\" viewBox=\"0 0 488 121\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\">\n <g>\n  <path d=\"M63.1 28.3 L56.5 34.9 C67.3 45.7 67.3 63.1 56.5 73.7 45.7 84.5 28.3 84.5 17.7 73.7 6.9 62.9 6.9 45.5 17.7 34.9 L34.8 17.8 37.2 15.4 37.2 2.5 11.4 28.3 C-3 42.7 -3 65.9 11.4 80.3 25.8 94.7 49 94.7 63.1 80.3 77.5 65.8 77.5 42.7 63.1 28.3 Z\" fill=\"#ee4c2c\"></path>\n  <path d=\"M55 21.9 C55 24.551 52.851 26.7 50.2 26.7 47.549 26.7 45.4 24.551 45.4 21.9 45.4 19.249 47.549 17.1 50.2 17.1 52.851 17.1 55 19.249 55 21.9 Z\" fill=\"#ee4c2c\"></path>\n </g>\n  <g>\n   <path d=\"M129.8 61.3 L118.7 61.3 118.7 89.8 110.3 89.8 110.3 8.7 130.7 8.7 C152 8.7 162.2 19.2 162.2 33.9 162.5 52 149.9 61.3 129.8 61.3 Z M130.7 16.8 C129.8 16.8 119 16.8 119 16.8 L119 54.1 130.4 53.8 C145.7 53.5 154.1 47.5 154.1 34.9 154.1 23.1 145.7 16.8 130.7 16.8 Z\" fill=\"var(--color-fg)\"></path>\n   <path d=\"M199.8 89.5 L195 102.4 C189.6 116.8 183.9 121 175.8 121 171.3 121 168 119.8 164.4 118.3 L166.8 110.8 C169.5 112.3 172.5 113.5 175.8 113.5 180.3 113.5 183.6 111.1 188.1 99.7 L192 89.2 168.9 30.6 177.6 30.6 196.2 79.6 214.5 30.6 222.9 30.6 Z\" fill=\"var(--color-fg)\"></path>\n   <path d=\"M250.3 16.8 L250.3 90.1 241.9 90.1 241.9 16.8 213.4 16.8 213.4 9 278.6 9 278.6 16.8 C278.5 16.8 250.3 16.8 250.3 16.8 Z\" fill=\"var(--color-fg)\"></path>\n   <path d=\"M302.3 91.6 C285.8 91.6 273.8 79.3 273.8 60.4 273.8 41.5 286.4 28.9 303.2 28.9 320 28.9 331.7 41.2 331.7 60.1 331.4 79 318.8 91.6 302.3 91.6 Z M302.6 36.4 C290 36.4 281.9 46.3 281.9 60.4 281.9 74.8 290.3 84.7 302.9 84.7 315.5 84.7 323.6 74.8 323.6 60.7 323.6 46 315.2 36.4 302.6 36.4 Z\" fill=\"var(--color-fg)\"></path>\n   <path d=\"M351.8 90.1 L343.7 90.1 343.7 30.6 351.8 28.8 351.8 41.4 C355.7 33.9 361.4 28.8 369.2 28.8 373.1 28.8 376.7 30 379.7 31.5 L377.6 39 C374.9 37.5 371.9 36.3 368.6 36.3 362.3 36.3 356.6 41.1 351.8 51.6 Z\" fill=\"var(--color-fg)\"></path>\n   <path d=\"M411.3 91.6 C393.3 91.6 382.2 78.7 382.2 60.4 382.2 41.8 394.5 28.9 411.3 28.9 418.5 28.9 424.8 30.7 429.9 34 L427.8 41.2 C423.3 38.2 417.6 36.4 411.3 36.4 398.4 36.4 390.6 46 390.6 60.1 390.6 74.5 399 84.1 411.6 84.1 417.6 84.1 423.6 82.3 428.1 79.3 L429.9 86.8 C424.5 89.8 418.2 91.6 411.3 91.6 Z\" fill=\"var(--color-fg)\"></path>\n   <path d=\"M479.5 90.1 L479.5 51.6 C479.5 41.1 475.3 36.6 466.9 36.6 460 36.6 453.4 40.2 448.6 45 L448.6 90.1 440.5 90.1 440.5 2.7 448.6 0.9 448.6 38.5 C454.9 32.2 462.7 29.2 469.3 29.2 480.7 29.2 487.9 36.7 487.9 49.6 L487.9 90.2 479.5 90.2 Z\" fill=\"var(--color-fg)\"></path>\n  </g>\n</svg>"
};
Object.assign(__ds_scope, { PSYCHE_ICONS });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/iconData.js", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const CSS_ID = 'psy-icon-css';
const css = `
.psy-icon{display:inline-block;flex-shrink:0;line-height:0}
.psy-icon svg{width:100%;height:100%;display:block}
.psy-icon.mono svg :is(path,circle,rect,polygon,ellipse,line,polyline):not([fill='none']){fill:currentColor}
`;
function ensureCss() {
  if (typeof document !== 'undefined' && !document.getElementById(CSS_ID)) {
    const s = document.createElement('style');
    s.id = CSS_ID;
    s.textContent = css;
    document.head.appendChild(s);
  }
}
const fetchCache = {};

// Renders a Psyche SVG glyph inline, in currentColor (the site's
// fill:currentColor `iconClass` pattern). Small glyphs ship inline via
// iconData.js; large ones (corner-fleur, medusa-head, symbol-02, symbol-06,
// fullscreen, hf) are fetched from the asset folder at runtime — set
// window.PSYCHE_ASSET_BASE (e.g. '_ds/psyche/assets') when assets aren't at "assets".
function Icon({
  name,
  src,
  size = '1em',
  mono = true,
  style,
  className
}) {
  ensureCss();
  const key = src || name;
  const [svg, setSvg] = React.useState(() => name && __ds_scope.PSYCHE_ICONS[name] || fetchCache[key] || null);
  React.useEffect(() => {
    const inline = name && __ds_scope.PSYCHE_ICONS[name] || fetchCache[key] || null;
    if (inline) {
      setSvg(inline);
      return;
    }
    const base = typeof window !== 'undefined' && window.PSYCHE_ASSET_BASE || 'assets';
    const url = src || `${base}/icons/${name}.svg`;
    let live = true;
    fetch(url).then(r => r.ok ? r.text() : '').then(t => {
      if (t) {
        fetchCache[key] = t;
        if (live) setSvg(t);
      }
    }).catch(() => {});
    return () => {
      live = false;
    };
  }, [key]);
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: `psy-icon${mono ? ' mono' : ''}${className ? ' ' + className : ''}`,
    style: {
      width: size,
      height: size,
      ...style
    },
    dangerouslySetInnerHTML: svg ? {
      __html: svg
    } : undefined
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Sort.jsx
try { (() => {
const CSS_ID = 'psy-sort-css';
const css = `
.psy-sort{position:relative;display:inline-flex;align-items:stretch;border:2px solid var(--color-border-strong);text-transform:uppercase;font-family:var(--font-button);letter-spacing:.5px;font-size:.875rem;line-height:1.25rem;cursor:pointer;background:transparent;color:var(--color-fg)}
.theme-dark .psy-sort{border-color:var(--forest-300);color:var(--forest-300)}
.psy-sort .chev{display:flex;align-items:center;justify-content:center;padding:0 6px 0 4px;background:var(--color-border-strong);color:var(--color-bg)}
.theme-dark .psy-sort .chev{background:var(--forest-300);color:var(--forest-700)}
.psy-sort .val{padding:0 8px 0 4px;display:flex;align-items:center}
.psy-sort select{position:absolute;inset:0;opacity:0;cursor:pointer;text-transform:uppercase}
`;
function ensureCss() {
  if (typeof document !== 'undefined' && !document.getElementById(CSS_ID)) {
    const s = document.createElement('style');
    s.id = CSS_ID;
    s.textContent = css;
    document.head.appendChild(s);
  }
}

// Sort dropdown — outlined select with a filled chevron well on the left.
// Simplified from the site's react-select build; identical resting look.
function Sort({
  options = [],
  selected,
  onChange
}) {
  ensureCss();
  const sel = options.find(o => o.value === (selected && selected.value ? selected.value : selected));
  const longest = Math.max(...options.map(o => o.label.length), 0);
  return /*#__PURE__*/React.createElement("span", {
    className: "psy-sort",
    style: {
      minWidth: `calc(${longest}ch + 7ch)`
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "chev"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: "1em"
  })), /*#__PURE__*/React.createElement("span", {
    className: "val"
  }, sel ? sel.label : 'sort by...'), /*#__PURE__*/React.createElement("select", {
    value: sel ? sel.value : '',
    onChange: e => {
      const o = options.find(x => x.value === e.target.value);
      if (o && onChange) onChange(o);
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))));
}
Object.assign(__ds_scope, { Sort });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Sort.jsx", error: String((e && e.message) || e) }); }

// components/core/SymbolSeparatedItems.jsx
try { (() => {
// Row of items separated by the symbol-06 glyph (footer/header link rows).
function SymbolSeparatedItems({
  children,
  style
}) {
  const items = React.Children.toArray(children);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 2,
      ...style
    }
  }, items.map((item, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i !== 0 && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "symbol-06",
    size: "1em"
  }), item)));
}
Object.assign(__ds_scope, { SymbolSeparatedItems });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SymbolSeparatedItems.jsx", error: String((e && e.message) || e) }); }

// components/site/Footer.jsx
try { (() => {
// Site footer: copyright, powered-by logos, link row. Muted slate-500.
function Footer() {
  const linkStyle = {
    color: 'var(--slate-500)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-bg)',
      color: 'var(--slate-500)',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      padding: '2px 16px',
      gap: 12,
      fontFamily: 'var(--font-aux)',
      fontSize: '0.875rem',
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("div", null, "\xA9", new Date().getFullYear(), " psyche foundation"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", null, "built using libraries by"), /*#__PURE__*/React.createElement("a", {
    href: "https://www.iroh.computer/",
    style: linkStyle
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "iroh",
    size: "1em",
    style: {
      width: '2.5em'
    }
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://pytorch.org/",
    style: linkStyle
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "pytorch",
    size: "1em",
    style: {
      width: '5em'
    }
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://huggingface.co/",
    style: linkStyle
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "hf",
    src: `${typeof window !== 'undefined' && window.PSYCHE_ASSET_BASE || 'assets'}/logos/hf.svg`,
    size: "1em",
    style: {
      width: '2em'
    }
  }))), /*#__PURE__*/React.createElement(__ds_scope.SymbolSeparatedItems, null, /*#__PURE__*/React.createElement("a", {
    href: "https://twitter.com/psycheoperation",
    style: linkStyle
  }, "twitter"), /*#__PURE__*/React.createElement("a", {
    href: "https://discord.gg/jqVphNsB4H",
    style: linkStyle
  }, "discord"), /*#__PURE__*/React.createElement("a", {
    href: "#legal",
    style: linkStyle
  }, "legal"), /*#__PURE__*/React.createElement("a", {
    href: "https://nousresearch.com",
    style: linkStyle
  }, "nous research")));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/Footer.jsx", error: String((e && e.message) || e) }); }

// components/site/Header.jsx
try { (() => {
// Site header: logo lockup + blurb + theme toggle + corner fleur ornament.
function Header({
  isDark,
  onTheme
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      padding: 8,
      background: 'var(--color-bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(256px,1fr) minmax(312px,1fr) minmax(64px,1fr)',
      gap: 24,
      width: '100%',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      width: 'fit-content'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      textDecoration: 'none',
      color: 'var(--color-fg)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-display)',
      textTransform: 'lowercase',
      fontSize: '3rem',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "psyche-box",
    style: {
      marginRight: 12
    }
  }), /*#__PURE__*/React.createElement("span", null, "nous psyche"))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-body)',
      letterSpacing: '-0.25px',
      fontSize: '0.875rem',
      fontWeight: 500
    }
  }, "DISTRIBUTED INTELLIGENCE NETWORK", /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "symbol-02",
    size: "1.5em",
    style: {
      marginLeft: 8,
      width: '2em'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-fg)',
      color: 'var(--color-bg)',
      width: 'fit-content',
      padding: '0 4px',
      fontFamily: 'var(--font-aux)',
      fontSize: '0.75rem',
      fontWeight: 600
    }
  }, "TESTNET")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      justifySelf: 'center',
      textTransform: 'uppercase',
      fontFamily: 'var(--font-body)',
      letterSpacing: '-0.25px',
      fontSize: '0.875rem',
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("div", null, "Cooperative training over\u2011the\u2011internet"), /*#__PURE__*/React.createElement(__ds_scope.SymbolSeparatedItems, null, /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/PsycheFoundation/psyche"
  }, "github"), /*#__PURE__*/React.createElement("a", {
    href: "https://forum.nousresearch.com/"
  }, "forum"), /*#__PURE__*/React.createElement("a", {
    href: "https://nousresearch.com/nous-psyche/"
  }, "about psyche"), /*#__PURE__*/React.createElement("a", {
    href: "https://docs.psyche.network/"
  }, "docs"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      justifySelf: 'end'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "theme",
    icon: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "sun"
    }),
    pressed: !isDark,
    onClick: () => onTheme && onTheme(false)
  }, "Light"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "theme",
    icon: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "moon"
    }),
    pressed: !!isDark,
    onClick: () => onTheme && onTheme(true)
  }, "Dark"))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "corner-fleur",
    size: "128px",
    style: {
      minWidth: 128
    }
  }));
}
Object.assign(__ds_scope, { Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContributePanel.jsx
try { (() => {
// Contribute Compute panel — left OutlineBox column
const {
  Button,
  Icon
} = window.PsycheDesignSystem_d0a47d;
function CapacityBar({
  ratio,
  widthCh
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "t-aux t-sm cap-bar",
    style: {
      width: `${widthCh}ch`,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      width: `${ratio * widthCh}ch`,
      height: '100%',
      backgroundImage: 'radial-gradient(currentColor 0.6px, transparent 0), radial-gradient(currentColor 0.6px, transparent 0)',
      backgroundSize: '2.5px 2.5px, 2.5px 2.5px',
      backgroundPosition: '2px 2px, 3.25px 3.25px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cap-label",
    style: {
      padding: '0 2px'
    }
  }, (ratio * 100).toFixed(4), "%")));
}

// static dot-matrix stand-in for the WebGL dither orb
function Orb() {
  return /*#__PURE__*/React.createElement("div", {
    className: "orb",
    style: {
      width: 256,
      height: 256,
      margin: '0 auto',
      borderRadius: '100%',
      backgroundImage: 'radial-gradient(circle at 35% 30%, transparent 0%, currentColor 130%), radial-gradient(currentColor 1px, transparent 0)',
      backgroundSize: '100% 100%, 4px 4px',
      WebkitMaskImage: 'radial-gradient(circle, #000 62%, transparent 63%)',
      maskImage: 'radial-gradient(circle, #000 62%, transparent 63%)',
      imageRendering: 'pixelated',
      opacity: 0.85
    }
  });
}
function shortAddr(a) {
  return a.length > 20 ? `${a.slice(0, 8)}...${a.slice(-8)}` : a;
}
function ContributePanel({
  data
}) {
  const {
    totalDeposited,
    maxDeposit,
    users
  } = data;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-body t-base pool-label",
    style: {
      fontWeight: 500
    }
  }, "POOL CAPACITY"), /*#__PURE__*/React.createElement(CapacityBar, {
    ratio: totalDeposited / maxDeposit,
    widthCh: 18
  })), /*#__PURE__*/React.createElement(Orb, null), /*#__PURE__*/React.createElement("div", {
    className: "pool-line",
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-body t-base",
    style: {
      fontWeight: 500
    }
  }, "MINING POOL: ", totalDeposited.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "smiley"
    })
  }, "connect wallet"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%',
      overflowY: 'auto',
      minHeight: 256,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("table", {
    className: "rank-table t-body t-sm",
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Rank"), /*#__PURE__*/React.createElement("th", null, "Address"), /*#__PURE__*/React.createElement("th", null, "Contribution"))), /*#__PURE__*/React.createElement("tbody", {
    className: "t-button t-sm"
  }, users.map((u, i) => {
    const featured = i < 3;
    return /*#__PURE__*/React.createElement("tr", {
      key: u.address,
      className: featured ? 'featured' : ''
    }, /*#__PURE__*/React.createElement("td", {
      style: featured ? {
        textAlign: 'center'
      } : {}
    }, featured ? /*#__PURE__*/React.createElement(Icon, {
      name: "medusa-head",
      size: "1.2em"
    }) : String(u.rank).padStart(2, '0')), /*#__PURE__*/React.createElement("td", {
      className: featured ? 't-display t-2xl' : '',
      style: {
        width: '100%',
        maxWidth: 0,
        overflow: 'hidden',
        whiteSpace: 'nowrap'
      }
    }, shortAddr(u.address)), /*#__PURE__*/React.createElement("td", {
      className: featured ? 't-body t-xl' : '',
      style: featured ? {
        fontWeight: 500
      } : {}
    }, u.funding, "%"));
  })))));
}
Object.assign(window, {
  ContributePanel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContributePanel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/TrainingPanel.jsx
try { (() => {
// Training panel — runs list + run detail
const {
  Button: PsyButton,
  Icon: PsyIcon,
  StatusChip,
  InfoChit,
  Progress,
  RadioSelectBar,
  Sort,
  StatBox,
  ShadowCard,
  RunBox,
  MiniCard
} = window.PsycheDesignSystem_d0a47d;
function fmt(n, d = 2) {
  if (n == null) return '';
  const suf = ['', 'k', 'm', 'b', 't'];
  let i = 0,
    v = n;
  while (v >= 1000 && i < suf.length - 1) {
    v /= 1000;
    i++;
  }
  return `${+v.toFixed(1)}${suf[i]}`;
}

// live-counting token number
function TokenCounter({
  start,
  rate,
  className
}) {
  const [val, setVal] = React.useState(start);
  React.useEffect(() => {
    setVal(start);
    if (!rate) return;
    const t = setInterval(() => setVal(v => v + rate / 10), 100);
    return () => clearInterval(t);
  }, [start, rate]);
  return /*#__PURE__*/React.createElement("span", {
    className: className
  }, Math.floor(val).toLocaleString());
}
function LineChart({
  title,
  points,
  unit,
  renderValue
}) {
  if (!points || points.length < 2) return null;
  const w = 280,
    h = 96;
  const min = Math.min(...points),
    max = Math.max(...points);
  const span = max - min || 1;
  const pts = points.map((p, i) => `${i / (points.length - 1) * w},${h - (p - min) / span * (h - 8) - 4}`).join(' ');
  const last = points[points.length - 1];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 0 256px',
      margin: 16,
      minWidth: 256
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-aux t-sm",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      textTransform: 'uppercase'
    }
  }, title), /*#__PURE__*/React.createElement("span", null, renderValue ? renderValue(last) : last, unit || '')), /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${w} ${h}`,
    style: {
      width: '100%',
      height: 96,
      display: 'block',
      border: '1px solid var(--slate-400)',
      background: 'var(--color-bg)'
    },
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: pts,
    fill: "none",
    stroke: "var(--forest-500)",
    strokeWidth: "2"
  })), /*#__PURE__*/React.createElement("div", {
    className: "t-aux t-xs",
    style: {
      color: 'var(--slate-600)',
      textAlign: 'right'
    }
  }, "step"));
}
function RunCard({
  run,
  onOpen
}) {
  return /*#__PURE__*/React.createElement(ShadowCard, {
    onClick: e => {
      e.preventDefault();
      onOpen(run);
    },
    href: "#"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-display t-2xl",
    style: {
      color: 'var(--color-fg)'
    }
  }, run.name), /*#__PURE__*/React.createElement(StatusChip, {
    status: run.status
  })), /*#__PURE__*/React.createElement("span", {
    className: "t-aux t-xs"
  }, run.description)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, run.size ? /*#__PURE__*/React.createElement(InfoChit, {
    label: "params"
  }, fmt(run.size)) : null, /*#__PURE__*/React.createElement(InfoChit, {
    label: "arch"
  }, run.arch), /*#__PURE__*/React.createElement(InfoChit, {
    label: "type"
  }, run.type), /*#__PURE__*/React.createElement(InfoChit, {
    label: "tokens"
  }, fmt(run.totalTokens))), /*#__PURE__*/React.createElement(Progress, {
    label: "tokens",
    chunkHeight: 12,
    chunkWidth: 16,
    current: run.tokensDone,
    total: run.totalTokens
  }), /*#__PURE__*/React.createElement("div", {
    className: "t-aux t-sm",
    style: {
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement(TokenCounter, {
    start: run.tokensDone,
    rate: run.status === 'active' ? run.tokensPerSecond : 0
  }), /*#__PURE__*/React.createElement("span", null, "\xA0tokens trained")));
}
const runTypes = [{
  label: 'All',
  value: 'all'
}, {
  label: 'Active',
  value: 'active'
}, {
  label: 'Completed',
  value: 'completed'
}, {
  label: 'Paused',
  value: 'paused'
}];
const runSort = [{
  label: 'Recently updated',
  value: 'updated'
}, {
  label: 'size',
  value: 'size'
}];
function RunsList({
  data,
  onOpen
}) {
  const [filter, setFilter] = React.useState('all');
  const [sort, setSort] = React.useState(runSort[0]);
  const runs = data.runs.filter(r => filter === 'all' || r.status === filter).sort((a, b) => sort.value === 'size' ? b.size - a.size : 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '1em 24px',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1em'
    }
  }, /*#__PURE__*/React.createElement(StatBox, {
    label: "tokens/sec"
  }, data.totalTokensPerSecondActive.toLocaleString()), /*#__PURE__*/React.createElement(StatBox, {
    label: "tokens trained"
  }, /*#__PURE__*/React.createElement(TokenCounter, {
    start: data.totalTokens,
    rate: data.totalTokensPerSecondActive
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 24px 1em',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 24,
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(RadioSelectBar, {
    options: runTypes,
    selected: filter,
    onChange: setFilter
  }), /*#__PURE__*/React.createElement(Sort, {
    options: runSort,
    selected: sort,
    onChange: setSort
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '2px 24px 24px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, runs.map(r => /*#__PURE__*/React.createElement(RunCard, {
    key: r.id,
    run: r,
    onOpen: onOpen
  }))));
}
function RunDetail({
  run,
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement(PsyButton, {
    variant: "action",
    icon: /*#__PURE__*/React.createElement(PsyIcon, {
      name: "arrow-left"
    }),
    onClick: onBack
  }, "back"), /*#__PURE__*/React.createElement(RunBox, {
    title: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "t-display t-4xl"
    }, run.name), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 24,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(StatusChip, {
      status: run.status
    }), /*#__PURE__*/React.createElement(PsyButton, {
      variant: "secondary",
      icon: /*#__PURE__*/React.createElement(PsyIcon, {
        name: "fullscreen"
      })
    })))
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-body t-base",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      padding: '24px',
      alignItems: 'center',
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("span", null, run.description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24
    }
  }, run.size ? /*#__PURE__*/React.createElement(InfoChit, {
    label: "params"
  }, fmt(run.size)) : null, /*#__PURE__*/React.createElement(InfoChit, {
    label: "arch"
  }, run.arch), /*#__PURE__*/React.createElement(InfoChit, {
    label: "type"
  }, run.type)), /*#__PURE__*/React.createElement("div", {
    className: "t-display t-3xl",
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(TokenCounter, {
    start: run.tokensDone,
    rate: run.status === 'active' ? run.tokensPerSecond : 0
  }), /*#__PURE__*/React.createElement("div", null, "tokens trained")), run.prompt && /*#__PURE__*/React.createElement("div", {
    className: "t-body t-sm",
    style: {
      maxWidth: 560,
      border: '1px solid var(--slate-400)',
      padding: 16,
      background: 'var(--color-bg)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, run.prompt), /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: 'pre-wrap',
      color: 'var(--forest-500)'
    }
  }, run.completion), /*#__PURE__*/React.createElement("span", {
    className: "blink"
  }, "\u258C")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40,
      padding: '8px 32px',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, run.loss != null && /*#__PURE__*/React.createElement(MiniCard, {
    value: String(run.loss.toFixed(2)),
    text: "loss"
  }), run.tokensPerSecond > 0 && /*#__PURE__*/React.createElement(MiniCard, {
    value: `${fmt(run.tokensPerSecond)} tok/s`,
    text: "training rate"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 24,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(LineChart, {
    title: "loss",
    points: run.lossHistory,
    renderValue: x => x.toFixed(2)
  }), /*#__PURE__*/React.createElement(LineChart, {
    title: "training speed",
    points: run.speedHistory,
    unit: " tok/s",
    renderValue: x => fmt(x)
  })))));
}
Object.assign(window, {
  RunsList,
  RunDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/TrainingPanel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// Fake data for the Psyche website UI kit
window.PSYCHE_FAKE_DATA = {
  totalTokensPerSecondActive: 42500,
  totalTokens: 9.42e12,
  runs: [{
    id: 'consilience-40b',
    name: 'consilience 40b',
    description: 'A 40B parameter model trained cooperatively over the internet by the Psyche network.',
    status: 'active',
    size: 40e9,
    arch: 'llama',
    type: 'text',
    totalTokens: 20e12,
    tokensDone: 9.2e12,
    tokensPerSecond: 38200,
    loss: 2.31,
    evals: {
      mmlu: 0.612,
      arc: 0.548,
      hellaswag: 0.703,
      winogrande: 0.664
    },
    lossHistory: [4.8, 4.1, 3.7, 3.4, 3.15, 2.95, 2.8, 2.68, 2.58, 2.5, 2.44, 2.39, 2.35, 2.33, 2.31],
    speedHistory: [21000, 26000, 31000, 29500, 34000, 36500, 33000, 37800, 39000, 36200, 40100, 38600, 41200, 39800, 38200],
    prompt: 'the nature of distributed intelligence is',
    completion: ' that no single node holds the whole mind. each participant contributes gradients, and the network converges toward something none of them could compute alone —'
  }, {
    id: 'hermes-datagen',
    name: 'hermes datagen',
    description: 'Synthetic data generation run for the Hermes series.',
    status: 'completed',
    size: 8e9,
    arch: 'llama',
    type: 'text',
    totalTokens: 1.5e12,
    tokensDone: 1.5e12,
    tokensPerSecond: 0,
    loss: 2.05,
    evals: {
      mmlu: 0.671,
      arc: 0.6,
      hellaswag: 0.742
    },
    lossHistory: [4.2, 3.5, 3.0, 2.7, 2.5, 2.35, 2.24, 2.16, 2.1, 2.07, 2.05],
    speedHistory: [18000, 22000, 25000, 24000, 26500, 25800, 27000, 26200, 25900, 26400, 26100],
    prompt: 'write a haiku about gradients',
    completion: '\nloss slopes downward now\neach step a small correction\nthe model awakens'
  }, {
    id: 'micro-12m',
    name: 'micro 12m',
    description: 'Tiny test run for validating the coordinator on testnet.',
    status: 'paused',
    size: 12e6,
    arch: 'gpt2',
    type: 'text',
    totalTokens: 5e9,
    tokensDone: 2.1e9,
    tokensPerSecond: 0,
    loss: 3.87,
    evals: {},
    lossHistory: [6.2, 5.4, 4.9, 4.5, 4.2, 4.05, 3.95, 3.87],
    speedHistory: [4200, 5100, 4800, 5400, 5200, 5000, 4900, 0],
    prompt: 'hello world',
    completion: ' hello world hello world hello'
  }, {
    id: 'vision-3b',
    name: 'vision 3b',
    description: 'Multimodal vision-language run awaiting compute members.',
    status: 'waitingForMembers',
    size: 3e9,
    arch: 'vit+llama',
    type: 'multimodal',
    totalTokens: 800e9,
    tokensDone: 0,
    tokensPerSecond: 0,
    loss: null,
    evals: {},
    lossHistory: [],
    speedHistory: [],
    prompt: '',
    completion: ''
  }],
  contribution: {
    totalDeposited: 748_213.42,
    maxDeposit: 1_250_000,
    users: [{
      rank: 1,
      address: '7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU',
      funding: 18.402
    }, {
      rank: 2,
      address: '9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM',
      funding: 12.117
    }, {
      rank: 3,
      address: 'BQWWFhzBdw2vKKBUX17NHeFbCoFQHfRARpdztPE2tDJ',
      funding: 9.884
    }, {
      rank: 4,
      address: 'DRpbCBMxVnDK7maPM5tGv6MvB3v1sRMC86PZ8okm21hy',
      funding: 6.03
    }, {
      rank: 5,
      address: '3xTy8dmgWa2rLqiascGaSFdVEcVHnZM2wVYvpvSpMnzc',
      funding: 4.511
    }, {
      rank: 6,
      address: 'FvvbGSNihc4LnWyGYcpXJm5CQhDEUENfFyAEQ3vfgON',
      funding: 2.207
    }, {
      rank: 7,
      address: '6y4kdmPYnVkjMhbTCSHW3d3ZxWrE8MHFTeVSVTqYqLQb',
      funding: 0.941
    }]
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.MiniCard = __ds_scope.MiniCard;

__ds_ns.OutlineBox = __ds_scope.OutlineBox;

__ds_ns.RunBox = __ds_scope.RunBox;

__ds_ns.ShadowCard = __ds_scope.ShadowCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.InfoChit = __ds_scope.InfoChit;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.RadioSelectBar = __ds_scope.RadioSelectBar;

__ds_ns.Sort = __ds_scope.Sort;

__ds_ns.StatBox = __ds_scope.StatBox;

__ds_ns.StatusChip = __ds_scope.StatusChip;

__ds_ns.SymbolSeparatedItems = __ds_scope.SymbolSeparatedItems;

__ds_ns.PSYCHE_ICONS = __ds_scope.PSYCHE_ICONS;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Header = __ds_scope.Header;

})();

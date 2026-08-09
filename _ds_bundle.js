/* @ds-bundle: {"format":4,"namespace":"BritanicalBlendsDesignSystem_707ab1","components":[{"name":"Fleuron","sourcePath":"components/brand/Fleuron.jsx"},{"name":"Logomark","sourcePath":"components/brand/Logomark.jsx"},{"name":"OrnateFrame","sourcePath":"components/brand/OrnateFrame.jsx"},{"name":"Strapline","sourcePath":"components/brand/Strapline.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Rule","sourcePath":"components/core/Rule.jsx"},{"name":"ScriptQuote","sourcePath":"components/core/ScriptQuote.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"AccentFooter","sourcePath":"components/product/AccentFooter.jsx"},{"name":"BenefitList","sourcePath":"components/product/BenefitList.jsx"},{"name":"BlendPanel","sourcePath":"components/product/BlendPanel.jsx"},{"name":"BrewGuide","sourcePath":"components/product/BrewGuide.jsx"},{"name":"IngredientLine","sourcePath":"components/product/IngredientLine.jsx"}],"sourceHashes":{"components/brand/Fleuron.jsx":"cdf7c55be895","components/brand/Logomark.jsx":"1de6420f4d4a","components/brand/OrnateFrame.jsx":"a1a8a1eeca37","components/brand/Strapline.jsx":"6e2f64d20e74","components/brand/Wordmark.jsx":"71e15f752230","components/core/Badge.jsx":"2b7c5a07c561","components/core/Button.jsx":"d5a8c5370b08","components/core/Card.jsx":"0e2bfa8fa05e","components/core/Rule.jsx":"0d21320f1ee5","components/core/ScriptQuote.jsx":"4f50bc149487","components/core/SectionLabel.jsx":"be6912d4bfce","components/product/AccentFooter.jsx":"4dbc300614c0","components/product/BenefitList.jsx":"c2c4ed2597cb","components/product/BlendPanel.jsx":"06b1920f737b","components/product/BrewGuide.jsx":"a9a80c67f68f","components/product/IngredientLine.jsx":"0b71c89bdcac","export/Kit.jsx":"0b2c5cd49850","export/blends.js":"d51cca054e30","ui_kits/marketing/HeroBanner.jsx":"c1b5344d7561","ui_kits/marketing/RangeStrip.jsx":"e2b162d20a49","ui_kits/packaging/CardShelf.jsx":"0891dc35f6a2","ui_kits/packaging/JarLabel.jsx":"c6450a01cf9f","ui_kits/packaging/JarLabel.standalone.jsx":"bf96f9ca718d","ui_kits/packaging/ProductCard.jsx":"94ed9cdbfe04","ui_kits/packaging/ProductCard.standalone.jsx":"962a70594f8f","ui_kits/packaging/blends.js":"d51cca054e30"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BritanicalBlendsDesignSystem_707ab1 = window.BritanicalBlendsDesignSystem_707ab1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Fleuron.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Fleuron({
  width = 200,
  color = 'var(--rule-hairline)',
  glyphColor,
  glyph = '\u2766',
  style,
  ...rest
}) {
  const rule = {
    flex: 1,
    height: 1,
    background: color
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      width,
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: rule
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      font: 'var(--weight-regular) 14px/1 var(--font-body)',
      color: glyphColor || color
    }
  }, glyph), /*#__PURE__*/React.createElement("span", {
    style: rule
  }));
}
Object.assign(__ds_scope, { Fleuron });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Fleuron.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logomark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Logomark({
  size = 96,
  src = 'assets/logo-roundel.png',
  alt = 'Britanical Blends',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({}, rest, {
    src: src,
    alt: alt,
    width: size,
    height: size,
    style: {
      display: 'block',
      width: size,
      height: size,
      borderRadius: 'var(--radius-round)',
      objectFit: 'cover',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Logomark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logomark.jsx", error: String((e && e.message) || e) }); }

// components/brand/OrnateFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function OrnateFrame({
  children,
  color = 'var(--rule-hairline)',
  inset = 10,
  radius = 'var(--radius-sm)',
  corners = true,
  style,
  ...rest
}) {
  const ring = (o, op) => ({
    position: 'absolute',
    inset: o,
    border: '1px solid ' + color,
    borderRadius: radius,
    opacity: op,
    pointerEvents: 'none'
  });
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      position: 'relative',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: ring(inset, 1)
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: ring(inset + 4, 0.55)
  }), corners && ['nw', 'ne', 'sw', 'se'].map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      [c[0] === 'n' ? 'top' : 'bottom']: inset + 11,
      [c[1] === 'w' ? 'left' : 'right']: inset + 11,
      font: 'var(--weight-regular) 11px/1 var(--font-body)',
      color,
      pointerEvents: 'none'
    }
  }, "\u2766")), children);
}
Object.assign(__ds_scope, { OrnateFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/OrnateFrame.jsx", error: String((e && e.message) || e) }); }

// components/brand/Strapline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Strapline({
  words = ['Nature', 'Intention', 'Nourishment'],
  size = 13,
  color = 'currentColor',
  font = 'serif',
  style,
  ...rest
}) {
  const stack = font === 'sans' ? 'var(--weight-light) ' + size + 'px/1.4 var(--font-sans)' : 'var(--weight-regular) ' + size + 'px/1.4 var(--font-body)';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.9em',
      font: stack,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }), words.map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: w
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      opacity: 0.7
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, w))));
}
Object.assign(__ds_scope, { Strapline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Strapline.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 12,
  md: 16,
  lg: 24,
  xl: 34,
  display: 48
};
function Wordmark({
  size = 'md',
  color = 'currentColor',
  as = 'div',
  align = 'center',
  style,
  ...rest
}) {
  const Tag = as;
  const px = SIZES[size] || SIZES.md;
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    style: {
      font: 'var(--weight-regular) ' + px + 'px/1.15 var(--font-display)',
      letterSpacing: 'var(--tracking-wordmark)',
      textIndent: 'var(--tracking-wordmark)',
      textTransform: 'uppercase',
      color,
      textAlign: align,
      ...style
    }
  }), "Britanical Blends");
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  children,
  tone = 'outline',
  size = 'md',
  style,
  ...rest
}) {
  const fs = size === 'sm' ? 10 : 11;
  const tones = {
    outline: {
      background: 'transparent',
      color: 'var(--ink-600)',
      border: '1px solid var(--rule-hairline)'
    },
    solid: {
      background: 'var(--accent, var(--wine-700))',
      color: 'var(--accent-on, var(--paper-100))',
      border: '1px solid transparent'
    },
    soft: {
      background: 'color-mix(in srgb, var(--accent, var(--wine-700)) 14%, var(--paper-100))',
      color: 'var(--accent-ink, var(--wine-700))',
      border: '1px solid color-mix(in srgb, var(--accent, var(--wine-700)) 30%, transparent)'
    },
    quiet: {
      background: 'var(--paper-200)',
      color: 'var(--ink-500)',
      border: '1px solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: size === 'sm' ? '3px 8px' : '5px 11px',
      borderRadius: 'var(--radius-sm)',
      font: 'var(--weight-regular) ' + fs + 'px/1 var(--font-body)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      ...tones[tone],
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PAD = {
  sm: '9px 20px',
  md: '13px 30px',
  lg: '17px 44px'
};
const FS = {
  sm: 12,
  md: 13,
  lg: 15
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  as = 'button',
  href,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = href ? 'a' : as;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-4)',
    padding: PAD[size],
    border: '1px solid transparent',
    borderRadius: 'var(--radius-sm)',
    font: 'var(--weight-regular) ' + FS[size] + 'px/1 var(--font-body)',
    letterSpacing: 'var(--tracking-caps)',
    textTransform: 'uppercase',
    textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.42 : 1,
    transition: 'var(--transition-color), transform var(--dur-fast) var(--ease-standard)',
    transform: press && !disabled ? 'translateY(1px)' : 'none',
    whiteSpace: 'nowrap'
  };
  const skins = {
    primary: {
      background: hover && !disabled ? 'var(--bark-800)' : 'var(--bark-700)',
      color: 'var(--paper-100)',
      borderColor: 'transparent'
    },
    secondary: {
      background: hover && !disabled ? 'color-mix(in srgb, var(--bark-700) 8%, transparent)' : 'transparent',
      color: 'var(--bark-700)',
      borderColor: 'var(--rule-strong)'
    },
    accent: {
      background: hover && !disabled ? 'color-mix(in srgb, var(--accent, var(--wine-700)) 88%, black)' : 'var(--accent, var(--wine-700))',
      color: 'var(--accent-on, var(--paper-100))',
      borderColor: 'transparent'
    },
    ghost: {
      background: 'transparent',
      color: hover && !disabled ? 'var(--ink-900)' : 'var(--ink-600)',
      borderColor: 'transparent',
      textDecoration: hover ? 'none' : 'none',
      borderBottom: '1px solid ' + (hover && !disabled ? 'var(--rule-strong)' : 'var(--rule-hairline)'),
      borderRadius: 0,
      padding: PAD[size].split(' ')[0] + ' 0'
    }
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      ...base,
      ...skins[variant],
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  tone = 'paper',
  bordered = true,
  elevated = false,
  grain = true,
  padding = 'var(--panel-pad)',
  radius = 'var(--radius-panel)',
  style,
  ...rest
}) {
  const tones = {
    paper: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)'
    },
    aged: {
      background: 'var(--surface-aged)',
      color: 'var(--text-body)'
    },
    blush: {
      background: 'var(--blush-100)',
      color: 'var(--ink-800)'
    },
    accent: {
      background: 'var(--accent, var(--wine-700))',
      color: 'var(--accent-on, var(--paper-100))'
    },
    dark: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-dark)'
    }
  };
  const t = tones[tone] || tones.paper;
  const dark = tone === 'accent' || tone === 'dark';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      ...t,
      padding,
      borderRadius: radius,
      border: bordered ? '1px solid ' + (dark ? 'color-mix(in srgb, var(--paper-100) 26%, transparent)' : 'var(--border-panel)') : 'none',
      boxShadow: elevated ? 'var(--shadow-card)' : 'none',
      backgroundImage: grain && !dark ? 'var(--texture-grain)' : 'none',
      backgroundSize: grain && !dark ? 'var(--texture-grain-size)' : 'auto',
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Rule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Rule({
  orientation = 'horizontal',
  color = 'var(--rule-hairline)',
  length = '100%',
  thickness = 1,
  style,
  ...rest
}) {
  const h = orientation === 'horizontal';
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    role: "separator",
    "aria-orientation": orientation,
    style: {
      display: 'block',
      background: color,
      width: h ? length : thickness + 'px',
      height: h ? thickness + 'px' : length,
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Rule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rule.jsx", error: String((e && e.message) || e) }); }

// components/core/ScriptQuote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ScriptQuote({
  children,
  lines,
  size = 30,
  color = 'currentColor',
  align = 'center',
  style,
  ...rest
}) {
  const content = lines || (typeof children === 'string' ? [children] : null);
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      font: 'var(--weight-regular) ' + size + 'px/1.15 var(--font-script)',
      color,
      textAlign: align,
      ...style
    }
  }), content ? content.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, l)) : children);
}
Object.assign(__ds_scope, { ScriptQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ScriptQuote.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionLabel({
  children,
  size = 13,
  color = 'var(--ink-900)',
  align = 'center',
  weight = 600,
  as = 'h3',
  style,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    style: {
      margin: 0,
      font: weight + ' ' + size + 'px/1.4 var(--font-body)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color,
      textAlign: align,
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/product/AccentFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function AccentFooter({
  quote = [],
  background = 'var(--accent, var(--wine-band))',
  color = 'var(--accent-on, var(--paper-100))',
  straplineSize = 12,
  quoteSize = 30,
  padding = '18px 24px 24px',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      background,
      color,
      padding,
      display: 'grid',
      gap: 'var(--space-5)',
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Strapline, {
    size: straplineSize,
    color: color,
    style: {
      opacity: 0.9
    }
  }), quote.length > 0 && /*#__PURE__*/React.createElement(__ds_scope.ScriptQuote, {
    lines: quote,
    size: quoteSize,
    color: color
  }));
}
Object.assign(__ds_scope, { AccentFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/AccentFooter.jsx", error: String((e && e.message) || e) }); }

// components/product/BenefitList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function BenefitList({
  items = [],
  size = 14,
  color = 'var(--text-body)',
  marker = '\u2022',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("ul", _extends({}, rest, {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gap: 'var(--space-5)',
      font: 'var(--weight-regular) ' + size + 'px/1.35 var(--font-body)',
      color,
      ...style
    }
  }), items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it,
    style: {
      display: 'grid',
      gridTemplateColumns: '0.9em 1fr',
      gap: '0.5em',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      opacity: 0.7
    }
  }, marker), /*#__PURE__*/React.createElement("span", null, it))));
}
Object.assign(__ds_scope, { BenefitList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/BenefitList.jsx", error: String((e && e.message) || e) }); }

// components/product/BrewGuide.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DEFAULTS = [{
  icon: 'ti-spoon',
  label: '1 tsp per cup'
}, {
  icon: 'ti-temperature',
  label: '100\u00B0C'
}, {
  icon: 'ti-clock',
  label: 'Steep 7\u201310 mins'
}];
function BrewGuide({
  steps = DEFAULTS,
  size = 14,
  color = 'var(--text-body)',
  iconSize = 20,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'grid',
      gap: 'var(--space-5)',
      font: 'var(--weight-regular) ' + size + 'px/1.35 var(--font-body)',
      color,
      ...style
    }
  }), steps.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    style: {
      display: 'grid',
      gridTemplateColumns: iconSize + 8 + 'px 1fr',
      gap: 'var(--space-5)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti " + s.icon,
    "aria-hidden": "true",
    style: {
      fontSize: iconSize,
      lineHeight: 1,
      opacity: 0.85
    }
  }), /*#__PURE__*/React.createElement("span", null, s.label))));
}
Object.assign(__ds_scope, { BrewGuide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/BrewGuide.jsx", error: String((e && e.message) || e) }); }

// components/product/BlendPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function BlendPanel({
  benefits = [],
  steps,
  borderColor = 'var(--border-panel)',
  padding = '18px 16px 20px',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      border: '1px solid ' + borderColor,
      borderRadius: 'var(--radius-panel)',
      padding,
      display: 'grid',
      gridTemplateColumns: '1fr 1px 1fr',
      gap: 'var(--space-6)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-6)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionLabel, {
    size: 12
  }, "Benefits"), /*#__PURE__*/React.createElement(__ds_scope.BenefitList, {
    items: benefits,
    size: 13
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      background: borderColor
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-6)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionLabel, {
    size: 12
  }, "Brew guide"), /*#__PURE__*/React.createElement(__ds_scope.BrewGuide, {
    steps: steps,
    size: 13,
    iconSize: 18
  })));
}
Object.assign(__ds_scope, { BlendPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/BlendPanel.jsx", error: String((e && e.message) || e) }); }

// components/product/IngredientLine.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IngredientLine({
  items = [],
  size = 15,
  color = 'var(--text-body)',
  align = 'center',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("p", _extends({}, rest, {
    style: {
      margin: 0,
      maxWidth: 'var(--measure-label)',
      marginInline: align === 'center' ? 'auto' : 0,
      font: 'var(--weight-regular) ' + size + 'px/1.45 var(--font-body)',
      color,
      textAlign: align,
      textWrap: 'balance',
      ...style
    }
  }), items.join(', '));
}
Object.assign(__ds_scope, { IngredientLine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/IngredientLine.jsx", error: String((e && e.message) || e) }); }

// export/Kit.jsx
try { (() => {
const K = window.BritanicalBlendsDesignSystem_707ab1 || {};
const RES = {
  'margin-bedtime-left.png': 'mBedtimeL',
  'margin-bedtime-right.png': 'mBedtimeR',
  'margin-sunset-left.png': 'mSunsetL',
  'margin-sunset-right.png': 'mSunsetR',
  'margin-wildwood-left.png': 'mWildwoodL',
  'margin-wildwood-right.png': 'mWildwoodR',
  'motif-herbs-colour.png': 'motifColour',
  'motif-herbs-wine.png': 'motifWine',
  'motif-herbs-moss.png': 'motifMoss',
  'logo-roundel.png': 'logoRoundel',
  'photo-table-interior.jpg': 'photoInterior',
  'photo-lineup-cards.jpg': 'photoLineup'
};
const res = name => (window.__resources || {})[RES[name]] || '../assets/' + name;
const MOTIF = {
  bedtime: 'motif-herbs-colour.png',
  sunset: 'motif-herbs-wine.png',
  wildwood: 'motif-herbs-moss.png'
};
function ProductCard({
  blend,
  width = 420,
  onClick,
  selected
}) {
  const s = width / 420;
  const px = n => Math.round(n * s) + 'px';
  const marginW = Math.round(width * 0.135);
  const mask = 'linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent)';
  return /*#__PURE__*/React.createElement("article", {
    "data-accent": blend.accent,
    onClick: onClick,
    style: {
      position: 'relative',
      width,
      background: 'var(--surface-card)',
      backgroundImage: 'var(--texture-grain)',
      backgroundSize: 'var(--texture-grain-size)',
      boxShadow: selected ? 'var(--shadow-lifted)' : 'var(--shadow-card)',
      cursor: onClick ? 'pointer' : 'default',
      overflow: 'hidden',
      transition: 'var(--transition-surface)',
      transform: selected ? 'translateY(-4px)' : 'none',
      display: 'grid',
      gridTemplateRows: '1fr auto'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: res(blend.margins[0]),
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      top: '26%',
      width: marginW,
      height: 'auto',
      mixBlendMode: 'multiply',
      opacity: 0.88,
      pointerEvents: 'none',
      maskImage: mask,
      WebkitMaskImage: mask
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: res(blend.margins[1]),
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 0,
      top: '26%',
      width: Math.round(marginW * 0.93),
      height: 'auto',
      mixBlendMode: 'multiply',
      opacity: 0.88,
      pointerEvents: 'none',
      maskImage: mask,
      WebkitMaskImage: mask
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: px(9),
      border: '1px solid ' + blend.frame,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: px(13),
      border: '1px solid ' + blend.frame,
      opacity: 0.5,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: px(30) + ' ' + px(28) + ' ' + px(22),
      display: 'grid',
      gap: px(14),
      justifyItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(K.Wordmark, {
    size: "sm",
    style: {
      fontSize: px(14),
      color: blend.titleColor,
      opacity: 0.92
    }
  }), /*#__PURE__*/React.createElement(K.Fleuron, {
    width: Math.round(width * 0.44),
    color: blend.frame,
    glyphColor: blend.titleColor,
    style: {
      marginTop: px(-2)
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: px(6) + ' 0 0',
      font: 'var(--weight-regular) ' + px(46) + '/0.94 var(--font-display)',
      textTransform: 'uppercase',
      textAlign: 'center',
      color: blend.titleColor,
      letterSpacing: 'var(--tracking-display)'
    }
  }, blend.name[0], /*#__PURE__*/React.createElement("br", null), blend.name[1]), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--weight-regular) ' + px(14) + '/1.4 var(--font-body)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      textAlign: 'center',
      color: 'var(--ink-700)'
    }
  }, blend.subtitle[0], /*#__PURE__*/React.createElement("br", null), blend.subtitle[1]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: px(8),
      justifyItems: 'center',
      marginTop: px(10)
    }
  }, /*#__PURE__*/React.createElement(K.SectionLabel, {
    size: Math.round(12 * s)
  }, "About this blend"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '30ch',
      font: 'var(--weight-regular) ' + px(13) + '/1.5 var(--font-body)',
      textAlign: 'center',
      textWrap: 'balance',
      color: 'var(--ink-800)'
    }
  }, blend.about)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: px(8),
      justifyItems: 'center',
      marginTop: px(14)
    }
  }, /*#__PURE__*/React.createElement(K.SectionLabel, {
    size: Math.round(12 * s)
  }, "Ingredients"), /*#__PURE__*/React.createElement(K.IngredientLine, {
    items: blend.ingredients,
    size: Math.round(13 * s),
    style: {
      maxWidth: '30ch'
    }
  })), /*#__PURE__*/React.createElement(K.BlendPanel, {
    benefits: blend.benefits,
    borderColor: blend.frame,
    padding: px(14) + ' ' + px(12) + ' ' + px(16),
    style: {
      width: '100%',
      marginTop: px(18),
      fontSize: px(12)
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: blend.band,
      color: blend.bandInk,
      padding: px(14) + ' ' + px(16) + ' ' + px(18),
      display: 'grid',
      gap: px(8),
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(K.Strapline, {
    size: Math.round(11 * s),
    color: blend.bandInk,
    style: {
      opacity: 0.92
    }
  }), /*#__PURE__*/React.createElement(K.ScriptQuote, {
    lines: blend.quote,
    size: Math.round(27 * s),
    color: blend.bandInk
  })));
}
function JarLabel({
  blend,
  width = 260
}) {
  return /*#__PURE__*/React.createElement("div", {
    "data-accent": blend.accent,
    style: {
      width,
      background: 'var(--paper-100)',
      backgroundImage: 'var(--texture-grain)',
      backgroundSize: 'var(--texture-grain-size)',
      border: '1px solid ' + blend.frame,
      padding: '16px 14px 14px',
      position: 'relative',
      display: 'grid',
      gap: 8,
      justifyItems: 'center',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 5,
      border: '1px solid ' + blend.frame,
      opacity: 0.5,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement(K.Wordmark, {
    size: "sm",
    style: {
      fontSize: 10,
      color: blend.titleColor
    }
  }), /*#__PURE__*/React.createElement(K.Fleuron, {
    width: Math.round(width * 0.45),
    color: blend.frame,
    glyphColor: blend.titleColor
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--weight-regular) 26px/0.95 var(--font-display)',
      textTransform: 'uppercase',
      textAlign: 'center',
      color: blend.titleColor
    }
  }, blend.name[0], /*#__PURE__*/React.createElement("br", null), blend.name[1]), /*#__PURE__*/React.createElement("img", {
    src: res(MOTIF[blend.key]),
    alt: "",
    "aria-hidden": "true",
    style: {
      width: '86%',
      height: 'auto',
      mixBlendMode: 'multiply',
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--weight-regular) 9px/1.45 var(--font-body)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      textAlign: 'center',
      color: 'var(--ink-700)',
      maxWidth: '30ch'
    }
  }, blend.ingredients.join(', ')));
}
function RangeTile({
  blend
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    "data-accent": blend.accent,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      backgroundImage: 'var(--texture-grain)',
      backgroundSize: 'var(--texture-grain-size)',
      border: '1px solid ' + blend.frame,
      padding: '30px 26px 26px',
      display: 'grid',
      gap: 14,
      justifyItems: 'center',
      boxShadow: hover ? 'var(--shadow-card)' : 'var(--shadow-xs)',
      transform: hover ? 'translateY(-3px)' : 'none',
      transition: 'var(--transition-surface)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--weight-regular) 34px/0.95 var(--font-display)',
      textTransform: 'uppercase',
      textAlign: 'center',
      color: blend.titleColor
    }
  }, blend.name[0], /*#__PURE__*/React.createElement("br", null), blend.name[1]), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--weight-regular) 12px/1.4 var(--font-body)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      textAlign: 'center',
      color: 'var(--ink-700)'
    }
  }, blend.subtitle[0], /*#__PURE__*/React.createElement("br", null), blend.subtitle[1]), /*#__PURE__*/React.createElement("img", {
    src: res(MOTIF[blend.key]),
    alt: "",
    "aria-hidden": "true",
    style: {
      width: '92%',
      height: 'auto',
      mixBlendMode: 'multiply',
      margin: '2px 0'
    }
  }), /*#__PURE__*/React.createElement(K.SectionLabel, {
    size: 11
  }, "Ingredients"), /*#__PURE__*/React.createElement(K.IngredientLine, {
    items: blend.ingredients,
    size: 13
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(K.Badge, {
    tone: "soft"
  }, "Loose leaf"), /*#__PURE__*/React.createElement(K.Badge, {
    tone: "outline"
  }, "50g")), /*#__PURE__*/React.createElement(K.Button, {
    variant: "accent",
    size: "sm",
    style: {
      marginTop: 8
    }
  }, "Add to basket"));
}
function HeroBanner({
  children
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: 430,
      display: 'grid',
      placeItems: 'center',
      background: 'url(' + res('photo-table-interior.jpg') + ') center/cover no-repeat',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to bottom, color-mix(in srgb, var(--ink-900) 26%, transparent), color-mix(in srgb, var(--ink-900) 8%, transparent) 55%, color-mix(in srgb, var(--ink-900) 34%, transparent))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'grid',
      gap: 14,
      justifyItems: 'center',
      padding: 40,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(K.Wordmark, {
    size: "display",
    color: "var(--paper-50)",
    style: {
      textShadow: '0 2px 24px rgba(30,26,20,.45)'
    }
  }), /*#__PURE__*/React.createElement(K.Strapline, {
    font: "sans",
    size: 17,
    color: "var(--paper-50)",
    style: {
      textShadow: '0 1px 14px rgba(30,26,20,.5)'
    }
  }), children));
}
Object.assign(window, {
  ProductCard,
  JarLabel,
  RangeTile,
  HeroBanner,
  bbRes: res
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/Kit.jsx", error: String((e && e.message) || e) }); }

// export/blends.js
try { (() => {
const BB_BLENDS = [{
  key: 'bedtime',
  accent: 'bedtime',
  name: ['Banana', 'Bedtime Tea'],
  subtitle: ['A gentle, calming blend', 'for restful nights'],
  about: 'A soothing, naturally sweet blend designed to relax the body and quiet the mind. Perfect to unwind with before bed and support a deep, restful sleep.',
  ingredients: ['Banana', 'Banana Peel', 'Chamomile', 'Cinnamon Bark', 'Vanilla Bean'],
  benefits: ['Supports restful sleep', 'Calms the nervous system', 'Aids digestion', 'Naturally sweet & comforting'],
  quote: ['Sip slow. Dream deep.'],
  titleColor: 'var(--ink-900)',
  band: 'var(--wheat-400)',
  bandInk: 'var(--ink-900)',
  frame: 'color-mix(in srgb, var(--bark-500) 55%, transparent)',
  margins: ['margin-bedtime-left.png', 'margin-bedtime-right.png']
}, {
  key: 'sunset',
  accent: 'sunset',
  name: ['Egyptian', 'Sunset'],
  subtitle: ['A floral, fruity blend', 'to uplift & inspire'],
  about: 'A vibrant, exotic blend inspired by golden evenings. Beautifully floral and refreshing, it uplifts the senses and transports you to a state of calm clarity and joy.',
  ingredients: ['Hibiscus', 'Blue Lotus', 'Rose Petals', 'Orange Peel'],
  benefits: ['Uplifts mood', 'Supports emotional balance', 'Rich in antioxidants', 'Naturally caffeine free'],
  quote: ['Breathe in beauty.', 'Sip in the sunset.'],
  titleColor: 'var(--wine-800)',
  band: 'var(--wine-band)',
  bandInk: 'var(--paper-100)',
  frame: 'color-mix(in srgb, var(--wine-700) 42%, transparent)',
  margins: ['margin-sunset-left.png', 'margin-sunset-right.png']
}, {
  key: 'wildwood',
  accent: 'wildwood',
  name: ['Wildwood', 'Elixir'],
  subtitle: ['An earthy, herbal blend', 'for vitality & balance'],
  about: "A grounding, nourishing blend of wild herbs to support your body's natural defences, soothe the digestive system and restore inner balance.",
  ingredients: ['Nettle', 'Peppermint', 'Cats Claw', 'Licorice Root', 'Ginger Root'],
  benefits: ['Supports immunity', 'Aids digestion', 'Anti-inflammatory', 'Energising & grounding'],
  quote: ['Rooted in nature.', 'Made for you.'],
  titleColor: 'var(--moss-900)',
  band: 'var(--moss-500)',
  bandInk: 'var(--paper-100)',
  frame: 'color-mix(in srgb, var(--moss-700) 45%, transparent)',
  margins: ['margin-wildwood-left.png', 'margin-wildwood-right.png']
}];
Object.assign(window, {
  BB_BLENDS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/blends.js", error: String((e && e.message) || e) }); }

// ui_kits/marketing/HeroBanner.jsx
try { (() => {
const BBh = window.BritanicalBlendsDesignSystem_707ab1 || {};
function HeroBanner({
  image = '../../assets/photo-table-interior.jpg',
  height = 460,
  align = 'center',
  children
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height,
      display: 'grid',
      placeItems: align === 'center' ? 'center' : 'end start',
      background: 'url(' + image + ') center/cover no-repeat',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to bottom, color-mix(in srgb, var(--ink-900) 26%, transparent), color-mix(in srgb, var(--ink-900) 8%, transparent) 55%, color-mix(in srgb, var(--ink-900) 34%, transparent))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'grid',
      gap: 14,
      justifyItems: 'center',
      padding: 40,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(BBh.Wordmark, {
    size: "display",
    color: "var(--paper-50)",
    style: {
      textShadow: '0 2px 24px rgba(30,26,20,.45)'
    }
  }), /*#__PURE__*/React.createElement(BBh.Strapline, {
    font: "sans",
    size: 17,
    color: "var(--paper-50)",
    style: {
      textShadow: '0 1px 14px rgba(30,26,20,.5)'
    }
  }), children));
}
Object.assign(window, {
  HeroBanner
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/HeroBanner.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/RangeStrip.jsx
try { (() => {
const BBr = window.BritanicalBlendsDesignSystem_707ab1 || {};
function RangeTile({
  blend,
  assetBase = '../../assets/'
}) {
  const [hover, setHover] = React.useState(false);
  const motif = {
    bedtime: 'motif-herbs-colour.png',
    sunset: 'motif-herbs-wine.png',
    wildwood: 'motif-herbs-moss.png'
  }[blend.key];
  return /*#__PURE__*/React.createElement("article", {
    "data-accent": blend.accent,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      backgroundImage: 'var(--texture-grain)',
      backgroundSize: 'var(--texture-grain-size)',
      border: '1px solid ' + blend.frame,
      padding: '30px 26px 26px',
      display: 'grid',
      gap: 14,
      justifyItems: 'center',
      boxShadow: hover ? 'var(--shadow-card)' : 'var(--shadow-xs)',
      transform: hover ? 'translateY(-3px)' : 'none',
      transition: 'var(--transition-surface)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--weight-regular) 34px/0.95 var(--font-display)',
      textTransform: 'uppercase',
      textAlign: 'center',
      color: blend.titleColor
    }
  }, blend.name[0], /*#__PURE__*/React.createElement("br", null), blend.name[1]), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--weight-regular) 12px/1.4 var(--font-body)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      textAlign: 'center',
      color: 'var(--ink-700)'
    }
  }, blend.subtitle[0], /*#__PURE__*/React.createElement("br", null), blend.subtitle[1]), /*#__PURE__*/React.createElement("img", {
    src: assetBase + motif,
    alt: "",
    "aria-hidden": "true",
    style: {
      width: '92%',
      height: 'auto',
      mixBlendMode: 'multiply',
      margin: '2px 0'
    }
  }), /*#__PURE__*/React.createElement(BBr.SectionLabel, {
    size: 11
  }, "Ingredients"), /*#__PURE__*/React.createElement(BBr.IngredientLine, {
    items: blend.ingredients,
    size: 13
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(BBr.Badge, {
    tone: "soft"
  }, "Loose leaf"), /*#__PURE__*/React.createElement(BBr.Badge, {
    tone: "outline"
  }, "50g")), /*#__PURE__*/React.createElement(BBr.Button, {
    variant: "accent",
    size: "sm",
    style: {
      marginTop: 8
    }
  }, "Add to basket"));
}
function RangeStrip({
  blends
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gap: 30,
      justifyItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(BBr.SectionLabel, {
    size: 13
  }, "Our blends"), /*#__PURE__*/React.createElement(BBr.Fleuron, {
    width: 220,
    glyphColor: "var(--bark-600)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 26,
      width: '100%'
    }
  }, blends.map(b => /*#__PURE__*/React.createElement(RangeTile, {
    key: b.key,
    blend: b
  }))));
}
Object.assign(window, {
  RangeStrip,
  RangeTile
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/RangeStrip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/packaging/CardShelf.jsx
try { (() => {
function CardShelf({
  blends,
  selected,
  onSelect,
  cardWidth = 300
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 26,
      alignItems: 'flex-start',
      justifyContent: 'center'
    }
  }, blends.map(b => /*#__PURE__*/React.createElement(ProductCard, {
    key: b.key,
    blend: b,
    width: cardWidth,
    selected: selected === b.key,
    onClick: () => onSelect(b.key)
  })));
}
Object.assign(window, {
  CardShelf
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/packaging/CardShelf.jsx", error: String((e && e.message) || e) }); }

// ui_kits/packaging/JarLabel.jsx
try { (() => {
const BBj = window.BritanicalBlendsDesignSystem_707ab1 || {};
function JarLabel({
  blend,
  width = 260,
  assetBase = '../../assets/'
}) {
  const motif = {
    bedtime: 'motif-herbs-colour.png',
    sunset: 'motif-herbs-wine.png',
    wildwood: 'motif-herbs-moss.png'
  }[blend.key];
  return /*#__PURE__*/React.createElement("div", {
    "data-accent": blend.accent,
    style: {
      width,
      background: 'var(--paper-100)',
      backgroundImage: 'var(--texture-grain)',
      backgroundSize: 'var(--texture-grain-size)',
      border: '1px solid ' + blend.frame,
      padding: '16px 14px 14px',
      position: 'relative',
      display: 'grid',
      gap: 8,
      justifyItems: 'center',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 5,
      border: '1px solid ' + blend.frame,
      opacity: 0.5,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement(BBj.Wordmark, {
    size: "sm",
    style: {
      fontSize: 10,
      color: blend.titleColor
    }
  }), /*#__PURE__*/React.createElement(BBj.Fleuron, {
    width: Math.round(width * 0.45),
    color: blend.frame,
    glyphColor: blend.titleColor
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--weight-regular) 26px/0.95 var(--font-display)',
      textTransform: 'uppercase',
      textAlign: 'center',
      color: blend.titleColor
    }
  }, blend.name[0], /*#__PURE__*/React.createElement("br", null), blend.name[1]), /*#__PURE__*/React.createElement("img", {
    src: assetBase + motif,
    alt: "",
    "aria-hidden": "true",
    style: {
      width: '86%',
      height: 'auto',
      mixBlendMode: 'multiply',
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--weight-regular) 9px/1.45 var(--font-body)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      textAlign: 'center',
      color: 'var(--ink-700)',
      maxWidth: '30ch'
    }
  }, blend.ingredients.join(', ')));
}
Object.assign(window, {
  JarLabel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/packaging/JarLabel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/packaging/JarLabel.standalone.jsx
try { (() => {
const BBj = window.BritanicalBlendsDesignSystem_707ab1 || {};
const RES = {
  'margin-bedtime-left.png': 'mBedtimeL',
  'margin-bedtime-right.png': 'mBedtimeR',
  'margin-sunset-left.png': 'mSunsetL',
  'margin-sunset-right.png': 'mSunsetR',
  'margin-wildwood-left.png': 'mWildwoodL',
  'margin-wildwood-right.png': 'mWildwoodR',
  'motif-herbs-colour.png': 'motifColour',
  'motif-herbs-wine.png': 'motifWine',
  'motif-herbs-moss.png': 'motifMoss'
};
const res = name => (window.__resources || {})[RES[name]] || '../../assets/' + name;
function JarLabel({
  blend,
  width = 260,
  assetBase = '../../assets/'
}) {
  const motif = {
    bedtime: 'motif-herbs-colour.png',
    sunset: 'motif-herbs-wine.png',
    wildwood: 'motif-herbs-moss.png'
  }[blend.key];
  return /*#__PURE__*/React.createElement("div", {
    "data-accent": blend.accent,
    style: {
      width,
      background: 'var(--paper-100)',
      backgroundImage: 'var(--texture-grain)',
      backgroundSize: 'var(--texture-grain-size)',
      border: '1px solid ' + blend.frame,
      padding: '16px 14px 14px',
      position: 'relative',
      display: 'grid',
      gap: 8,
      justifyItems: 'center',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 5,
      border: '1px solid ' + blend.frame,
      opacity: 0.5,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement(BBj.Wordmark, {
    size: "sm",
    style: {
      fontSize: 10,
      color: blend.titleColor
    }
  }), /*#__PURE__*/React.createElement(BBj.Fleuron, {
    width: Math.round(width * 0.45),
    color: blend.frame,
    glyphColor: blend.titleColor
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--weight-regular) 26px/0.95 var(--font-display)',
      textTransform: 'uppercase',
      textAlign: 'center',
      color: blend.titleColor
    }
  }, blend.name[0], /*#__PURE__*/React.createElement("br", null), blend.name[1]), /*#__PURE__*/React.createElement("img", {
    src: res(motif),
    alt: "",
    "aria-hidden": "true",
    style: {
      width: '86%',
      height: 'auto',
      mixBlendMode: 'multiply',
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--weight-regular) 9px/1.45 var(--font-body)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      textAlign: 'center',
      color: 'var(--ink-700)',
      maxWidth: '30ch'
    }
  }, blend.ingredients.join(', ')));
}
Object.assign(window, {
  JarLabel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/packaging/JarLabel.standalone.jsx", error: String((e && e.message) || e) }); }

// ui_kits/packaging/ProductCard.jsx
try { (() => {
const BBp = window.BritanicalBlendsDesignSystem_707ab1 || {};
function ProductCard({
  blend,
  width = 420,
  assetBase = '../../assets/',
  onClick,
  selected
}) {
  const s = width / 420;
  const px = n => Math.round(n * s) + 'px';
  const marginW = Math.round(width * 0.135);
  return /*#__PURE__*/React.createElement("article", {
    "data-accent": blend.accent,
    onClick: onClick,
    style: {
      position: 'relative',
      width,
      background: 'var(--surface-card)',
      backgroundImage: 'var(--texture-grain)',
      backgroundSize: 'var(--texture-grain-size)',
      boxShadow: selected ? 'var(--shadow-lifted)' : 'var(--shadow-card)',
      cursor: onClick ? 'pointer' : 'default',
      overflow: 'hidden',
      transition: 'var(--transition-surface)',
      transform: selected ? 'translateY(-4px)' : 'none',
      display: 'grid',
      gridTemplateRows: '1fr auto'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: assetBase + blend.margins[0],
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      top: '26%',
      width: marginW,
      height: 'auto',
      mixBlendMode: 'multiply',
      opacity: 0.88,
      pointerEvents: 'none',
      maskImage: 'linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent)',
      WebkitMaskImage: 'linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: assetBase + blend.margins[1],
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 0,
      top: '26%',
      width: Math.round(marginW * 0.93),
      height: 'auto',
      mixBlendMode: 'multiply',
      opacity: 0.88,
      pointerEvents: 'none',
      maskImage: 'linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent)',
      WebkitMaskImage: 'linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: px(9),
      border: '1px solid ' + blend.frame,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: px(13),
      border: '1px solid ' + blend.frame,
      opacity: 0.5,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: px(30) + ' ' + px(28) + ' ' + px(22),
      display: 'grid',
      gap: px(14),
      justifyItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(BBp.Wordmark, {
    size: "sm",
    style: {
      fontSize: px(14),
      color: blend.titleColor,
      opacity: 0.92
    }
  }), /*#__PURE__*/React.createElement(BBp.Fleuron, {
    width: Math.round(width * 0.44),
    color: blend.frame,
    glyphColor: blend.titleColor,
    style: {
      marginTop: px(-2)
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: px(6) + ' 0 0',
      font: 'var(--weight-regular) ' + px(46) + '/0.94 var(--font-display)',
      textTransform: 'uppercase',
      textAlign: 'center',
      color: blend.titleColor,
      letterSpacing: 'var(--tracking-display)'
    }
  }, blend.name[0], /*#__PURE__*/React.createElement("br", null), blend.name[1]), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--weight-regular) ' + px(14) + '/1.4 var(--font-body)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      textAlign: 'center',
      color: 'var(--ink-700)'
    }
  }, blend.subtitle[0], /*#__PURE__*/React.createElement("br", null), blend.subtitle[1]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: px(8),
      justifyItems: 'center',
      marginTop: px(10)
    }
  }, /*#__PURE__*/React.createElement(BBp.SectionLabel, {
    size: Math.round(12 * s)
  }, "About this blend"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '30ch',
      font: 'var(--weight-regular) ' + px(13) + '/1.5 var(--font-body)',
      textAlign: 'center',
      textWrap: 'balance',
      color: 'var(--ink-800)'
    }
  }, blend.about)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: px(8),
      justifyItems: 'center',
      marginTop: px(14)
    }
  }, /*#__PURE__*/React.createElement(BBp.SectionLabel, {
    size: Math.round(12 * s)
  }, "Ingredients"), /*#__PURE__*/React.createElement(BBp.IngredientLine, {
    items: blend.ingredients,
    size: Math.round(13 * s),
    style: {
      maxWidth: '30ch'
    }
  })), /*#__PURE__*/React.createElement(BBp.BlendPanel, {
    benefits: blend.benefits,
    borderColor: blend.frame,
    padding: px(14) + ' ' + px(12) + ' ' + px(16),
    style: {
      width: '100%',
      marginTop: px(18),
      fontSize: px(12)
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: blend.band,
      color: blend.bandInk,
      padding: px(14) + ' ' + px(16) + ' ' + px(18),
      display: 'grid',
      gap: px(8),
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(BBp.Strapline, {
    size: Math.round(11 * s),
    color: blend.bandInk,
    style: {
      opacity: 0.92
    }
  }), /*#__PURE__*/React.createElement(BBp.ScriptQuote, {
    lines: blend.quote,
    size: Math.round(27 * s),
    color: blend.bandInk
  })));
}
Object.assign(window, {
  ProductCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/packaging/ProductCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/packaging/ProductCard.standalone.jsx
try { (() => {
const BBp = window.BritanicalBlendsDesignSystem_707ab1 || {};
const RES = {
  'margin-bedtime-left.png': 'mBedtimeL',
  'margin-bedtime-right.png': 'mBedtimeR',
  'margin-sunset-left.png': 'mSunsetL',
  'margin-sunset-right.png': 'mSunsetR',
  'margin-wildwood-left.png': 'mWildwoodL',
  'margin-wildwood-right.png': 'mWildwoodR',
  'motif-herbs-colour.png': 'motifColour',
  'motif-herbs-wine.png': 'motifWine',
  'motif-herbs-moss.png': 'motifMoss'
};
const res = name => (window.__resources || {})[RES[name]] || '../../assets/' + name;
function ProductCard({
  blend,
  width = 420,
  assetBase = '../../assets/',
  onClick,
  selected
}) {
  const s = width / 420;
  const px = n => Math.round(n * s) + 'px';
  const marginW = Math.round(width * 0.135);
  return /*#__PURE__*/React.createElement("article", {
    "data-accent": blend.accent,
    onClick: onClick,
    style: {
      position: 'relative',
      width,
      background: 'var(--surface-card)',
      backgroundImage: 'var(--texture-grain)',
      backgroundSize: 'var(--texture-grain-size)',
      boxShadow: selected ? 'var(--shadow-lifted)' : 'var(--shadow-card)',
      cursor: onClick ? 'pointer' : 'default',
      overflow: 'hidden',
      transition: 'var(--transition-surface)',
      transform: selected ? 'translateY(-4px)' : 'none',
      display: 'grid',
      gridTemplateRows: '1fr auto'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: res(blend.margins[0]),
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      top: '26%',
      width: marginW,
      height: 'auto',
      mixBlendMode: 'multiply',
      opacity: 0.88,
      pointerEvents: 'none',
      maskImage: 'linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent)',
      WebkitMaskImage: 'linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: res(blend.margins[1]),
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 0,
      top: '26%',
      width: Math.round(marginW * 0.93),
      height: 'auto',
      mixBlendMode: 'multiply',
      opacity: 0.88,
      pointerEvents: 'none',
      maskImage: 'linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent)',
      WebkitMaskImage: 'linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: px(9),
      border: '1px solid ' + blend.frame,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: px(13),
      border: '1px solid ' + blend.frame,
      opacity: 0.5,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: px(30) + ' ' + px(28) + ' ' + px(22),
      display: 'grid',
      gap: px(14),
      justifyItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(BBp.Wordmark, {
    size: "sm",
    style: {
      fontSize: px(14),
      color: blend.titleColor,
      opacity: 0.92
    }
  }), /*#__PURE__*/React.createElement(BBp.Fleuron, {
    width: Math.round(width * 0.44),
    color: blend.frame,
    glyphColor: blend.titleColor,
    style: {
      marginTop: px(-2)
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: px(6) + ' 0 0',
      font: 'var(--weight-regular) ' + px(46) + '/0.94 var(--font-display)',
      textTransform: 'uppercase',
      textAlign: 'center',
      color: blend.titleColor,
      letterSpacing: 'var(--tracking-display)'
    }
  }, blend.name[0], /*#__PURE__*/React.createElement("br", null), blend.name[1]), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--weight-regular) ' + px(14) + '/1.4 var(--font-body)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      textAlign: 'center',
      color: 'var(--ink-700)'
    }
  }, blend.subtitle[0], /*#__PURE__*/React.createElement("br", null), blend.subtitle[1]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: px(8),
      justifyItems: 'center',
      marginTop: px(10)
    }
  }, /*#__PURE__*/React.createElement(BBp.SectionLabel, {
    size: Math.round(12 * s)
  }, "About this blend"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '30ch',
      font: 'var(--weight-regular) ' + px(13) + '/1.5 var(--font-body)',
      textAlign: 'center',
      textWrap: 'balance',
      color: 'var(--ink-800)'
    }
  }, blend.about)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: px(8),
      justifyItems: 'center',
      marginTop: px(14)
    }
  }, /*#__PURE__*/React.createElement(BBp.SectionLabel, {
    size: Math.round(12 * s)
  }, "Ingredients"), /*#__PURE__*/React.createElement(BBp.IngredientLine, {
    items: blend.ingredients,
    size: Math.round(13 * s),
    style: {
      maxWidth: '30ch'
    }
  })), /*#__PURE__*/React.createElement(BBp.BlendPanel, {
    benefits: blend.benefits,
    borderColor: blend.frame,
    padding: px(14) + ' ' + px(12) + ' ' + px(16),
    style: {
      width: '100%',
      marginTop: px(18),
      fontSize: px(12)
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: blend.band,
      color: blend.bandInk,
      padding: px(14) + ' ' + px(16) + ' ' + px(18),
      display: 'grid',
      gap: px(8),
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(BBp.Strapline, {
    size: Math.round(11 * s),
    color: blend.bandInk,
    style: {
      opacity: 0.92
    }
  }), /*#__PURE__*/React.createElement(BBp.ScriptQuote, {
    lines: blend.quote,
    size: Math.round(27 * s),
    color: blend.bandInk
  })));
}
Object.assign(window, {
  ProductCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/packaging/ProductCard.standalone.jsx", error: String((e && e.message) || e) }); }

// ui_kits/packaging/blends.js
try { (() => {
const BB_BLENDS = [{
  key: 'bedtime',
  accent: 'bedtime',
  name: ['Banana', 'Bedtime Tea'],
  subtitle: ['A gentle, calming blend', 'for restful nights'],
  about: 'A soothing, naturally sweet blend designed to relax the body and quiet the mind. Perfect to unwind with before bed and support a deep, restful sleep.',
  ingredients: ['Banana', 'Banana Peel', 'Chamomile', 'Cinnamon Bark', 'Vanilla Bean'],
  benefits: ['Supports restful sleep', 'Calms the nervous system', 'Aids digestion', 'Naturally sweet & comforting'],
  quote: ['Sip slow. Dream deep.'],
  titleColor: 'var(--ink-900)',
  band: 'var(--wheat-400)',
  bandInk: 'var(--ink-900)',
  frame: 'color-mix(in srgb, var(--bark-500) 55%, transparent)',
  margins: ['margin-bedtime-left.png', 'margin-bedtime-right.png']
}, {
  key: 'sunset',
  accent: 'sunset',
  name: ['Egyptian', 'Sunset'],
  subtitle: ['A floral, fruity blend', 'to uplift & inspire'],
  about: 'A vibrant, exotic blend inspired by golden evenings. Beautifully floral and refreshing, it uplifts the senses and transports you to a state of calm clarity and joy.',
  ingredients: ['Hibiscus', 'Blue Lotus', 'Rose Petals', 'Orange Peel'],
  benefits: ['Uplifts mood', 'Supports emotional balance', 'Rich in antioxidants', 'Naturally caffeine free'],
  quote: ['Breathe in beauty.', 'Sip in the sunset.'],
  titleColor: 'var(--wine-800)',
  band: 'var(--wine-band)',
  bandInk: 'var(--paper-100)',
  frame: 'color-mix(in srgb, var(--wine-700) 42%, transparent)',
  margins: ['margin-sunset-left.png', 'margin-sunset-right.png']
}, {
  key: 'wildwood',
  accent: 'wildwood',
  name: ['Wildwood', 'Elixir'],
  subtitle: ['An earthy, herbal blend', 'for vitality & balance'],
  about: "A grounding, nourishing blend of wild herbs to support your body's natural defences, soothe the digestive system and restore inner balance.",
  ingredients: ['Nettle', 'Peppermint', 'Cats Claw', 'Licorice Root', 'Ginger Root'],
  benefits: ['Supports immunity', 'Aids digestion', 'Anti-inflammatory', 'Energising & grounding'],
  quote: ['Rooted in nature.', 'Made for you.'],
  titleColor: 'var(--moss-900)',
  band: 'var(--moss-500)',
  bandInk: 'var(--paper-100)',
  frame: 'color-mix(in srgb, var(--moss-700) 45%, transparent)',
  margins: ['margin-wildwood-left.png', 'margin-wildwood-right.png']
}];
Object.assign(window, {
  BB_BLENDS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/packaging/blends.js", error: String((e && e.message) || e) }); }

__ds_ns.Fleuron = __ds_scope.Fleuron;

__ds_ns.Logomark = __ds_scope.Logomark;

__ds_ns.OrnateFrame = __ds_scope.OrnateFrame;

__ds_ns.Strapline = __ds_scope.Strapline;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Rule = __ds_scope.Rule;

__ds_ns.ScriptQuote = __ds_scope.ScriptQuote;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.AccentFooter = __ds_scope.AccentFooter;

__ds_ns.BenefitList = __ds_scope.BenefitList;

__ds_ns.BlendPanel = __ds_scope.BlendPanel;

__ds_ns.BrewGuide = __ds_scope.BrewGuide;

__ds_ns.IngredientLine = __ds_scope.IngredientLine;

})();

import React from 'react';

export function Fleuron({ width = 200, color = 'var(--rule-hairline)', glyphColor, glyph = '\u2766', style, ...rest }) {
  const rule = { flex: 1, height: 1, background: color };
  return (
    <div {...rest} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-5)', width, ...style }}>
      <span style={rule} />
      <span aria-hidden="true" style={{ font: 'var(--weight-regular) 14px/1 var(--font-body)', color: glyphColor || color }}>{glyph}</span>
      <span style={rule} />
    </div>
  );
}

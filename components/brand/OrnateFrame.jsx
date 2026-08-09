import React from 'react';

export function OrnateFrame({ children, color = 'var(--rule-hairline)', inset = 10, radius = 'var(--radius-sm)', corners = true, style, ...rest }) {
  const ring = (o, op) => ({ position: 'absolute', inset: o, border: '1px solid ' + color, borderRadius: radius, opacity: op, pointerEvents: 'none' });
  return (
    <div {...rest} style={{ position: 'relative', ...style }}>
      <span aria-hidden="true" style={ring(inset, 1)} />
      <span aria-hidden="true" style={ring(inset + 4, 0.55)} />
      {corners && ['nw', 'ne', 'sw', 'se'].map((c) => (
        <span key={c} aria-hidden="true" style={{
          position: 'absolute',
          [c[0] === 'n' ? 'top' : 'bottom']: inset + 11,
          [c[1] === 'w' ? 'left' : 'right']: inset + 11,
          font: 'var(--weight-regular) 11px/1 var(--font-body)', color, pointerEvents: 'none',
        }}>&#10086;</span>
      ))}
      {children}
    </div>
  );
}

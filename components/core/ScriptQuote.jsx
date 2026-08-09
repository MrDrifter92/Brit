import React from 'react';

export function ScriptQuote({ children, lines, size = 30, color = 'currentColor', align = 'center', style, ...rest }) {
  const content = lines || (typeof children === 'string' ? [children] : null);
  return (
    <div {...rest} style={{ font: 'var(--weight-regular) ' + size + 'px/1.15 var(--font-script)', color, textAlign: align, ...style }}>
      {content ? content.map((l, i) => <div key={i}>{l}</div>) : children}
    </div>
  );
}

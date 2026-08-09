import React from 'react';

export function Strapline({ words = ['Nature', 'Intention', 'Nourishment'], size = 13, color = 'currentColor', font = 'serif', style, ...rest }) {
  const stack = font === 'sans'
    ? 'var(--weight-light) ' + size + 'px/1.4 var(--font-sans)'
    : 'var(--weight-regular) ' + size + 'px/1.4 var(--font-body)';
  return (
    <div {...rest} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.9em',
      font: stack, letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color, ...style }}>
      {words.map((w, i) => (
        <React.Fragment key={w}>
          {i > 0 && <span aria-hidden="true" style={{ opacity: 0.7 }}>&middot;</span>}
          <span>{w}</span>
        </React.Fragment>
      ))}
    </div>
  );
}

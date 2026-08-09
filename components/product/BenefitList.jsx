import React from 'react';

export function BenefitList({ items = [], size = 14, color = 'var(--text-body)', marker = '\u2022', style, ...rest }) {
  return (
    <ul {...rest} style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 'var(--space-5)',
      font: 'var(--weight-regular) ' + size + 'px/1.35 var(--font-body)', color, ...style }}>
      {items.map((it) => (
        <li key={it} style={{ display: 'grid', gridTemplateColumns: '0.9em 1fr', gap: '0.5em', alignItems: 'baseline' }}>
          <span aria-hidden="true" style={{ opacity: 0.7 }}>{marker}</span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

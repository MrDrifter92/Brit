import React from 'react';

export function SectionLabel({ children, size = 13, color = 'var(--ink-900)', align = 'center', weight = 600, as = 'h3', style, ...rest }) {
  const Tag = as;
  return (
    <Tag {...rest} style={{ margin: 0, font: weight + ' ' + size + 'px/1.4 var(--font-body)',
      letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color, textAlign: align, ...style }}>{children}</Tag>
  );
}

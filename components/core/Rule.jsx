import React from 'react';

export function Rule({ orientation = 'horizontal', color = 'var(--rule-hairline)', length = '100%', thickness = 1, style, ...rest }) {
  const h = orientation === 'horizontal';
  return (
    <span {...rest} role="separator" aria-orientation={orientation} style={{
      display: 'block', background: color,
      width: h ? length : thickness + 'px', height: h ? thickness + 'px' : length,
      ...style }} />
  );
}

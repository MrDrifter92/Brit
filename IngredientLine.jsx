import React from 'react';

export function IngredientLine({ items = [], size = 15, color = 'var(--text-body)', align = 'center', style, ...rest }) {
  return (
    <p {...rest} style={{ margin: 0, maxWidth: 'var(--measure-label)', marginInline: align === 'center' ? 'auto' : 0,
      font: 'var(--weight-regular) ' + size + 'px/1.45 var(--font-body)', color, textAlign: align, textWrap: 'balance', ...style }}>
      {items.join(', ')}
    </p>
  );
}

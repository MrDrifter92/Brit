import React from 'react';

const SIZES = { sm: 12, md: 16, lg: 24, xl: 34, display: 48 };

export function Wordmark({ size = 'md', color = 'currentColor', as = 'div', align = 'center', style, ...rest }) {
  const Tag = as;
  const px = SIZES[size] || SIZES.md;
  return (
    <Tag {...rest} style={{
      font: 'var(--weight-regular) ' + px + 'px/1.15 var(--font-display)',
      letterSpacing: 'var(--tracking-wordmark)',
      textIndent: 'var(--tracking-wordmark)',
      textTransform: 'uppercase',
      color, textAlign: align, ...style,
    }}>Britanical Blends</Tag>
  );
}

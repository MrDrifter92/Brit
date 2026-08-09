import React from 'react';

export function Badge({ children, tone = 'outline', size = 'md', style, ...rest }) {
  const fs = size === 'sm' ? 10 : 11;
  const tones = {
    outline: { background: 'transparent', color: 'var(--ink-600)', border: '1px solid var(--rule-hairline)' },
    solid: { background: 'var(--accent, var(--wine-700))', color: 'var(--accent-on, var(--paper-100))', border: '1px solid transparent' },
    soft: { background: 'color-mix(in srgb, var(--accent, var(--wine-700)) 14%, var(--paper-100))', color: 'var(--accent-ink, var(--wine-700))', border: '1px solid color-mix(in srgb, var(--accent, var(--wine-700)) 30%, transparent)' },
    quiet: { background: 'var(--paper-200)', color: 'var(--ink-500)', border: '1px solid transparent' },
  };
  return (
    <span {...rest} style={{ display: 'inline-flex', alignItems: 'center',
      padding: size === 'sm' ? '3px 8px' : '5px 11px', borderRadius: 'var(--radius-sm)',
      font: 'var(--weight-regular) ' + fs + 'px/1 var(--font-body)',
      letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', whiteSpace: 'nowrap',
      ...tones[tone], ...style }}>{children}</span>
  );
}

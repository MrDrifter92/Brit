import React from 'react';

export function Card({ children, tone = 'paper', bordered = true, elevated = false, grain = true, padding = 'var(--panel-pad)', radius = 'var(--radius-panel)', style, ...rest }) {
  const tones = {
    paper: { background: 'var(--surface-card)', color: 'var(--text-body)' },
    aged: { background: 'var(--surface-aged)', color: 'var(--text-body)' },
    blush: { background: 'var(--blush-100)', color: 'var(--ink-800)' },
    accent: { background: 'var(--accent, var(--wine-700))', color: 'var(--accent-on, var(--paper-100))' },
    dark: { background: 'var(--surface-inverse)', color: 'var(--text-on-dark)' },
  };
  const t = tones[tone] || tones.paper;
  const dark = tone === 'accent' || tone === 'dark';
  return (
    <div {...rest} style={{
      ...t, padding, borderRadius: radius,
      border: bordered ? '1px solid ' + (dark ? 'color-mix(in srgb, var(--paper-100) 26%, transparent)' : 'var(--border-panel)') : 'none',
      boxShadow: elevated ? 'var(--shadow-card)' : 'none',
      backgroundImage: grain && !dark ? 'var(--texture-grain)' : 'none',
      backgroundSize: grain && !dark ? 'var(--texture-grain-size)' : 'auto',
      ...style }}>{children}</div>
  );
}

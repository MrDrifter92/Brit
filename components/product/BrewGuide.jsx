import React from 'react';

const DEFAULTS = [
  { icon: 'ti-spoon', label: '1 tsp per cup' },
  { icon: 'ti-temperature', label: '100\u00B0C' },
  { icon: 'ti-clock', label: 'Steep 7\u201310 mins' },
];

export function BrewGuide({ steps = DEFAULTS, size = 14, color = 'var(--text-body)', iconSize = 20, style, ...rest }) {
  return (
    <div {...rest} style={{ display: 'grid', gap: 'var(--space-5)',
      font: 'var(--weight-regular) ' + size + 'px/1.35 var(--font-body)', color, ...style }}>
      {steps.map((s) => (
        <div key={s.label} style={{ display: 'grid', gridTemplateColumns: iconSize + 8 + 'px 1fr', gap: 'var(--space-5)', alignItems: 'center' }}>
          <i className={"ti " + s.icon} aria-hidden="true" style={{ fontSize: iconSize, lineHeight: 1, opacity: 0.85 }} />
          <span>{s.label}</span>
        </div>
      ))}
    </div>
  );
}

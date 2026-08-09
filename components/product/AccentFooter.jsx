import React from 'react';
import { Strapline } from '../brand/Strapline.jsx';
import { ScriptQuote } from '../core/ScriptQuote.jsx';

export function AccentFooter({ quote = [], background = 'var(--accent, var(--wine-band))', color = 'var(--accent-on, var(--paper-100))', straplineSize = 12, quoteSize = 30, padding = '18px 24px 24px', style, ...rest }) {
  return (
    <div {...rest} style={{ background, color, padding, display: 'grid', gap: 'var(--space-5)', ...style }}>
      <Strapline size={straplineSize} color={color} style={{ opacity: 0.9 }} />
      {quote.length > 0 && <ScriptQuote lines={quote} size={quoteSize} color={color} />}
    </div>
  );
}

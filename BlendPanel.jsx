import React from 'react';
import { SectionLabel } from '../core/SectionLabel.jsx';
import { BenefitList } from './BenefitList.jsx';
import { BrewGuide } from './BrewGuide.jsx';

export function BlendPanel({ benefits = [], steps, borderColor = 'var(--border-panel)', padding = '18px 16px 20px', style, ...rest }) {
  return (
    <div {...rest} style={{ border: '1px solid ' + borderColor, borderRadius: 'var(--radius-panel)', padding,
      display: 'grid', gridTemplateColumns: '1fr 1px 1fr', gap: 'var(--space-6)', ...style }}>
      <div style={{ display: 'grid', gap: 'var(--space-6)', alignContent: 'start' }}>
        <SectionLabel size={12}>Benefits</SectionLabel>
        <BenefitList items={benefits} size={13} />
      </div>
      <span style={{ background: borderColor }} />
      <div style={{ display: 'grid', gap: 'var(--space-6)', alignContent: 'start' }}>
        <SectionLabel size={12}>Brew guide</SectionLabel>
        <BrewGuide steps={steps} size={13} iconSize={18} />
      </div>
    </div>
  );
}

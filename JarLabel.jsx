const BBj = window.BritanicalBlendsDesignSystem_707ab1 || {};

function JarLabel({ blend, width = 260, assetBase = '../../assets/' }) {
  const motif = { bedtime: 'motif-herbs-colour.png', sunset: 'motif-herbs-wine.png', wildwood: 'motif-herbs-moss.png' }[blend.key];
  return (
    <div data-accent={blend.accent} style={{
      width, background: 'var(--paper-100)', backgroundImage: 'var(--texture-grain)', backgroundSize: 'var(--texture-grain-size)',
      border: '1px solid ' + blend.frame, padding: '16px 14px 14px', position: 'relative',
      display: 'grid', gap: 8, justifyItems: 'center', boxShadow: 'var(--shadow-sm)',
    }}>
      <span aria-hidden="true" style={{ position: 'absolute', inset: 5, border: '1px solid ' + blend.frame, opacity: 0.5, pointerEvents: 'none' }} />
      <BBj.Wordmark size="sm" style={{ fontSize: 10, color: blend.titleColor }} />
      <BBj.Fleuron width={Math.round(width * 0.45)} color={blend.frame} glyphColor={blend.titleColor} />
      <h3 style={{ margin: 0, font: 'var(--weight-regular) 26px/0.95 var(--font-display)', textTransform: 'uppercase', textAlign: 'center', color: blend.titleColor }}>
        {blend.name[0]}<br />{blend.name[1]}
      </h3>
      <img src={assetBase + motif} alt="" aria-hidden="true" style={{ width: '86%', height: 'auto', mixBlendMode: 'multiply', marginTop: 2 }} />
      <p style={{ margin: 0, font: 'var(--weight-regular) 9px/1.45 var(--font-body)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', textAlign: 'center', color: 'var(--ink-700)', maxWidth: '30ch' }}>
        {blend.ingredients.join(', ')}
      </p>
    </div>
  );
}
Object.assign(window, { JarLabel });

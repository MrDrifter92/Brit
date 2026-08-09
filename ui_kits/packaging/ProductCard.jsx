const BBp = window.BritanicalBlendsDesignSystem_707ab1 || {};

function ProductCard({ blend, width = 420, assetBase = '../../assets/', onClick, selected }) {
  const s = width / 420;
  const px = (n) => Math.round(n * s) + 'px';
  const marginW = Math.round(width * 0.135);
  return (
    <article
      data-accent={blend.accent}
      onClick={onClick}
      style={{
        position: 'relative', width, background: 'var(--surface-card)',
        backgroundImage: 'var(--texture-grain)', backgroundSize: 'var(--texture-grain-size)',
        boxShadow: selected ? 'var(--shadow-lifted)' : 'var(--shadow-card)',
        cursor: onClick ? 'pointer' : 'default', overflow: 'hidden',
        transition: 'var(--transition-surface)',
        transform: selected ? 'translateY(-4px)' : 'none',
        display: 'grid', gridTemplateRows: '1fr auto',
      }}
    >
      <img src={assetBase + blend.margins[0]} alt="" aria-hidden="true"
        style={{ position: 'absolute', left: 0, top: '26%', width: marginW, height: 'auto', mixBlendMode: 'multiply', opacity: 0.88, pointerEvents: 'none', maskImage: 'linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent)' }} />
      <img src={assetBase + blend.margins[1]} alt="" aria-hidden="true"
        style={{ position: 'absolute', right: 0, top: '26%', width: Math.round(marginW * 0.93), height: 'auto', mixBlendMode: 'multiply', opacity: 0.88, pointerEvents: 'none', maskImage: 'linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent)' }} />

      <span aria-hidden="true" style={{ position: 'absolute', inset: px(9), border: '1px solid ' + blend.frame, pointerEvents: 'none' }} />
      <span aria-hidden="true" style={{ position: 'absolute', inset: px(13), border: '1px solid ' + blend.frame, opacity: 0.5, pointerEvents: 'none' }} />

      <div style={{ position: 'relative', padding: px(30) + ' ' + px(28) + ' ' + px(22), display: 'grid', gap: px(14), justifyItems: 'center' }}>
        <BBp.Wordmark size="sm" style={{ fontSize: px(14), color: blend.titleColor, opacity: 0.92 }} />
        <BBp.Fleuron width={Math.round(width * 0.44)} color={blend.frame} glyphColor={blend.titleColor} style={{ marginTop: px(-2) }} />
        <h2 style={{ margin: px(6) + ' 0 0', font: 'var(--weight-regular) ' + px(46) + '/0.94 var(--font-display)', textTransform: 'uppercase', textAlign: 'center', color: blend.titleColor, letterSpacing: 'var(--tracking-display)' }}>
          {blend.name[0]}<br />{blend.name[1]}
        </h2>
        <p style={{ margin: 0, font: 'var(--weight-regular) ' + px(14) + '/1.4 var(--font-body)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', textAlign: 'center', color: 'var(--ink-700)' }}>
          {blend.subtitle[0]}<br />{blend.subtitle[1]}
        </p>

        <div style={{ display: 'grid', gap: px(8), justifyItems: 'center', marginTop: px(10) }}>
          <BBp.SectionLabel size={Math.round(12 * s)}>About this blend</BBp.SectionLabel>
          <p style={{ margin: 0, maxWidth: '30ch', font: 'var(--weight-regular) ' + px(13) + '/1.5 var(--font-body)', textAlign: 'center', textWrap: 'balance', color: 'var(--ink-800)' }}>{blend.about}</p>
        </div>

        <div style={{ display: 'grid', gap: px(8), justifyItems: 'center', marginTop: px(14) }}>
          <BBp.SectionLabel size={Math.round(12 * s)}>Ingredients</BBp.SectionLabel>
          <BBp.IngredientLine items={blend.ingredients} size={Math.round(13 * s)} style={{ maxWidth: '30ch' }} />
        </div>

        <BBp.BlendPanel benefits={blend.benefits} borderColor={blend.frame}
          padding={px(14) + ' ' + px(12) + ' ' + px(16)}
          style={{ width: '100%', marginTop: px(18), fontSize: px(12) }} />
      </div>

      <div style={{ background: blend.band, color: blend.bandInk, padding: px(14) + ' ' + px(16) + ' ' + px(18), display: 'grid', gap: px(8), position: 'relative' }}>
        <BBp.Strapline size={Math.round(11 * s)} color={blend.bandInk} style={{ opacity: 0.92 }} />
        <BBp.ScriptQuote lines={blend.quote} size={Math.round(27 * s)} color={blend.bandInk} />
      </div>
    </article>
  );
}
Object.assign(window, { ProductCard });

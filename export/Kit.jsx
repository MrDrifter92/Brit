const K = window.BritanicalBlendsDesignSystem_707ab1 || {};
const RES = { 'margin-bedtime-left.png': 'mBedtimeL', 'margin-bedtime-right.png': 'mBedtimeR', 'margin-sunset-left.png': 'mSunsetL', 'margin-sunset-right.png': 'mSunsetR', 'margin-wildwood-left.png': 'mWildwoodL', 'margin-wildwood-right.png': 'mWildwoodR', 'motif-herbs-colour.png': 'motifColour', 'motif-herbs-wine.png': 'motifWine', 'motif-herbs-moss.png': 'motifMoss', 'logo-roundel.png': 'logoRoundel', 'photo-table-interior.jpg': 'photoInterior', 'photo-lineup-cards.jpg': 'photoLineup' };
const res = (name) => (window.__resources || {})[RES[name]] || ('../assets/' + name);
const MOTIF = { bedtime: 'motif-herbs-colour.png', sunset: 'motif-herbs-wine.png', wildwood: 'motif-herbs-moss.png' };

function ProductCard({ blend, width = 420, onClick, selected }) {
  const s = width / 420;
  const px = (n) => Math.round(n * s) + 'px';
  const marginW = Math.round(width * 0.135);
  const mask = 'linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent)';
  return (
    <article data-accent={blend.accent} onClick={onClick} style={{
      position: 'relative', width, background: 'var(--surface-card)',
      backgroundImage: 'var(--texture-grain)', backgroundSize: 'var(--texture-grain-size)',
      boxShadow: selected ? 'var(--shadow-lifted)' : 'var(--shadow-card)',
      cursor: onClick ? 'pointer' : 'default', overflow: 'hidden',
      transition: 'var(--transition-surface)', transform: selected ? 'translateY(-4px)' : 'none',
      display: 'grid', gridTemplateRows: '1fr auto',
    }}>
      <img src={res(blend.margins[0])} alt="" aria-hidden="true" style={{ position: 'absolute', left: 0, top: '26%', width: marginW, height: 'auto', mixBlendMode: 'multiply', opacity: 0.88, pointerEvents: 'none', maskImage: mask, WebkitMaskImage: mask }} />
      <img src={res(blend.margins[1])} alt="" aria-hidden="true" style={{ position: 'absolute', right: 0, top: '26%', width: Math.round(marginW * 0.93), height: 'auto', mixBlendMode: 'multiply', opacity: 0.88, pointerEvents: 'none', maskImage: mask, WebkitMaskImage: mask }} />
      <span aria-hidden="true" style={{ position: 'absolute', inset: px(9), border: '1px solid ' + blend.frame, pointerEvents: 'none' }} />
      <span aria-hidden="true" style={{ position: 'absolute', inset: px(13), border: '1px solid ' + blend.frame, opacity: 0.5, pointerEvents: 'none' }} />
      <div style={{ position: 'relative', padding: px(30) + ' ' + px(28) + ' ' + px(22), display: 'grid', gap: px(14), justifyItems: 'center' }}>
        <K.Wordmark size="sm" style={{ fontSize: px(14), color: blend.titleColor, opacity: 0.92 }} />
        <K.Fleuron width={Math.round(width * 0.44)} color={blend.frame} glyphColor={blend.titleColor} style={{ marginTop: px(-2) }} />
        <h2 style={{ margin: px(6) + ' 0 0', font: 'var(--weight-regular) ' + px(46) + '/0.94 var(--font-display)', textTransform: 'uppercase', textAlign: 'center', color: blend.titleColor, letterSpacing: 'var(--tracking-display)' }}>{blend.name[0]}<br />{blend.name[1]}</h2>
        <p style={{ margin: 0, font: 'var(--weight-regular) ' + px(14) + '/1.4 var(--font-body)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', textAlign: 'center', color: 'var(--ink-700)' }}>{blend.subtitle[0]}<br />{blend.subtitle[1]}</p>
        <div style={{ display: 'grid', gap: px(8), justifyItems: 'center', marginTop: px(10) }}>
          <K.SectionLabel size={Math.round(12 * s)}>About this blend</K.SectionLabel>
          <p style={{ margin: 0, maxWidth: '30ch', font: 'var(--weight-regular) ' + px(13) + '/1.5 var(--font-body)', textAlign: 'center', textWrap: 'balance', color: 'var(--ink-800)' }}>{blend.about}</p>
        </div>
        <div style={{ display: 'grid', gap: px(8), justifyItems: 'center', marginTop: px(14) }}>
          <K.SectionLabel size={Math.round(12 * s)}>Ingredients</K.SectionLabel>
          <K.IngredientLine items={blend.ingredients} size={Math.round(13 * s)} style={{ maxWidth: '30ch' }} />
        </div>
        <K.BlendPanel benefits={blend.benefits} borderColor={blend.frame} padding={px(14) + ' ' + px(12) + ' ' + px(16)} style={{ width: '100%', marginTop: px(18), fontSize: px(12) }} />
      </div>
      <div style={{ background: blend.band, color: blend.bandInk, padding: px(14) + ' ' + px(16) + ' ' + px(18), display: 'grid', gap: px(8), position: 'relative' }}>
        <K.Strapline size={Math.round(11 * s)} color={blend.bandInk} style={{ opacity: 0.92 }} />
        <K.ScriptQuote lines={blend.quote} size={Math.round(27 * s)} color={blend.bandInk} />
      </div>
    </article>
  );
}

function JarLabel({ blend, width = 260 }) {
  return (
    <div data-accent={blend.accent} style={{ width, background: 'var(--paper-100)', backgroundImage: 'var(--texture-grain)', backgroundSize: 'var(--texture-grain-size)', border: '1px solid ' + blend.frame, padding: '16px 14px 14px', position: 'relative', display: 'grid', gap: 8, justifyItems: 'center', boxShadow: 'var(--shadow-sm)' }}>
      <span aria-hidden="true" style={{ position: 'absolute', inset: 5, border: '1px solid ' + blend.frame, opacity: 0.5, pointerEvents: 'none' }} />
      <K.Wordmark size="sm" style={{ fontSize: 10, color: blend.titleColor }} />
      <K.Fleuron width={Math.round(width * 0.45)} color={blend.frame} glyphColor={blend.titleColor} />
      <h3 style={{ margin: 0, font: 'var(--weight-regular) 26px/0.95 var(--font-display)', textTransform: 'uppercase', textAlign: 'center', color: blend.titleColor }}>{blend.name[0]}<br />{blend.name[1]}</h3>
      <img src={res(MOTIF[blend.key])} alt="" aria-hidden="true" style={{ width: '86%', height: 'auto', mixBlendMode: 'multiply', marginTop: 2 }} />
      <p style={{ margin: 0, font: 'var(--weight-regular) 9px/1.45 var(--font-body)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', textAlign: 'center', color: 'var(--ink-700)', maxWidth: '30ch' }}>{blend.ingredients.join(', ')}</p>
    </div>
  );
}

function RangeTile({ blend }) {
  const [hover, setHover] = React.useState(false);
  return (
    <article data-accent={blend.accent} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ background: 'var(--surface-card)', backgroundImage: 'var(--texture-grain)', backgroundSize: 'var(--texture-grain-size)', border: '1px solid ' + blend.frame, padding: '30px 26px 26px', display: 'grid', gap: 14, justifyItems: 'center', boxShadow: hover ? 'var(--shadow-card)' : 'var(--shadow-xs)', transform: hover ? 'translateY(-3px)' : 'none', transition: 'var(--transition-surface)' }}>
      <h3 style={{ margin: 0, font: 'var(--weight-regular) 34px/0.95 var(--font-display)', textTransform: 'uppercase', textAlign: 'center', color: blend.titleColor }}>{blend.name[0]}<br />{blend.name[1]}</h3>
      <p style={{ margin: 0, font: 'var(--weight-regular) 12px/1.4 var(--font-body)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', textAlign: 'center', color: 'var(--ink-700)' }}>{blend.subtitle[0]}<br />{blend.subtitle[1]}</p>
      <img src={res(MOTIF[blend.key])} alt="" aria-hidden="true" style={{ width: '92%', height: 'auto', mixBlendMode: 'multiply', margin: '2px 0' }} />
      <K.SectionLabel size={11}>Ingredients</K.SectionLabel>
      <K.IngredientLine items={blend.ingredients} size={13} />
      <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
        <K.Badge tone="soft">Loose leaf</K.Badge>
        <K.Badge tone="outline">50g</K.Badge>
      </div>
      <K.Button variant="accent" size="sm" style={{ marginTop: 8 }}>Add to basket</K.Button>
    </article>
  );
}

function HeroBanner({ children }) {
  return (
    <section style={{ position: 'relative', height: 430, display: 'grid', placeItems: 'center', background: 'url(' + res('photo-table-interior.jpg') + ') center/cover no-repeat', overflow: 'hidden' }}>
      <span aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, color-mix(in srgb, var(--ink-900) 26%, transparent), color-mix(in srgb, var(--ink-900) 8%, transparent) 55%, color-mix(in srgb, var(--ink-900) 34%, transparent))' }} />
      <div style={{ position: 'relative', display: 'grid', gap: 14, justifyItems: 'center', padding: 40, textAlign: 'center' }}>
        <K.Wordmark size="display" color="var(--paper-50)" style={{ textShadow: '0 2px 24px rgba(30,26,20,.45)' }} />
        <K.Strapline font="sans" size={17} color="var(--paper-50)" style={{ textShadow: '0 1px 14px rgba(30,26,20,.5)' }} />
        {children}
      </div>
    </section>
  );
}
Object.assign(window, { ProductCard, JarLabel, RangeTile, HeroBanner, bbRes: res });

const BBr = window.BritanicalBlendsDesignSystem_707ab1 || {};

function RangeTile({ blend, assetBase = '../../assets/' }) {
  const [hover, setHover] = React.useState(false);
  const motif = { bedtime: 'motif-herbs-colour.png', sunset: 'motif-herbs-wine.png', wildwood: 'motif-herbs-moss.png' }[blend.key];
  return (
    <article data-accent={blend.accent}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        background: 'var(--surface-card)', backgroundImage: 'var(--texture-grain)', backgroundSize: 'var(--texture-grain-size)',
        border: '1px solid ' + blend.frame, padding: '30px 26px 26px', display: 'grid', gap: 14, justifyItems: 'center',
        boxShadow: hover ? 'var(--shadow-card)' : 'var(--shadow-xs)',
        transform: hover ? 'translateY(-3px)' : 'none', transition: 'var(--transition-surface)',
      }}>
      <h3 style={{ margin: 0, font: 'var(--weight-regular) 34px/0.95 var(--font-display)', textTransform: 'uppercase', textAlign: 'center', color: blend.titleColor }}>
        {blend.name[0]}<br />{blend.name[1]}
      </h3>
      <p style={{ margin: 0, font: 'var(--weight-regular) 12px/1.4 var(--font-body)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', textAlign: 'center', color: 'var(--ink-700)' }}>
        {blend.subtitle[0]}<br />{blend.subtitle[1]}
      </p>
      <img src={assetBase + motif} alt="" aria-hidden="true" style={{ width: '92%', height: 'auto', mixBlendMode: 'multiply', margin: '2px 0' }} />
      <BBr.SectionLabel size={11}>Ingredients</BBr.SectionLabel>
      <BBr.IngredientLine items={blend.ingredients} size={13} />
      <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
        <BBr.Badge tone="soft">Loose leaf</BBr.Badge>
        <BBr.Badge tone="outline">50g</BBr.Badge>
      </div>
      <BBr.Button variant="accent" size="sm" style={{ marginTop: 8 }}>Add to basket</BBr.Button>
    </article>
  );
}

function RangeStrip({ blends }) {
  return (
    <section style={{ display: 'grid', gap: 30, justifyItems: 'center' }}>
      <BBr.SectionLabel size={13}>Our blends</BBr.SectionLabel>
      <BBr.Fleuron width={220} glyphColor="var(--bark-600)" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 26, width: '100%' }}>
        {blends.map((b) => <RangeTile key={b.key} blend={b} />)}
      </div>
    </section>
  );
}
Object.assign(window, { RangeStrip, RangeTile });

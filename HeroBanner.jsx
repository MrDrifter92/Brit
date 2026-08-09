const BBh = window.BritanicalBlendsDesignSystem_707ab1 || {};

function HeroBanner({ image = '../../assets/photo-table-interior.jpg', height = 460, align = 'center', children }) {
  return (
    <section style={{
      position: 'relative', height, display: 'grid', placeItems: align === 'center' ? 'center' : 'end start',
      background: 'url(' + image + ') center/cover no-repeat', overflow: 'hidden',
    }}>
      <span aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, color-mix(in srgb, var(--ink-900) 26%, transparent), color-mix(in srgb, var(--ink-900) 8%, transparent) 55%, color-mix(in srgb, var(--ink-900) 34%, transparent))',
      }} />
      <div style={{ position: 'relative', display: 'grid', gap: 14, justifyItems: 'center', padding: 40, textAlign: 'center' }}>
        <BBh.Wordmark size="display" color="var(--paper-50)" style={{ textShadow: '0 2px 24px rgba(30,26,20,.45)' }} />
        <BBh.Strapline font="sans" size={17} color="var(--paper-50)" style={{ textShadow: '0 1px 14px rgba(30,26,20,.5)' }} />
        {children}
      </div>
    </section>
  );
}
Object.assign(window, { HeroBanner });

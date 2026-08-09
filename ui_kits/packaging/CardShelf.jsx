function CardShelf({ blends, selected, onSelect, cardWidth = 300 }) {
  return (
    <div style={{ display: 'flex', gap: 26, alignItems: 'flex-start', justifyContent: 'center' }}>
      {blends.map((b) => (
        <ProductCard key={b.key} blend={b} width={cardWidth} selected={selected === b.key} onClick={() => onSelect(b.key)} />
      ))}
    </div>
  );
}
Object.assign(window, { CardShelf });

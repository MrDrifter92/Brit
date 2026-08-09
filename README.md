# Packaging UI kit

Recreates the surface the brand actually ships: the printed product information card
(one per blend) and the jar label that wraps the glass.

## Source of truth

`uploads/IMG_5203.jpg` — the three-panel product card photograph. Every string in
`blends.js` is transcribed verbatim from it. `uploads/IMG_5204.PNG`,
`uploads/Egyptian Sunset 2.PNG` and `uploads/copy_8A3834A2-…JPEG` supply the
single-blend label artwork and the hanging-herb motif.

## Files

| File | What it is |
| --- | --- |
| `index.html` | Interactive view: the range, then a per-blend detail with jar label |
| `blends.js` | The three blends — names, copy, ingredients, benefits, accent colours |
| `ProductCard.jsx` | The full info card. Scales from a single `width` prop |
| `JarLabel.jsx` | The short label applied to the jar |
| `CardShelf.jsx` | Three cards side by side, click to open |

## Card anatomy, top to bottom

1. Double hairline frame, tinted with the blend accent
2. Wordmark (14px at a 420px card, 0.34em tracking)
3. Fleuron divider, 44% of card width
4. Product name — Cormorant Garamond caps, two lines, 0.94 leading
5. Subtitle — letterspaced caps, two lines
6. ABOUT THIS BLEND + centred body on a 30ch measure
7. INGREDIENTS + comma-separated run
8. `BlendPanel` — the only rounded rectangle on the card
9. Full-bleed accent band: strapline over the handwritten sign-off

Botanical engravings bleed off the left and right edges behind the type, set in
`mix-blend-mode: multiply` so they sit on the cream rather than on a white plate.

## Not recreated

The banana/chamomile colourway of the hanging-herb motif was not supplied at usable
resolution; `JarLabel` falls back to the full-colour motif for that blend.

# Marketing UI kit

The brand's non-packaging surfaces: the lifestyle banner lockup, a three-up range
strip, and the roundel sign-off. Everything here already exists in the supplied
material — this kit assembles it, it does not invent a website.

## Source of truth

- `uploads/Egyptian Sunset 3.PNG` — wordmark + strapline centred over a warm,
  shallow-depth interior photograph. Reproduced by `HeroBanner`.
- `uploads/IMG_5202.jpg`, `uploads/copy_FDC94FED-….jpg` — the jar lineup with the
  cards standing behind. Used directly as imagery.
- `uploads/IMG_5203.jpg` — product copy, reused through `../packaging/blends.js`.

## Files

| File | What it is |
| --- | --- |
| `index.html` | Banner, range strip, editorial split, roundel sign-off |
| `HeroBanner.jsx` | Full-bleed photograph, protection gradient, centred lockup |
| `RangeStrip.jsx` | `RangeTile` (one blend) and the three-up `RangeStrip` |

## Rules this kit follows

- The wordmark over photography is always cream (`--paper-50`) with a soft text
  shadow, never a solid plate.
- Protection gradient: dark at top and bottom, near-clear through the middle, mixed
  from `--ink-900` so it stays warm.
- The strapline switches to Jost Light over photography and back to the body serif
  on paper.
- Tiles lift 3px on hover onto `--shadow-card`. Nothing scales, nothing bounces.

## Deliberately absent

There is no navigation bar, basket, account area, checkout or footer in the supplied
material, so none has been designed. If a storefront is being built, brief it
separately rather than copying an invented layout from here.

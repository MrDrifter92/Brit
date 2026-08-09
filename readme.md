# Britanical Blends — Design System

Britanical Blends is a small-batch loose-leaf herbal tea maker. Three blends are in
market, sold in screw-top glass jars with a printed information card standing behind
each one. The brand's whole visual argument is *old apothecary, gently kept*: aged
cream paper, botanical engravings, a classical serif, and one saturated colour per
blend.

The strapline, which appears on every surface, is **NATURE · INTENTION · NOURISHMENT**.

## The range

| Blend | Character | Accent | Ingredients |
| --- | --- | --- | --- |
| Banana Bedtime Tea | A gentle, calming blend for restful nights | Wheat `#CBB18C` | Banana, Banana Peel, Chamomile, Cinnamon Bark, Vanilla Bean |
| Egyptian Sunset | A floral, fruity blend to uplift & inspire | Wine `#6E3B3C` | Hibiscus, Blue Lotus, Rose Petals, Orange Peel |
| Wildwood Elixir | An earthy, herbal blend for vitality & balance | Moss `#5F6248` | Nettle, Peppermint, Cats Claw, Licorice Root, Ginger Root |

## Sources this system was built from

Everything here derives from a set of brand images supplied by the client. There was
**no codebase, no Figma file and no website** — the attached folder `brit/` contained
the same seventeen images as `uploads/`, and no source code.

| File | What it gave us |
| --- | --- |
| `uploads/IMG_5203.jpg` | The three printed product cards. **The colour palette is sampled from this image**, and all product copy is transcribed from it verbatim |
| `uploads/4A85C33D-…PNG` | The circular roundel logo (cream field, double hairline, leaf fleurons) |
| `uploads/IMG_5202.jpg` | Jar lineup hero with the wordmark lockup |
| `uploads/IMG_5204.PNG`, `uploads/IMG_5191.jpg` | Egyptian Sunset label, two colourways |
| `uploads/Egyptian Sunset 2.PNG` | Wildwood Elixir label on parchment |
| `uploads/Egyptian Sunset.PNG` | Hanging-herb motif, full colour on white |
| `uploads/copy_8A3834A2-…JPEG` | Wildwood Elixir label, green colourway |
| `uploads/Egyptian Sunset 3.PNG` | Lifestyle banner: wordmark + strapline over a warm interior |
| `uploads/copy_268DDBCE-…jpg`, `copy_CEB8EA3D-…jpg`, `copy_FDC94FED-…jpg`, `copy_23F315CD-…jpg`, `copy_2C8E7D0C-…jpg`, `copy_0B8598EF-…JPEG`, `copy_7067B672-…JPEG` | Lifestyle and product photography |

`uploads/IMG_5215.png` could not be decoded and was not used.

Two of the supplied lifestyle images carry a visible **CapCut AI** watermark
(`copy_0B8598EF-…JPEG`, `copy_7067B672-…JPEG`); they were not copied into `assets/`.

---

## Content fundamentals

**Voice.** Calm, plain, faintly herbalist. The brand describes what a blend does and
stops. There is no hype, no exclamation, no urgency, no second-person selling.

**Person.** Copy is written in the third person about the blend, not about the
customer — *"A soothing, naturally sweet blend designed to relax the body and quiet
the mind."* The only second-person moments are possessive and gentle: *"support your
body's natural defences"*, *"Made for you."*

**Casing.** Heavily systematised, and it carries most of the brand's formality:

- Wordmark and strapline: **ALL CAPS**, wide tracking, always.
- Product names: **ALL CAPS**, two lines, large.
- Product subtitles: **ALL CAPS**, smaller, two lines — *"A FLORAL, FRUITY BLEND / TO UPLIFT & INSPIRE"*.
- Section headings: **ALL CAPS** — ABOUT THIS BLEND, INGREDIENTS, BENEFITS, BREW GUIDE.
- Body copy: sentence case, full stops.
- Ingredients: **Title Case**, comma separated — *Hibiscus, Blue Lotus, Rose Petals, Orange Peel*.
- Benefits: sentence case, **no full stop** — *Supports restful sleep*.
- Sign-off: sentence case, full stops, handwritten.

**Sentence length.** Body paragraphs are two sentences, ~35 words total. Benefits are
two to four words each, four per card. Nothing longer has been written anywhere.

**Ampersands** are used freely in short phrases — *"to uplift & inspire"*,
*"Energising & grounding"*, *"Naturally sweet & comforting"*.

**Spelling is British.** *defences*, *Energising*, *Anti-inflammatory*. Note the
label's own house spellings, which are kept as printed: *Cats Claw* (no apostrophe),
*Licorice Root* (not liquorice).

**Numbers.** Metric, with proper glyphs: *100°C*, *Steep 7–10 mins* (en dash),
*1 tsp per cup*.

**Emoji: never.** Not on packaging, not in marketing, not in UI. The decorative
register is typographic ornament (❦) and botanical engraving.

**Sign-offs.** Each blend closes with one handwritten line or couplet, in the accent
band:

- Banana Bedtime Tea — *Sip slow. Dream deep.*
- Egyptian Sunset — *Breathe in beauty. Sip in the sunset.*
- Wildwood Elixir — *Rooted in nature. Made for you.*

Health claims are only ever the ones already printed on the packaging. Do not write a
new one.

---

## Visual foundations

### Colour

The palette was sampled directly from the printed product cards. Three families do
the work — a cream paper range, a warm ink/brown range, and one saturated accent per
blend. Full ramps are in `tokens/colors.css`; use the semantic aliases, not the raw
steps.

- **Paper** `--paper-50 #FDFAF3` → `--paper-500 #CDBF9E`, plus `--blush-100 #F8E8D0`
  (the roundel's warmer cream). Backgrounds are always cream, never white.
- **Ink** `--ink-900 #1E1A14` → `--ink-200 #D2C6AF`. Warm blacks — there is no neutral
  grey anywhere in this system.
- **Bark** `--bark-700 #604028` is the logo brown: ornament, hairlines, primary button.
- **Accents** — wine `#682830` / `#6E3B3C`, moss `#203830` / `#5F6248`, wheat `#CBB18C`,
  with sage `#B0C0A0` as the one light support colour.

Product colour is applied through a scope, not per component:

```html
<div data-accent="sunset"> … </div>   <!-- bedtime | sunset | wildwood -->
```

Everything inside then reads `--accent`, `--accent-ink` and `--accent-on`.

**One accent per surface.** A card, a tile or a page belongs to a single blend. The
only place all three appear together is a range view, and there they are separated by
the card edges.

### Type

Four faces, each with one job.

| Role | Face | Where |
| --- | --- | --- |
| Display | Cormorant Garamond 400 | Product names, wordmark, large headlines |
| Body | EB Garamond 400/600 | All body copy, section headings, ingredients, benefits |
| Sans | Jost 200–400 | Strapline over photography only |
| Script | Sacramento | The one handwritten sign-off per surface |

Tracking is the signature. `--tracking-wordmark` is **0.34em** and is never tightened;
`--tracking-caps` 0.18em covers section headings and straplines; `--tracking-eyebrow`
0.12em covers product subtitles. Product names run at **0.92–0.95 line-height** so the
two lines almost touch. Body copy sits at 1.62 on a 34ch measure on packaging, 62ch on
screen, and is centred on packaging, ranged left on screen.

⚠️ **No font binaries were supplied.** All four faces are close Google Fonts
substitutions matched by eye to the artwork. If you hold the originals, drop the files
into `assets/fonts/` and replace the `@import` in `tokens/fonts.css` with real
`@font-face` rules.

### Backgrounds, texture and imagery

Surfaces are **aged cream paper**, not white and not gradient. `--texture-grain` is a
two-layer dot pattern applied at very low contrast over cream; `--surface-aged`
`#E8E0C8` is the heavier parchment used on secondary panels.

Photography is one consistent look: **warm tungsten interiors, shallow depth of field,
golden bokeh, dark wood surfaces**. Everything is lit at dusk. There is no cool light,
no daylight white balance, no black and white, and no visible grain filter. Imagery is
full-bleed when it appears; product photography is always shot on the same wooden
table.

Botanical **engravings** are the recurring illustration: fine-line, single-colour
line art tinted to the blend accent, bleeding off the left and right card edges behind
the type. They are composited with `mix-blend-mode: multiply` so they sit *in* the
paper. No gradients, no photographic cut-outs, no drawn illustration in any other
style.

### Borders, frames, corners

- **Double hairline frame** at 1px, with the inner ring at ~55% opacity, inset 9–13px
  from the surface edge, plus a leaf ornament (❦) at each corner. This is the single
  strongest brand signal.
- Corners are **square** almost everywhere. The one exception is the BENEFITS / BREW
  GUIDE panel at `--radius-panel` **14px**. Buttons and badges use 3px, which reads as
  square at a glance. Only the roundel is circular.
- Rules are always 1px. A 2px rule reads as a border and fights the frame.

### Shadow

Warm and low, mixed from `--bark-800` — never black, never blue. `--shadow-card` is
the working default for anything that floats; `--shadow-lifted` for a selected card.
Packaging itself is flat: the printed card has no shadow, only the photograph of it
does. There are no inner shadows other than `--shadow-inset-press`.

### Transparency and blur

Used sparingly and only for legibility. The one sanctioned pattern is the **protection
gradient** on hero photography: `--ink-900` at ~26% at the top, near-clear through the
middle, ~34% at the foot, so cream type stays readable. Backdrop blur is not used
anywhere. Type over photography is never given a solid plate or a capsule — the
gradient does the work.

### Motion

Unhurried, and there is very little of it. Colour transitions run `--dur-fast` 140ms;
surfaces run `--dur-base` 240ms. `--ease-standard` is `cubic-bezier(.22,.61,.36,1)` —
a gentle decelerate. **No bounce, no spring, no overshoot, no scale-in.** Fades and
translations of a few pixels only.

### States

- **Hover** — darken one step (`--bark-700` → `--bark-800`); tiles lift 3px onto
  `--shadow-card`. Never lighten, never change hue.
- **Press** — `translateY(1px)`, no scale.
- **Disabled** — 42% opacity, `not-allowed`.
- **Focus** — 2px `--focus-ring` (wine) at 3px offset. Always visible.

### Layout

Centred, symmetrical and generous. Packaging is a single centred column with a 34ch
measure. Screen layouts run to `--width-page` 1280px with 40px gutters. Nothing is
sticky, nothing is fixed to the viewport, there is no floating action button. The
accent band always spans the full card width, edge to edge, with no radius — inset it
and the card stops reading as packaging.

---

## Iconography

The brand has **no icon system of its own** and no icon font in the supplied material.
Icons appear in exactly one place: the BREW GUIDE column of a product card, where a
spoon, a thermometer and a clock sit beside three lines of text. They are thin,
single-weight, rounded-terminal line icons at roughly 1.5px stroke on a 24px box.

**Substitution (flagged):** those three glyphs are supplied here by
[Tabler Icons](https://tabler.io/icons) via CDN — the closest freely available match
for stroke weight and terminal shape. Load it on any page that renders `BrewGuide`:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.31.0/dist/tabler-icons.min.css">
```

Used: `ti-spoon`, `ti-temperature`, `ti-clock`. If Britanical Blends holds the
original icon artwork, replace the webfont with those SVGs.

Beyond that, the brand's decorative marks are **typographic, not iconographic**:

- `❦` (U+2766) — the fleuron in the centre of every divider; `❧` and `✦` are seen as
  alternates.
- `❮`-style leaf ornaments at frame corners (U+2766 rotated by position).
- `·` middot — the strapline separator. Never a bullet, never a slash.
- `•` — bullet in the BENEFITS list only.

**No emoji, ever.** Do not substitute one for a missing icon; leave the slot empty and
flag it.

Botanical engravings are imagery, not iconography — they live in `assets/` as raster
crops from the original artwork and must never be redrawn as SVG.

### Logo

The roundel (`assets/logo-roundel.png`) is the only mark. It is a **supplied raster
asset** and is never redrawn, recoloured or reconstructed in code. Where a mark is
needed at small size, set the name in type via `<Wordmark />` instead. Minimum roundel
size is 64px.

---

## Index

### Root

| File | What it is |
| --- | --- |
| `readme.md` | This document |
| `SKILL.md` | Agent Skills front-matter, for using this system in Claude Code |
| `styles.css` | The single entry point consumers link. `@import` lines only |
| `thumbnail.html` | Homepage tile for the system |

### Tokens — `tokens/`

`fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `radius.css` ·
`elevation.css` · `motion.css` · `base.css`

### Components — `components/`

**`brand/`** — `Wordmark`, `Logomark`, `Strapline`, `Fleuron`, `OrnateFrame`

**`core/`** — `Button`, `Badge`, `Card`, `SectionLabel`, `Rule`, `ScriptQuote`

**`product/`** — `BlendPanel`, `BenefitList`, `BrewGuide`, `IngredientLine`, `AccentFooter`

Each component ships `<Name>.jsx`, `<Name>.d.ts` and `<Name>.prompt.md`; each
directory has one `@dsCard` HTML showing its states.

**Intentional additions.** No component library existed in the supplied material, so
this inventory was authored from the packaging itself. Every component maps to
something printed on a card or a label — `BlendPanel`, `AccentFooter`, `Fleuron`,
`OrnateFrame`, `ScriptQuote`, `IngredientLine`, `BenefitList` and `BrewGuide` are all
literal parts of the product card. `Button` and `Badge` have **no counterpart in the
source** and are inferred; treat their styling as a proposal, not as brand law.

### Foundations — `guidelines/`

Twenty-one specimen cards across four groups: Colors (7), Type (7), Spacing (2),
Brand (5). These populate the Design System tab.

### UI kits — `ui_kits/`

| Kit | What it recreates |
| --- | --- |
| `packaging/` | The printed product information card and jar label, all three blends, interactive |
| `marketing/` | The lifestyle banner lockup, three-up range strip and roundel sign-off |

No storefront, app or checkout kit exists, because no such surface was supplied.

### Assets — `assets/`

Roundel logo · three hanging-herb motif colourways · six botanical margin engravings
(left/right × three blends) · four label artworks · five lifestyle and product
photographs.

/**
 * Ornamental divider: a hairline rule broken by a centred typographic fleuron.
 * Separates the wordmark from the product name on every label.
 * @startingPoint section="Brand" subtitle="Hairline rule with centre ornament" viewport="700x100"
 */
export interface FleuronProps {
  /** Total width in px, or any CSS length. @default 200 */
  width?: number | string;
  /** Rule colour. @default "var(--rule-hairline)" */
  color?: string;
  /** Ornament colour; falls back to color. */
  glyphColor?: string;
  /** Unicode ornament. @default "❦" */
  glyph?: string;
  style?: React.CSSProperties;
}
export declare function Fleuron(props: FleuronProps): JSX.Element;

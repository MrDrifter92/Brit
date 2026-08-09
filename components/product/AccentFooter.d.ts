/**
 * The solid colour band that closes a product card: strapline over a
 * handwritten sign-off, in the blend's accent colour.
 * @startingPoint section="Product" subtitle="Coloured band, strapline and sign-off" viewport="700x180"
 */
export interface AccentFooterProps {
  /** One or two lines of handwritten sign-off. */
  quote?: string[];
  /** Band fill. @default "var(--accent, var(--wine-band))" */
  background?: string;
  color?: string;
  /** px. @default 12 */
  straplineSize?: number;
  /** px. @default 30 */
  quoteSize?: number;
  padding?: string;
  style?: React.CSSProperties;
}
export declare function AccentFooter(props: AccentFooterProps): JSX.Element;

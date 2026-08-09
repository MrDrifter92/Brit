/**
 * The bulleted BENEFITS column on a product card — four short, unhyped claims.
 * @startingPoint section="Product" subtitle="Bulleted benefit claims" viewport="700x200"
 */
export interface BenefitListProps {
  /** Four items is the house length. Sentence case, no full stops. */
  items?: string[];
  /** px. @default 14 */
  size?: number;
  color?: string;
  /** Bullet glyph. @default "•" */
  marker?: string;
  style?: React.CSSProperties;
}
export declare function BenefitList(props: BenefitListProps): JSX.Element;

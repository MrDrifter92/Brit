/**
 * The two-column rounded panel near the foot of every product card: BENEFITS
 * on the left, BREW GUIDE on the right, split by a hairline.
 * @startingPoint section="Product" subtitle="Benefits and brew guide, two columns" viewport="700x260"
 */
export interface BlendPanelProps {
  benefits?: string[];
  /** Overrides the house brew guide. */
  steps?: { icon: string; label: string }[];
  borderColor?: string;
  padding?: string;
  style?: React.CSSProperties;
}
export declare function BlendPanel(props: BlendPanelProps): JSX.Element;

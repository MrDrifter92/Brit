/**
 * The double-hairline border with leaf corner ornaments that frames every
 * Britanical Blends label and info card.
 * @startingPoint section="Brand" subtitle="Double hairline border with corner leaves" viewport="700x360"
 */
export interface OrnateFrameProps {
  children?: React.ReactNode;
  /** Rule and ornament colour. @default "var(--rule-hairline)" */
  color?: string;
  /** Distance from the container edge to the outer rule, in px. @default 10 */
  inset?: number;
  radius?: string;
  /** Draw the four corner leaf ornaments. @default true */
  corners?: boolean;
  style?: React.CSSProperties;
}
export declare function OrnateFrame(props: OrnateFrameProps): JSX.Element;

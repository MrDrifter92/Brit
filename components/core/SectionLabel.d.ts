/**
 * Small letterspaced capitals used as a section heading on labels and cards —
 * ABOUT THIS BLEND, INGREDIENTS, BENEFITS, BREW GUIDE.
 * @startingPoint section="Core" subtitle="Letterspaced small-caps heading" viewport="700x120"
 */
export interface SectionLabelProps {
  children?: React.ReactNode;
  /** px. @default 13 */
  size?: number;
  color?: string;
  /** @default "center" */
  align?: 'left' | 'center' | 'right';
  /** @default 600 */
  weight?: number;
  as?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
}
export declare function SectionLabel(props: SectionLabelProps): JSX.Element;

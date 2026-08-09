/**
 * Plain hairline separator. The vertical variant divides BENEFITS from
 * BREW GUIDE inside the blend panel.
 * @startingPoint section="Core" subtitle="Hairline separator, both axes" viewport="700x120"
 */
export interface RuleProps {
  /** @default "horizontal" */
  orientation?: 'horizontal' | 'vertical';
  color?: string;
  /** CSS length along the rule. @default "100%" */
  length?: string;
  /** px. @default 1 */
  thickness?: number;
  style?: React.CSSProperties;
}
export declare function Rule(props: RuleProps): JSX.Element;

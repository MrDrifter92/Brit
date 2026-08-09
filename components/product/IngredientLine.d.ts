/**
 * The comma-separated ingredient run that sits under the INGREDIENTS heading.
 * @startingPoint section="Product" subtitle="Comma-separated ingredient run" viewport="700x120"
 */
export interface IngredientLineProps {
  /** Title Case botanical names, in the order printed on the label. */
  items?: string[];
  /** px. @default 15 */
  size?: number;
  color?: string;
  /** @default "center" */
  align?: 'left' | 'center';
  style?: React.CSSProperties;
}
export declare function IngredientLine(props: IngredientLineProps): JSX.Element;

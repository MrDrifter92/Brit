/**
 * Cream surface with a hairline border, 14px radius and optional paper grain —
 * the container used for the BENEFITS / BREW GUIDE panel and for shop tiles.
 * @startingPoint section="Core" subtitle="Cream panel with hairline border" viewport="700x260"
 */
export interface CardProps {
  children?: React.ReactNode;
  /** @default "paper" */
  tone?: 'paper' | 'aged' | 'blush' | 'accent' | 'dark';
  /** @default true */
  bordered?: boolean;
  /** Adds the warm drop shadow. @default false */
  elevated?: boolean;
  /** Overlay the paper-grain texture on light tones. @default true */
  grain?: boolean;
  padding?: string;
  radius?: string;
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;

/**
 * The Britanical Blends name set in letterspaced Cormorant Garamond capitals.
 * Used at the head of every label, card and banner.
 * @startingPoint section="Brand" subtitle="Letterspaced serif wordmark" viewport="700x150"
 */
export interface WordmarkProps {
  /** Optical size step. @default "md" */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'display';
  /** Any CSS colour; defaults to inherited text colour. */
  color?: string;
  /** Element to render. @default "div" */
  as?: keyof JSX.IntrinsicElements;
  /** @default "center" */
  align?: 'left' | 'center' | 'right';
  style?: React.CSSProperties;
}
export declare function Wordmark(props: WordmarkProps): JSX.Element;

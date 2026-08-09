/**
 * Squared, letterspaced call to action. Apothecary-plain: no pill shapes, no
 * gradients, no drop shadow. Press state nudges down 1px; hover darkens.
 * @startingPoint section="Core" subtitle="Primary, secondary, accent, ghost" viewport="700x150"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** @default "primary" */
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  /** Renders an anchor when set. */
  href?: string;
  as?: keyof JSX.IntrinsicElements;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;

/**
 * Small letterspaced tag for provenance and product claims — Caffeine free,
 * Loose leaf, 50g, New blend.
 * @startingPoint section="Core" subtitle="Provenance and claim tags" viewport="700x120"
 */
export interface BadgeProps {
  children?: React.ReactNode;
  /** @default "outline" */
  tone?: 'outline' | 'solid' | 'soft' | 'quiet';
  /** @default "md" */
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;

/**
 * The brand strapline — NATURE · INTENTION · NOURISHMENT — set in letterspaced
 * capitals with middot separators.
 * @startingPoint section="Brand" subtitle="Nature · Intention · Nourishment" viewport="700x120"
 */
export interface StraplineProps {
  /** Override the three words only when a campaign genuinely needs it. */
  words?: string[];
  /** Font size in px. @default 13 */
  size?: number;
  color?: string;
  /** Serif on packaging, sans on lifestyle photography. @default "serif" */
  font?: 'serif' | 'sans';
  style?: React.CSSProperties;
}
export declare function Strapline(props: StraplineProps): JSX.Element;

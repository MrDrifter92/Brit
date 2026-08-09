/**
 * The BREW GUIDE column — dose, water temperature and steeping time, each with
 * a thin line icon. Requires the Tabler Icons webfont (see readme > Iconography).
 * @startingPoint section="Product" subtitle="Dose, temperature, steep time" viewport="700x200"
 */
export interface BrewStep { /** Tabler icon class, e.g. "ti-spoon" */ icon: string; label: string }
export interface BrewGuideProps {
  /** Defaults to the house guide: 1 tsp per cup / 100°C / Steep 7–10 mins. */
  steps?: BrewStep[];
  /** px. @default 14 */
  size?: number;
  color?: string;
  /** px. @default 20 */
  iconSize?: number;
  style?: React.CSSProperties;
}
export declare function BrewGuide(props: BrewGuideProps): JSX.Element;

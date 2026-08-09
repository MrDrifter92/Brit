/**
 * The circular Britanical Blends roundel: cream field, double hairline border with
 * leaf fleurons, brown serif name stacked over two lines.
 * @startingPoint section="Brand" subtitle="Circular roundel logo" viewport="700x240"
 */
export interface LogomarkProps {
  /** Rendered diameter in px. @default 96 */
  size?: number;
  /** Path to the roundel asset, relative to the consuming page. @default "assets/logo-roundel.png" */
  src?: string;
  alt?: string;
  style?: React.CSSProperties;
}
export declare function Logomark(props: LogomarkProps): JSX.Element;

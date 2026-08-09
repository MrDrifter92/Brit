/**
 * The handwritten sign-off that closes every product card, set in the script
 * face — "Sip slow. Dream deep." / "Breathe in beauty. Sip in the sunset."
 * @startingPoint section="Core" subtitle="Handwritten card sign-off" viewport="700x160"
 */
export interface ScriptQuoteProps {
  children?: React.ReactNode;
  /** Explicit line breaks; each entry is its own line. */
  lines?: string[];
  /** px. @default 30 */
  size?: number;
  color?: string;
  /** @default "center" */
  align?: 'left' | 'center' | 'right';
  style?: React.CSSProperties;
}
export declare function ScriptQuote(props: ScriptQuoteProps): JSX.Element;

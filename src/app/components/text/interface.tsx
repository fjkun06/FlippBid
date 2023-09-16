
export interface ITextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties | undefined;
  href?: string;
  bold?: boolean;
  italic?: boolean;
  isGradient?: boolean;
  type?: "normal" | "link" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"|"span";
  onClick?: (arg?: any) => any;

}

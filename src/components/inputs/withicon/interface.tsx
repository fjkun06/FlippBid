export interface IInput {
  startIcon?: React.JSX.Element;
  endIcon?: React.JSX.Element;
  /**
   * Set input's label.
   */
  label: string;
  /**
  /**
   * Set input's custom width.
   * @example customWidth = "100px";
   */
  customWidth?: string;
  /**
   * Set input's error message.
   */
  error?: string;
  className?: string;
}

export interface IIconInput
  extends IInput,
    React.InputHTMLAttributes<HTMLInputElement> {}

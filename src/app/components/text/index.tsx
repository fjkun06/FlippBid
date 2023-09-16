import React from "react";

import { ITextProps } from "./interface";

const Text = ({
  text,
  style = {},
  className,
  href,
  onClick,
  type = "normal",
  isGradient = false,
  bold = false,
  italic = false
}: ITextProps) => {
  const commonStyles = {
    fontWeight: bold ? "bold" : "normal",
    fontStyle: italic ? "italic" : "normal"
  };

  const gradientStyle = isGradient
    ? {
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        MozBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        MozTextFillColor: "transparent"
      }
    : {};

  const sharedStyles = {
    style: {
      ...style,
      ...commonStyles,
      ...gradientStyle
    },
    className: `font-text ${
      type === "link" ? "underline text-primary" : ""
    } ${className}`,
    onClick
  };

  switch (type) {
    case "normal":
      return <p {...sharedStyles}>{text}</p>;
    case "h1":
      return <h1 {...sharedStyles}>{text}</h1>;
    case "h2":
      return <h2 {...sharedStyles}>{text}</h2>;
    case "h3":
      return <h3 {...sharedStyles}>{text}</h3>;
    case "h4":
      return <h4 {...sharedStyles}>{text}</h4>;
    case "h5":
      return <h5 {...sharedStyles}>{text}</h5>;
    case "h6":
      return <h6 {...sharedStyles}>{text}</h6>;
    case "span":
      return <span {...sharedStyles}>{text}</span>;
    case "link":
      return (
        <a {...sharedStyles} href={href}>
          {text}
        </a>
      );
    default:
      return <p {...sharedStyles}>{text}</p>;
  }
};

export default Text;

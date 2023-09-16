import React from "react";


import { IButtonProps } from "./interface";

const Button = ({
  text,
  style = {},
  className,
  onClick,
  icon
}: IButtonProps) => {
  return (
    <button
      style={{
        ...style
      }}
      className={`flex justify-center items-center rounded-md px-4 py-2 w-max capitalize cursor-pointer ${className}`}
      onClick={onClick}
    >
      {text}
        {icon}
    </button>
  );
};

export default Button;

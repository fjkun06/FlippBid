import React from "react";
import { Text } from "../..";
import { IIconInput } from "./interface";

const IconInput: React.FC<IIconInput> = ({
  label,
  className,
  error,
  customWidth,
  startIcon,
  endIcon,
  ...rest
}) => {
  const flex = label.length > 0 ? "justify-between" : "justify-center";

  return (
    <label
      className={`transition gap-1 flex ${flex} flex-col p-[15px]
       bg-transparent h-[51px] w-[234px] ${className}`}
      style={{ width: customWidth }}
    >
      {label.length > 0 && (
        <Text
          className="!text-[11.42px] !m-0 h-[14px] !-mt-1 capitalize"
          text={label}
          type="span"
        />
      )}
      <span
        style={{ width: customWidth }}
        className="h-8 flex justify-between items-center pr-1"
      >
        {startIcon && <span className="">{startIcon}</span>}
        <input
          {...rest}
          className={`bg-transparent flex outline-none
         placeholder:text-grey border-transparent 
         h-full caret-grey text-grey w-full pr-2
        text-[14px]`}
        />
        {endIcon && <span className="cursor-pointer">{endIcon}</span>}
      </span>

      {error && (
        <Text className="text-[11.42px] !text-red pl-[29px] " text={error} />
      )}
    </label>
  );
};

export default IconInput;

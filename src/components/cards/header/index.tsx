import React from "react";
import { IHeaderCard } from "./interface";
import Text from "components/text";

const HeaderCard: React.FC<IHeaderCard> = ({
  title,
  description,
  borderColor,
  className,
}) => {
  const borders = {
    grey: "border-grey2",
    secondary: "border-secondary",
    gradient: "border-transparent",
  };
  const textColors = {
    grey: "text-grey1 text-[13px]",
    secondary: "text-blue2 text-[13px]",
    gradient: "text-pink text-[13px] lg:text-[17px]",
  };
  const backgrounds = {
    grey: "lg:bg-[#ffffffe6]",
    secondary: "lg:bg-[#ffffffe6]",
    gradient: "lg:bg-gradient-header-card",
  };

  const isGradient = borderColor === "gradient";
  return (
    <div
      className={`w-[156px] sm:w-[288px] ${backgrounds[borderColor]} bg-transparent  border-0 lg:border-[1px] h-[75px] sm:h-[107px]  ${borders[borderColor]} absolute flex justify-center flex-col py-[14px] p-0 lg:pl-6 rounded-[13px] ${className}`}
      style={{
        backgroundOrigin: isGradient ? "padding-box, border-box" : "",
        backgroundClip: isGradient ? "padding-box, border-box" : "",
      }}
    >
      <Text
        text={title}
        type="h4"
        className={`${isGradient ? "self-start" : "self-end"} lg:self-auto ${
          textColors[borderColor]
        } font-semibold  `}
      />
      <Text
        text={description}
        className={`text-[8px] sm:text-[11px] p-2 sm:px-[10px] sm:py-4 lg:p-0 text-[#8692A6] leading-[11px] sm:leading-[14px] border-[1px] lg:!border-none rounded-[8px] sm:rounded-[13px] ${borders[borderColor]}`}
        style={{
          background: isGradient
            ? "linear-gradient(#ffffff, #ffffff) padding-box,linear-gradient(to bottom, #BE36EB, #00C4E2) border-box"
            : "#ffffffe6",
        }}
      />
    </div>
  );
};

export default HeaderCard;

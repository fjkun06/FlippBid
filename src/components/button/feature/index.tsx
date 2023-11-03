import { Text } from "components";
import React from "react";
import { IFeatureButton } from "./interface";

const FeatureButton: React.FC<IFeatureButton> = ({
  index,
  currentIndex,
  text,
  toggleIndex,
  icon,
}) => {
  const active =
    index === currentIndex ? "bg-orange/[0.22] w-[120%]  " : "bg-white w-full";

  return (
    <span
      onClick={toggleIndex}
      className={`flex md:flex-col px-2 gap-[15px] items-center justify-center transition-all cursor-pointer rounded-[10px] h-full ${active} `}
    >
      {icon}
      <Text
        text={text}
        className="text-primary leading-[18px] text-[15px] font-medium capitalize contents"
      />
    </span>
  );
};
export default FeatureButton;

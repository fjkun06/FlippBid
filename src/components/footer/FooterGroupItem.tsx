import Text from "components/text";
import React from "react";

const FooterGroupItem = ({
  text,
  className,
}: {
  text: string;
  route?: string;
  className?:string;
}) => {
  return (
    <Text
      text={text}
      className={`w-max leading-normal font-light capitalize text-[17px] cursor-pointer transition-colors text-white hover:text-secondary ${className}`}
    />
  );
};

export default FooterGroupItem;

import React from "react";
import { Text } from "..";

const FooterGroup = ({
  children,
  title,
}: {
  children: React.ReactNode | React.ReactNode[];
  title: string;
}) => {
  return (
    <div className="">
      <Text
        text={title}
        className="w-max leading-normal font-bold cursor-pointer text-[17px] text-secondary"
      />
      <div className="">{children}</div>
    </div>
  );
};

export default FooterGroup;

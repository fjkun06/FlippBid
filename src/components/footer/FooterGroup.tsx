import Text from "components/text";
import React from "react";

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

import React from "react";

const Content = ({
  children,
}: {
  children?: React.ReactNode | React.ReactNode[];
}) => {
  return <div className="bg-[#d9d9d959] w-full h-full">{children}</div>;
};

export default Content;

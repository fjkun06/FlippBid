import React from "react";
import { Text } from "../..";
import { PlayStoreIcon } from "../../icons";
import { IStoreButton } from "./interface";

const StoreButton: React.FC<IStoreButton> = ({ icon, title, store }) => {
  return (
    <div className="flex gap-2 p-[10px] bg-white rounded-[4px] min-w-[160px] justify-center w-max h-[51px]">
      {icon}
      <span className="flex flex-col items-start gap-0 pr-3">
        <Text
          text={title}
          className="uppercase text-[14px] font-semibold text-black w-max"
        />
        <Text
          text={store}
          className="capitalize text-[12px] text-black -mt-1"
        />
      </span>
    </div>
  );
};

export default StoreButton;

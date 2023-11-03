import { Button, IconInput, Text } from "components";
import React from "react";
import { caclSection } from "./data";

const Calculate = () => {
  return (
    <div className="w-full h-[509px] bg-calculate bg-cover flex justify-center px-[15px] sm:px-[35px] xl:px-[90px]">
      <div className="h-full max-w-[1300px] flex-wrap w-full bg-red-5000 flex flex-col justify-center gap-[0px] md:gap-[42px]">
        <div className="w-[409px] md:w-[541px] h-[108px]">
          {caclSection.map(({ text, style }) => (
            <Text
              key={style}
              text={text}
              type="span"
              className={`font-bold text-[30px] md:text-[43px] leading-[35px] md:leading-[50px] ${style} `}
            />
          ))}

          <Text
            text="FREE"
            type="span"
            className="font-bold text-[30px] md:text-[43px] leading-[35px] md:leading-[50px] text-orange"
          />
        </div>
        <div className=" w-screen pr-3 sm:pr-0 md:w-[700px] h-[75px] flex gap-[18px] items-center flex-wrap">
          <IconInput
            label=""
            placeholder="Enter your property address, zip code"
            className="bg-white rounded-[7px] w-[294px] md:w-[560px] h-[56px] md:h-[70px] [&>span_input]:!text-[13px] md:[&>span_input]:!text-[20px]"
            style={{ fontSize: "20px" }}
          />
          <Button
            text="Calculate"
            className="bg-orange w-[92px] md:w-[154px] rounded-[7px] h-[41px] md:h-[70px] !p-0 flex items-center justify-center text-[13px] md:text-[25px] capitalize text-white font-bold"
          />
        </div>
      </div>
    </div>
  );
};

export default Calculate;

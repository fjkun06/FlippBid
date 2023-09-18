import { HeaderCard, StoreButton, Text } from "components";
import { stores } from "components/footer/data";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="w-full flex flex-col h-max ">
      <div className="w-full pt-5 s1400:pt-0 h-max s1400:!h-[625px] bg-blue1 rounded-b-[56px] flex items-center justify-center">
        <div className="max-w-[1300px] h-max bg-red-5000 s1400:h-full w-full items-center s1400:items-end flex justify-center s1400:justify-between  flex-col s1400:flex-row">
          <div className="w-screen px-5 sm:px-10 lg:px-0 lg:w-[870px] s1400:w-[576px] h-max s1400:h-[216px] self-center">
            <Text
              text="Showcase and Discuss Real Estate Investment Deals"
              className="text-primary text-[33px] sm:text-[50px] font-medium w-full s1400:w-[576px] h-max contents leading-[33px] sm:leading-[50px]"
            />
            <Text
              text=" DIRECT!"
              className="text-[33px] sm:text-[50px] font-bold bg-gradient-header leading-[33px] sm:leading-[50px]"
              isGradient
              type="span"
            />
          </div>
          <div className="relative">
            <Image
              priority
              className="aspect-auto w-[328px] sm:w-[643px] h-[272px] sm:h-[512px]"
              src="/home/header.png"
              width={643}
              height={532}
              quality={100}
              alt="man-sorrounded-by-orbits"
            />
            <HeaderCard
              className="-right-[26px] sm:right-[20px] lg-right-[33px] bottom-1 sm:bottom-[33px] !w-[147px] sm:!w-[225px] !h-[76px] sm:!h-[103px]"
              title="Find My Deal"
              description="Get Full Property, Data, Comps, ARV's, Ownership Info, Foreclosure Status and MLS Listing within seconds!"
              borderColor="grey"
            />
            <HeaderCard
              className="-right-[31px] sm:right-[14px] top-[70px] lg:-right-[82px] sm:top-[160px] !w-[138px] !h-[76px] sm:!w-[204px] sm:!h-[100px]"
              title="Sell My Deal"
              description="Showcase your property to our Community of Buyers, with Full Property Data, Pictures, Video Walkthroughs."
              borderColor="secondary"
            />
            <HeaderCard
              className="lg:!gap-2 -left-8 sm:left-[35px] lg:-left-[95px] bottom-1 sm:bottom-[33px] lg:bottom-[93px]"
              title="Verified Deals"
              description="Get Live Email, Text, App Notifications DIRECT from the Contract Holders. No Brokers, No Middlemen, No Spam!"
              borderColor="gradient"
            />
          </div>
        </div>
      </div>
      <div className="h-[270px] s1400:h-[200px] bg-red-2000 flex px-[105px] justify-center items-center w-full">
        <div className="h-full s1400:h-max w-screen sm:w-full flex items-center justify-between max-w-[1300px] bg-greenn-500 flex-col s1400:flex-row ">
          <div className="flex px-2 sm:px-0  gap-2.5 w-[415px] justify-between mt-10 s1400:mt-0">
            {stores.map((props) => (
              <StoreButton
                className="scale-100 s1400:scale-[1.4]"
                {...props}
                key={props.title}
              />
            ))}
          </div>
          <div className="max-w-full px-2 sm:px-0  sm:max-w-[470px] s1400:max-w-[627px] h-max sm:h-[100px]  mb-5 sm:mb-10 s1400:mb-0 s1400:h-max flex flex-col gap-5 s1400:gap-1">
            <Text
              text="FlippBidd is a Real Estate Investment Application where Investors, Wholesalers, Brokers, Acquisition and Disposition specialists can Locate, Showcase and Discuss their Investment Deals DIRECT!"
              className="leading-6 s1400:leading-[18.22px] text-[13px] sm:text-[15px] text-[#455A64] h-max"
            />
            <Text
              text="Free to Download and Use"
              className="leading-[18.22px] font-semibold text-[17px] text-orange cursor-pointer"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import FooterGroup from "./FooterGroup";
import FooterGroupItem from "./FooterGroupItem";
import { IconInput, Text } from "..";
import { icons } from "./data";
import { EnvelopIcon } from "../icons";

const Footer = () => {
  return (
    <footer className="bg-green-500 w-full h-[410px]">
      <div className="w-full h-max s1200:h-[220px] bg-primary flex flex-wrap 
      s1200:flex-row px-[15px] sm:px-[35px] xl:px-[90px]
       s1200:justify-evenly gap-10 lg:gap-5 pb-[42px] s1200:pb-0 pt-[42px]">
        <div className="flex w-max h-full gap-[55px] items-start flex-wrap">
          <FooterGroup title="Calls">
            <FooterGroupItem text="Book an Appointment" />
            <FooterGroupItem text="Request Apointment" />
          </FooterGroup>
          <FooterGroup title="Deals">
            <FooterGroupItem text="Find my deal" />
            <FooterGroupItem text="Sell my deal" />
            <FooterGroupItem text="Verified Investors" />
          </FooterGroup>
          <FooterGroup title="Our Brand">
            <FooterGroupItem text="About us" />
            <FooterGroupItem text="How it works" />
            <FooterGroupItem text="Mobile App" />
            <FooterGroupItem text="Our team" />
          </FooterGroup>
        </div>
        <div className="flex flex-col gap-1">
          {[
            "Contact",
            "Strategic Partners",
            "Pricing",
            "FlippBidd University",
          ].map((e) => (
            <FooterGroupItem className="!font-medium" text={e} key={e} />
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <Text
            text="Enter your email to get our weekly email campaigns"
            className="!text-[12px] text-white font-normal"
          />
          <IconInput
            label=""
            endIcon={<EnvelopIcon />}
            className="!bg-white h-[47px] rounded-[5px] !w-[352px]"
            placeholder="email"
          />
          <div className="flex w-max gap-3 mt-[19px]">
            {icons.map(({ route, icon }, i) => (
              <span
                className="w-max cursor-pointer h-6 flex items-center justify-center"
                key={i}
              >
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-[100px] bg-secondary"></div>
      <div className="w-full h-[89px] bg-white"></div>
    </footer>
  );
};

export default Footer;

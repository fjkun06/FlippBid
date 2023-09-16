import React from "react";
import FooterGroup from "./FooterGroup";
import FooterGroupItem from "./FooterGroupItem";
import { Text } from "..";
import { icons } from "./data";

const Footer = () => {
  return (
    <footer className="bg-green-500 w-full h-[410px]">
      <div className="w-full h-[220px] bg-primary flex">
        <div className="flex w-max h-full">
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
        <div className="">
          {[
            "Contact",
            "Strategic Partners",
            "Pricing",
            "FlippBidd University",
          ].map((e) => (
            <FooterGroupItem className="!font-medium" text={e} key={e} />
          ))}
        </div>
        <div className="">
          <Text
            text="Enter your email to get our weekly email campaigns"
            className="!text-[14px] text-white font-normal"
          />
          <div className="flex w-max gap-3">
            {icons.map(({ route, icon }, i) => (
              <span className="w-max cursor-pointer h-6 flex items-center justify-center" key={i}>
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

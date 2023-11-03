import React from "react";
import FooterGroup from "./FooterGroup";
import FooterGroupItem from "./FooterGroupItem";
import { footerOptions, icons, stores } from "./data";
import { EnvelopIcon } from "components/icons";
import { IconInput, StoreButton, Text } from "components";

const Footer = () => {
  return (
    <footer className="bg-green-500 w-full h-[410px]">
      <div
        className="w-full h-max s1200:h-[220px] bg-primary flex
      px-[15px] sm:px-[35px] xl:px-[90px]
       pb-[42px] s1200:pb-0 pt-[42px] justify-center items-center"
      >
        <div className="max-w-[1300px] flex-wrap w-full h-full flex s1200:justify-between  gap-10 lg:gap-5 bg-grseen-200">
          <div className="flex w-max h-full gap-[55px] items-start flex-wrap">
            {footerOptions.map(({ title, items }) => (
              <FooterGroup title={title} key={title}>
                {items.map((el) => (
                  <FooterGroupItem text={el} key={el} />
                ))}
              </FooterGroup>
            ))}
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
              {icons.map(({ icon }, i) => (
                <span
                  className="sm:w-max cursor-pointer sm:h-6 flex items-center justify-center w-[43px] h-[43px] rounded-full bg-secondary sm:bg-transparent"
                  key={i}
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full h-[190px] xl:h-[100px] flex justify-center
       px-[15px] sm:px-[35px] xl:px-[90px] items-center bg-secondary  "
      >
        <div className="max-w-[1300px] w-full h-full flex gap-y-5 flex-col xl:flex-row justify-center xl:justify-between items-center gap-x-10">
          <Text
            text="Download our mobileApp and carry and connect with the best real estate investors for free"
            className="!text-[17px] text-white font-medium text-center"
          />
          <div className="flex gap-2.5">
            {stores.map((props) => (
              <StoreButton {...props} key={props.title} />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-[89px] bg-white flex items-center justify-center px-[15px] sm:px-[35px] xl:px-[90px]">
        <div
          className="max-w-[1300px] flex flex-col gap-y-5
    min-[800px]:flex-row items-center h-full w-full min-[800px]:justify-between justify-center"
        >
          <span className="flex gap-[50px] min-[800px]:gap-[166px]">
            {["Terms of service", "Privacy Statement"].map((el) => (
              <Text
                text={el}
                key={el}
                className="!text-[12px] text-grey font-normal cursor-pointer"
              />
            ))}
          </span>
          <Text
            text="© Copyright 2023 FlippBidd App"
            className="!text-[12px] text-grey font-normal cursor-pointer"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

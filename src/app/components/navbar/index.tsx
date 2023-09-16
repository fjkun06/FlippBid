import React from "react";
import { FlippBidIcon, MenuIcon } from "../icons";
import NavbarItem from "./navitem";
import { Button } from "..";

const Navbar = () => {
  return (
    <nav className="bg-gradient-primary w-full h-[55px] lg:h-[105px] flex px-[45px] xl:px-[105px] items-center justify-between">
      <FlippBidIcon className="w-[78px] h-[27px] lg:h-[58px] sm:w-[172px] " />
      <MenuIcon className="flex lg:hidden lg:scale-150 fill-white cursor-pointer" />
      <div className="w-max h-max bg-red-4000 lg:flex hidden justify-between items-center gap-16">
        <div className="flex gap-[45px]">
          {["Free Trial", "Get ARV", "Pricing", "Verified Investments"].map(
            (el, index) => (
              <NavbarItem text="Free Trial" active={index === 0} key={el} />
            )
          )}
        </div>
        <Button
          text="Contact"
          className="!py-[14px] !px-[20px] bg-white text-orange !rounded-[54px] text-[18px] font-semibold"
        />
      </div>
    </nav>
  );
};

export default Navbar;
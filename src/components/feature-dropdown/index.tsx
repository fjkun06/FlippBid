"use client";

import { Text } from "components";
import React from "react";
import { IFeatureButton } from "./interface";
import { ArrowDownIcon, ArrowUpIcon } from "components/icons";
import { motion, AnimatePresence } from "framer-motion";

const FeatureDrowpdown: React.FC<IFeatureButton> = ({
  index,
  currentIndex,
  text,
  toggleIndex,
  icon,
}) => {
  const open = index === currentIndex;
  console.log(open);
  
  return (
    <motion.div
      layout
      animate={{ height: open ? "180px" : "91px" }}
      onClick={toggleIndex}
      className="h-[91px] w-full bg-red-300 cursor-pointer flex flex-col justify-start pt-5 gap-3"
    >
      <div className="w-dull flex  h-max justify-between items-center">
        <span className="flex items-center">

        {icon}
        <Text
          text={text}
          className="text-primary leading-[17px] text-[15px] font-medium capitalize contents"
        />
        </span>
        {open ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            exit={{ opacity: 0, transition: { delay: 0 } }}
            animate={{ opacity: 1, transition: { delay: 0.25 } }}
            className=""
          >
            <Text
              text="Connect with our In-App Audio/Video Feature and also book appointments or request apointments directly from the App"
              className="text-primary leading-[28px] text-[15px] h-max max-w-full"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
export default FeatureDrowpdown;

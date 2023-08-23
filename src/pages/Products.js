import React from "react";

import zineloop from "../img/product/zineloop-v3.png";
import bilita from "../img/product/bilita-v2.png";
import chrys from "../img/product/chrys.png";
import vanitas from "../img/product/vanitas.png";

import { motion } from "framer-motion";

import { transition1 } from "../transitions";

const Products = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section bg-[#f8deea] overflow-auto"
    >
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-18 lg:pt-20 pb-8">
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex flex-col items-center lg:items-start pt-28"
          >
            <h1 className="h1">How It Works</h1>
            <h3 className="h3">Get in touch & explain your community</h3>
            <p className="text-[14px] lg:text-[18px] text-left font-primary mb-4 lg:mb-4 w-[20rem] lg:w-[26rem]">
              We split our product into two cycles: <p />
              <b>The Foundation</b> <i>(creative strategy)</i> and <p />
              <b>The Ignition</b> <i>(production)</i>.
            </p>
            <p className="text-[14px] lg:text-[18px] text-justify font-primary mb-4 lg:mb-4 w-[20rem] lg:w-[26rem]">
              Take a journey with us - step by step - or pause or cancel at any
              time.{" "}
              <i>
                To explore our selected works, click on any image for more
                details.
              </i>
            </p>
          </motion.div>
          <div className="grid grid-cols-2 lg:gap-2 pb-16 lg:pb-0">
            <div className="max-w-[250px] lg:max-w-[540px] h-[100px] lg:h-[200px] mb-16">
              <a href={"/Bilita"}>
                <img
                  className="object-cover lg:h-[160px] sm:h-[150px] xl:h-full hover:scale-110 transition-all duration-500"
                  src={bilita}
                  alt=""
                />
              </a>
            </div>
            <div className="max-w-[250px] lg:max-w-[540px] h-[100px] lg:h-[200px] mb-16">
              <a href={"/Chrys"}>
                <img
                  className="object-cover lg:h-[160px] sm:h-[150px] xl:h-full hover:scale-110 transition-all duration-500"
                  src={chrys}
                  alt=""
                />
              </a>
            </div>
            <div className="max-w-[250px] lg:max-w-[540px] h-[100px] lg:h-[200px] mb-16">
              <a href={"/Zine"}>
                <img
                  className="object-cover lg:h-[160px] sm:h-[150px] xl:h-full hover:scale-110 transition-all duration-500"
                  src={zineloop}
                  alt=""
                />
              </a>
            </div>
            <div className="max-w-[250px] lg:max-w-[540px] h-[100px] lg:h-[200px] mb-16">
              <a href={"/Vanitas"}>
                <img
                  className="object-cover lg:h-[160px] sm:h-[150px] xl:h-full hover:scale-110 transition-all duration-500"
                  src={vanitas}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Products;

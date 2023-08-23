import React from "react";

import splash from "../img/contact/splash.png";

import { motion } from "framer-motion";

import { transition1 } from "../transitions";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section bg-[#f8deea] overflow-auto"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start pt-26 gap-x-8">
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={transition1}
            className="hidden lg:flex absolute bottom-0 left-0 right-0 top-72 -z-10"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ transition: transition1, duration: 1.5 }}
            className="lg:flex-1 w-[20rem] lg:w-[26rem]"
          >
            <img src={splash} alt="" />
          </motion.div>
          <div className="lg:flex-1 lg:pt-32 px-5 text-center lg:text-left">
            <h1 className="h1">Pricing</h1>
            <h3 className="h3">
              Get in touch and we will explain our process in detail
            </h3>
            <div className="inset-y-0 left-0 mt-[2rem]">
              <a
                href="https://38cmi8tjsde.typeform.com/to/cPZalUio"
                className="btn rounded-full mx-auto lg:mx-0 self-start text-[12px] lg:text-[16px] mb-4 w-[12rem] lg:w-[16rem]"
              >
                say hi
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

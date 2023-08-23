import React from "react";

import brand from "../img/about/vanitas.gif";

import { motion } from "framer-motion";

import { transition1 } from "../transitions";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section bg-[#f8deea] overflow-auto"
    >
      <div className="container md:flex mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          <div className="flex-1 max-w-7xl lg:max-h-96 order-2 lg:order-none pb-16 lg:pb-0">
            <img
              src={brand}
              alt=""
              className="md:shrink-0 rounded-full max-h-40 lg:max-h-96"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex-1 pt-36 pb-8 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-center"
          >
            <h1 className="h1 mt-44 lg:mt-1">About</h1>
            <h3 className="h3 w-[20rem] lg:w-[26rem] text-center subpixel-antialiased">
              The future of the creative economy
            </h3>
            <p className="subpixel-antialiased text-[14px] lg:text-[16px] font-primary text-justify mb-4 lg:mb-4 w-[20rem] lg:w-[26rem]">
              We’re living at times of foundational shifts in how we approach
              creative work: the creative process we’ve used to is about to
              become commoditised. In the world of easily-generated content it's
              essential to stand out and bring your community at the forefront.
            </p>
            <p className="subpixel-antialiased text-[14px] lg:text-[16px] font-primary text-justify mb-4 lg:mb-12 w-[20rem] lg:w-[26rem]">
              We believe that future of marketing products lies with turning the
              full attention to the packaged emotional solutions with a strong
              vision and high-end production powered by today's technological
              breakthroughs. At ThinkPink, we put profound emotional
              experiences, empathy, and joy from interacting with your brand at
              the forefront of our work.
              <br />
            </p>
            <a
              href="https://mirror.xyz/a1xsn.eth/XLOrovcnCH9KxLbeNvLHi18hVa-4Bda1YSUkNu812jE"
              className="btn rounded-full text-[12px] lg:text-[16px] font-light"
            >
              our product theses
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;

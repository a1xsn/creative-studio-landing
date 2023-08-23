import React from "react";

import bullets from "../img/projects/chrys-bull.png";
import image1 from "../img/projects/chrys-no3.gif";
import image2 from "../img/projects/chrys-no2.gif";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { transition1 } from "../transitions";

const Chrys = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section bg-[#f8deea] overflow-auto"
    >
      <div className="container flex justify-center mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          <div className="flex-1 max-h-96 max-w-7xl lg:max-h-max order-2 lg:order-none pb-16 lg:pb-0">
            <img
              src={bullets}
              alt=""
              className="md:shrink-0 rounded-full max-h-96 lg:max-h-full pb-10 lg:pb-0"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex-1 pt-36 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-center mt-52 lg:mt-1"
          >
            <h1 className="h1 mt-[13rem] lg:mt-14">Chrysalism</h1>
            <div className="grid grid-cols-2 gap-2 lg:gap-2">
              <div className="max-w-[150px] lg:max-w-[320px] h-[150px] lg:h-[220px]">
                <img
                  className="rounded-lg object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                  src={image1}
                  alt=""
                />
              </div>
              <div className="max-w-[150px] lg:max-w-[320px] h-[150px] lg:h-[220px]">
                <img
                  className="rounded-lg object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                  src={image2}
                  alt=""
                />
              </div>
            </div>
            <p className="text-[14px] lg:text-[16px] text-justify ml-3 lg:ml-0 font-primary mt-2 mb-4 lg:mb-4 w-[20rem] lg:w-[32rem]">
              The serenity of a person who stays in a shelter during a
              thunderstorm. That was the feeling we were trying to capture with
              CHRYSALISM - a reimagined jewelry campaign that we turned into an
              interactive gallery of ERC-1155 collectibles and augmented reality
              objects.
            </p>
            <p className="text-[14px] lg:text-[16px] text-justify ml-3 lg:ml-0 font-primary mb-4 lg:mb-8 w-[20rem] lg:w-[32rem]">
              CHRYSALISM is an interactive digital collection in the form of a
              poetic longread. We use photographs, poetry, videos, and AR
              objects to bring you closer to exploring the infinite sensuality
              of the human body within the boundaries of digital texture. Each
              visual item inside these pages could be minted as an NFT on
              Polygon blockchain.
              <br />
            </p>
            <div className="grid grid-cols-2 gap-2 lg:gap-2">
              <a
                href="https://www.chrysalism.space/"
                className="btn rounded-full text-[12px] lg:text-[16px]"
              >
                Visit
              </a>
              <Link
                to={"/Products"}
                className="btn rounded-full text-[12px] lg:text-[16px]"
              >
                back
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Chrys;

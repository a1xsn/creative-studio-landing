import React from "react";

import bullets from "../img/projects/bilita-bull.png";
import image1 from "../img/projects/bilita-no1.gif";
import image2 from "../img/projects/bilita-no3.png";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { transition1 } from "../transitions";

const Bilita = () => {
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
          <div className="flex-1 max-h-96 max-w-7xl lg:max-h-max order-2 lg:order-none pb-20 lg:pb-0">
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
            <h1 className="h1 mt-52 lg:mt-6">BilitaMpash</h1>
            <div className="grid grid-cols-2 gap-2 lg:gap-2">
              <div className="max-w-[150px] lg:max-w-[320px] h-[150px] lg:h-[220px]">
                <img
                  className="rounded-lg object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                  src={image2}
                  alt=""
                />
              </div>
              <div className="max-w-[150px] lg:max-w-[320px] h-[150px] lg:h-[220px]">
                <img
                  className="rounded-lg object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                  src={image1}
                  alt=""
                />
              </div>
            </div>
            <p className="text-[14px] lg:text-[16px] text-justify ml-3 lg:ml-0 font-primary mt-2 mb-4 lg:mb-4 w-[20rem] lg:w-[32rem]">
              Zero code, artists friendly: that's how the team at 8XR, the
              developers behind HTML5 native game engine, described their tools
              to us. We were tasked with embodying that motto: to create an MVP
              product for Investor's Day that would combine this powerful tech
              and our approach towards emphatic experiences.
            </p>
            <p className="text-[14px] lg:text-[16px] text-justify ml-3 lg:ml-0 font-primary mb-4 lg:mb-8 w-[20rem] lg:w-[32rem]">
              Bilita Mpash results from that journey: a Web3-enabled metaverse
              island filled with mysteries and meditative digital installations.
              To participate, you join The Tribe – the island inhabitants group
              – by minting your key on the Polygon blockchain. Bilita is our
              proud experiment in rethinking our interactions with digital
              spaces and how we can establish communities that share values.
              <br />
            </p>
            <div className="grid grid-cols-2 gap-2 lg:gap-2">
              <a
                href="https://bilitampash.xyz/"
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

export default Bilita;

import React from 'react';

import cre from '../img/about/creativity-web.png'
import eth from '../img/about/ethics-web.png'
import emo from '../img/about/emotion-web.png'

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import {transition1} from '../transitions'

const Principles = () => {
  return (
  <motion.section initial={{opacity: 0, y: '100%'}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: '100%'}} transition={transition1} className='section bg-[#f8deea] overflow-auto'>
      <div className="md:flex md:justify-between md:gap-16 mt-48">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-center w-full"
      >
        <div>
            <h1 className="h1">OUR PRINCIPLES</h1>
        </div>
      </motion.div>

      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-28">
        {/* EXPERIENCE */}
        <motion.div
          className="mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">1</p>
              <h3 className='h3 w-[20rem] lg:w-[26rem] text-left subpixel-antialiased'>
                CREATIVITY
              </h3>
            </div>
          </div>
          <p className='subpixel-antialiased text-[14px] lg:text-[16px] font-primary text-justify mb-4 lg:mb-4 w-[20rem] lg:w-[26rem]'>
          Our fast changing world requires new and unique ways to get noticed in the flood of LLM generated content. ThinkPink is a laboratory of ever-green ideas and high-end production powered by technological breakthroughs of today. Web2, Web3 or the physical world – there's no barriers for us.
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">2</p>
              <h3 className='h3 w-[20rem] lg:w-[26rem] text-left subpixel-antialiased'>
                ETHICS
              </h3>
            </div>
          </div>
          <p className='subpixel-antialiased text-[14px] lg:text-[16px] font-primary text-justify mb-4 lg:mb-4 w-[20rem] lg:w-[26rem]'>
          Everything moves and changes faster as digital tools grow closer to us. In this environment, we believe in moving smartly and safely. At ThinkPink we believe in synthesising healthy and helpful projects and products, that are thoroughly fact-checked and ethical.
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">3</p>
              <h3 className='h3 w-[20rem] lg:w-[26rem] text-left subpixel-antialiased'>
                EMOTION
              </h3>
            </div>
          </div>
          <p className='subpixel-antialiased text-[14px] lg:text-[16px] font-primary text-justify mb-4 lg:mb-4 w-[20rem] lg:w-[26rem]'>
          One thing our digital tools will never be is us. We at ThinkPink put deep emotional experiences, empathy and emotional joy that flow from interacting with your clients at the forefront of our work.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Principles;

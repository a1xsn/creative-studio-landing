import React from 'react';

import cover from '../img/home/cover6.png'

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import {transition1} from '../transitions'

const Home = () => {
  return (
  <motion.section initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={transition1} className='section h-full relative bg-[#f8deea] overflow-auto'>
    <div className='container mx-auto'>
      <div className='flex flex-col justify-center'>
        <motion.div initial={{opacity: 0, y: '-50%'}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: '-50%'}} transition={transition1} className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start'>
          <h1 className='h1 w-[22rem] lg:w-[46rem] text-center md:text-left mt-8 lg:mt-0'>We Are THINKPINK</h1>
        <p className='text-[20px] lg:text-[36px] font-primary mb-2 lg:mb-8 w-[22rem] lg:w-[52rem] text-center md:text-left'>Experience-As-A-Service Studio </p>
        <p className='text-[13px] lg:text-[16px] font-primary mb-4 lg:mb-12 w-[22rem] lg:w-[36rem] text-center md:text-left'>We build innovative community-driven emotional experiences with transparency and a boundless technological toolkit </p>
        <a href='https://38cmi8tjsde.typeform.com/to/cPZalUio' className='btn rounded-full mb-[30px] text-[12px] lg:text-[16px] font-light'>
          Let's connect 
        </a>
        </motion.div>
        <motion.div initial={{scale: 0}} animate={{scale: 1}} exit={{scale: 0}} transition={transition1} className='flex justify-end z-1'>
          <motion.img whileHover={{scale: 1.1}} transition={transition1} src={cover} alt='' className='max-h-0 lg:max-h-max'/>
        </motion.div>
      </div>
    </div>
  </motion.section>
  );
};

export default Home;

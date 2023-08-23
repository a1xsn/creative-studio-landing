import React from 'react';
import bullets from '../img/projects/zine-bull.png'
import image1 from '../img/projects/zine-no4.gif'
import image2 from '../img/projects/zine-no2.gif'

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import {transition1} from '../transitions'

const Zine = () => {
  return (
  <motion.section initial={{opacity: 0, y: '100%'}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: '100%'}} transition={transition1} className='section bg-[#f8deea] overflow-auto'>
    <div className='container flex justify-center mx-auto h-full relative'>
      <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
        <div className='flex-1 max-h-96 max-w-7xl lg:max-h-max order-3 lg:order-none pb-16 lg:pb-0'>
          <img src={bullets} alt="" className='md:shrink-0 rounded-full max-h-96 lg:max-h-full pb-10 lg:pb-0'/>
        </div>
        <motion.div initial={{opacity: 0, y: '-80%'}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: '-80%'}} transition={transition1} className='flex-1 pt-36 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-center mt-52 lg:mt-1'>
          <h1 className='h1 mt-[18rem] lg:mt-24'>ZINE LOOP</h1>
          <div className='grid grid-cols-2 gap-2 lg:gap-4 items-center'>
          <div className='ps-6 max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px]'>
            <img className='rounded-lg object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={image2} alt="" />
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px]'>
            <img className='rounded-lg object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={image1} alt="" />
          </div>
          </div>
          <p className='text-justify text-[14px] lg:text-[16px] ml-3 lg:ml-0 font-primary mt-2 mb-4 lg:mb-4 w-[19.5rem] lg:w-[32rem]'>The developmental company Sevkabel turned to us to activate their public space with an experience that would cross the boundaries of edutainment and digital-first attraction. In September 2020, we launched ZINELOOP, an interactive collage-like DIY zine and augmented reality travel route. 
          </p>
          <p className='text-justify text-[14px] lg:text-[16px] ml-3 lg:ml-0 font-primary mb-4 lg:mb-8 w-[19.5rem] lg:w-[32rem]'>It's a study of the transformation of multiple symbols - particularly the circle - in modern language, their verbal and non-verbal meanings, and their impact on culture in the context of time. Circle is the connecting link of our time: a simple object that forms a network node full of elements in constant movement. Our zine examines the influence of this universal symbol through the process of modern language transformation.
          <br/>
          </p>
          <div className='grid grid-cols-2 gap-2 lg:gap-2'>
            <a href='https://readymag.com/thinkpink/zineloop/' className='btn rounded-full text-[12px] lg:text-[16px]'>Visit</a>
            <Link to={'/Products'} className='btn rounded-full text-[12px] lg:text-[16px]'>back</Link>
            </div>
        </motion.div>
      </div>
      </div>
      
    </motion.section>
  );
};

export default Zine;

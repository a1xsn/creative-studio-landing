import React from 'react';

import Image1 from '../img/portfolio/1.png'
import Image2 from '../img/portfolio/2.png'
import Image3 from '../img/portfolio/3.png'
import Image4 from '../img/portfolio/4.png'
import Image5 from '../img/portfolio/5.png'
import Image6 from '../img/portfolio/6.png'

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import {transition1} from '../transitions'

const Services = () => {
  return (
  <motion.section initial={{opacity: 0, y: '100%'}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: '100%'}} transition={transition1} className='section bg-[#f8deea] overflow-auto'>
    <div className="container mx-auto h-full relative">
      <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-16 lg:pt-36 pb-8'> 
        <motion.div initial={{opacity: 0, y: '-80%'}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: '-80%'}} transition={transition1} className='flex flex-col lg:items-start justify-center items-center pt-28'>
          <h1 className='h1'>Services</h1>
          <h3 className='h3 w-[20rem] lg:w-[26rem]'>We build Experience as a Service</h3>
          <p className='text-[14px] lg:text-[16px] text-justify font-primary mb-4 lg:mb-4 w-[20rem] lg:w-[26rem] md:text-left'>You provide what is essential for your company – and we create a packaged community-centric experience with limitless tech tooling potential that forms deep connections with your brand. 
          </p>
          <p className='text-[14px] lg:text-[16px] text-justify font-primary mb-4 lg:mb-12 w-[20rem] lg:w-[27rem] md:text-left'>We focus on a broad range of digital and IRL production tools to deliver state-of-the-art results for our partners. 
          <br/>
          </p>
          <Link to={'/Products'} className='btn rounded-full mx-auto lg:mx-0 text-[12px] lg:text-[16px] font-light'>Explore in detail</Link>
        </motion.div>
        <div className='grid grid-cols-2 lg:gap-2 pb-16 lg:pb-0'>
          <div className='max-w-[250px] lg:max-w-[320px] h-[150px] lg:h-[220px] overflow-hidden'>
            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image1} alt="" />
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[150px] lg:h-[220px] overflow-hidden'>
            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image2} alt="" />
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[150px] lg:h-[220px] overflow-hidden'>
            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image3} alt="" />
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[150px] lg:h-[220px] overflow-hidden'>
            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image4} alt="" />
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[150px] lg:h-[220px] overflow-hidden'>
            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image5} alt="" />
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[150px] lg:h-[220px] overflow-hidden'>
            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image6} alt="" />
          </div>
        </div>
      </div>
    </div>
    </motion.section>
  );
};

export default Services;

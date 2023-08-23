import React from 'react';

import bullets from '../img/projects/vanitas-bull.png'
import image1 from '../img/projects/vanitas-no1.jpg'
import image2 from '../img/projects/vanitas-no3.JPG'

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import {transition1} from '../transitions'

const Vanitas = () => {
  return (
  <motion.section initial={{opacity: 0, y: '100%'}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: '100%'}} transition={transition1} className='section bg-[#f8deea] overflow-auto'>
    <div className='container flex justify-center mx-auto h-full relative'>
      <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
        <div className='flex-1 max-h-96 max-w-7xl lg:max-h-max order-2 lg:order-none items-center'>
          <img src={bullets} alt="" className='md:shrink-0 rounded-full max-h-96 lg:max-h-full pb-10 lg:pb-0'/>
        </div>
        <motion.div initial={{opacity: 0, y: '-80%'}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: '-80%'}} transition={transition1} className='flex-1 pt-36 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-center'>
          <h1 className='h1 mt-[28rem] lg:mt-24'>Vanitas</h1>
          <div className='grid grid-cols-2 gap-2 lg:gap-2'>
          <div className='max-w-[150px] lg:max-w-[320px] h-[150px] lg:h-[220px]'>
            <img className='rounded-lg object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={image2} alt="" />
          </div>
          <div className='max-w-[150px] lg:max-w-[320px] h-[150px] lg:h-[220px]'>
            <img className='rounded-lg object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={image1} alt="" />
          </div>
          </div>
          <p className='text-[14px] lg:text-[16px] text-justify ml-3 lg:ml-0 font-primary mt-2 mb-2 lg:mb-4 w-[20rem] lg:w-[32rem]'>The wound is the place where the light enters you. Anita Lyutvinskaya's Vanitas fashion collection was centered around each item as a reflection of one's wounded history. The designer felt the need to put storytelling at the forefront of the campaign while ignoring the established rules of a typical fashion campaign. 
          </p>
          <p className='text-[14px] lg:text-[16px] text-justify ml-3 lg:ml-0 font-primary mb-4 lg:mb-4 w-[20rem] lg:w-[32rem]'>We produced a video trilogy inspired by Joan Didion's book Blue Nights. Each episode tells a story from the point of view of a particular woman' experience: Lose, Seek, Possess. At the same time, all the episodes together tell a single story of death and rebirth. It's a quiet time of living loss - a time when the lived experience leaves the body and a new life is born - a premonition of renewal.
          <br/>
          </p>
          <div className='grid grid-cols-2 gap-2 lg:gap-2'>
            <a href='https://vimeo.com/showcase/6325398' className='btn rounded-full text-[12px] lg:text-[16px]'>Visit</a>
            <Link to={'/Products'} className='btn rounded-full text-[12px] lg:text-[16px]'>back</Link>
            </div>
        </motion.div>
      </div>
      </div>
      
    </motion.section>
  );
};

export default Vanitas;

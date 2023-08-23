import React from 'react';

import WomanImg from '../img/contact/woman.png'
import logs from '../img/contact/con-log.svg'
import splash from '../img/contact/splash.png'

import { motion } from 'framer-motion';

import {transition1} from '../transitions';

const v1Contact = () => {
  return (
  <motion.section initial={{opacity: 0, y: '100%'}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: '100%'}} transition={transition1} className='section bg-[#f8deea] overflow-auto'>
    <div className="container mx-auto h-full">
      <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-26 gap-x-8'>
        <motion.div initial={{opacity: 0, y: '100%'}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: '100%'}} transition={transition1} className='hidden lg:flex absolute bottom-0 left-0 right-0 top-72 -z-10'></motion.div>
        <motion.div initial={{opacity: 0, y: '100%'}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: '100%'}} transition={{transition: transition1, duration: 1.5}} className='lg:flex-1 w-[20rem] lg:w-[26rem]'>
          <img src={splash} alt="" />
        </motion.div>
        <div className='lg:flex-1 lg:pt-32 px-5'>
          <h1 className='h1'>Contact us</h1>
          <h3 className='h3'>We'd love to get in touch!</h3>
          <p className='text-[12px] lg:text-[16px] font-primary mb-4 lg:mb-4 w-[20rem] lg:w-[26rem]'>To help us prepare better and start our conversation, please fill in the following fields:
          </p>
          <form className='flex flex-col gap-y-4' action="">
            <div className='flex gap-x-10'>
              <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 text-[12px] lg:text-[16px]' type="text" placeholder='Describe what you do:' />
              <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 text-[12px] lg:text-[16px]' type="text" placeholder='Your address:' />
            </div>
            <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 text-[12px] lg:text-[16px]' type="text" placeholder='Describe your community:' />
          <button className='btn rounded-full mx-auto lg:mx-0 self-start text-[12px] lg:text-[16px] mb-4'>Send</button>
          </form>
        </div>
      </div>
    </div>
  </motion.section>
  );;
};

export default v1Contact;

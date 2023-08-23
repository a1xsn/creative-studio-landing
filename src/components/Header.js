import React from 'react';
import Socials from "../components/Socials"
import logo from "../img/header/logo.svg"
import MobileNav from "./MobileNav"

import animLogo from '../img/header/bg_02.gif'

import { Link } from 'react-router-dom';

const Header = () => {
  return (
  <header className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center bg-[#f8deea]'>
    <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
    <Link to={'/'} className='w-[100px] lg:w-[150px]'>
      <img src={animLogo} alt='..' className='z-0' />
    </Link>
    <nav className='hidden xl:flex gap-x-12 font-light subpixel-antialiased'>
      <Link to={'/'} className='text-[#696c6d] hover:text-primary transition'>Home</Link>
      <Link to={'/About'} className='text-[#696c6d] hover:text-primary transition'>About</Link>
      <Link to={'/Services'} className='text-[#696c6d] hover:text-primary transition'>Services</Link>
      <Link to={'/Products'} className='text-[#696c6d] hover:text-primary transition'>How It Works</Link>
      <Link to={'/Contact'} className='text-[#696c6d] hover:text-primary transition'>Pricing</Link>
    </nav>
    </div>
    {/* social */}
    <Socials />
    {/* mobilenav */}
    <MobileNav />
  </header>
  )
};

export default Header;

import React from 'react';
import {ImFacebook, ImTwitter, ImInstagram} from 'react-icons/im'

const Socials = () => {
  return <div className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4'>
      <li><a href='https://twitter.com/thinkwithpink' target='_blank'>
        <ImTwitter/>
        </a>
        </li>
      <li><a href='https://instagram.com/thinkpink_studio' target='_blank'>
        <ImInstagram/>
      </a>
      </li>
      <li><a href='https://facebook.com' target='_blank'>
        <ImFacebook/> 
        </a>
        </li>
    </ul>
  </div>;
};

export default Socials;

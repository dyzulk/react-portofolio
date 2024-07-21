import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaInstagram } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com/in/dyzulk/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/dyzulk" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://instagram.com/dyzulk" target="_blank" rel="noreferrer" ><FaInstagram /></a>
    </div>
  )
}

export default HeaderSocials
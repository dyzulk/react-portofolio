import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };
  
  return (
    <footer>
      <a href="#home" className="footer__logo">Dyzulk Developer</a>
      <ul className="permalinks">
        <li><a href="#home" className='smooth-scroll'>Home</a></li>
        <li><a href="#about" className='smooth-scroll'>About</a></li>
        <li><a href="#experience" className='smooth-scroll'>Skills</a></li>
        <li><a href="#portfolio" className='smooth-scroll'>Portfolio</a></li>
        <li><a href="#testimonials" className='smooth-scroll'>Testimonials</a></li>
        <li><a href="#contact" className='smooth-scroll'>Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://linkedin.com/in/dyzulk/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/dyzulk" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://instagram.com/dyzulk" target="_blank" rel="noreferrer" ><FaInstagram /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Dyzulk Developer 2022 - {getYear()}. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer

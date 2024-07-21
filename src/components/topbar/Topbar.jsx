import React, { useState, useEffect } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';

import './topbar.css';

const Topbar = () => {
  const [activeNav, setActiveNav] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPos = window.scrollY + 200;

      sections.forEach((section) => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          setActiveNav(`#${section.id}`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <a href="#home" className={`smooth-scroll ${activeNav === '#home' ? 'active' : ''}`}><AiOutlineHome /></a>
      <a href="#about" className={`smooth-scroll ${activeNav === '#about' ? 'active' : ''}`}><AiOutlineUser /></a>
      <a href="#experience" className={`smooth-scroll ${activeNav === '#experience' ? 'active' : ''}`}><BiBook /></a>
      <a href="#portfolio" className={`smooth-scroll ${activeNav === '#portfolio' ? 'active' : ''}`}><RiServiceLine /></a>
      <a href="#contact" className={`smooth-scroll ${activeNav === '#contact' ? 'active' : ''}`}><BiMessageSquareDetail /></a>
    </nav>
  );
};

export default Topbar;

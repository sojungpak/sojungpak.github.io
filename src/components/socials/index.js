import React from 'react';
import './style.scss';

import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { BsMedium } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';

const Socials = (props) => {
  return (
    <div id="socialsRow">
      <a href="https://www.linkedin.com/in/sojung-pak-a848561b1"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        key="LinkedIn"
      >
        <FaLinkedinIn />
      </a>

      <a href="https://www.instagram.com/sojungpak"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        key="Instagram"
      >
        <FaInstagram />
      </a>

      <a href="https://medium.com/@sojungp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Medium"
        key="Medium"
      >
        <BsMedium />
      </a>

      <a href="mailto:sojungpak21@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email"
        key="Email"
      >
        <HiMail />
      </a>
    </div>
  );
};

export default Socials;

import React, { useEffect } from 'react';
import './footer.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  return (
    <footer className='ft' data-aos="fade-up" data-aos-duration="1000">
      <a href='#' className='footer__logo' data-aos="fade-up" data-aos-delay="200">ASHEN MALINDU</a>

      <ul className='permalinks' data-aos="fade-up" data-aos-delay="400">
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__coyright" data-aos="fade-up" data-aos-delay="600">
        <small>&copy; 2025 Ashen Malindu. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/ME.jpg';
import HeaderSocials from './HeaderSocials';
import { useTypewriter } from 'react-simple-typewriter';

function Header() {
  const [typeEffect] = useTypewriter({
    words: [
      'Mobile Developer', 
      'MERN Stack Developer', 
      'Fullstack Developer', 
      'Persistent Explorer', 
      'Continuous Learner'
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <header>
      <div className="container header__container">
        <h5 data-aos="fade-up">Hello I'm</h5>
        <h1 data-aos="fade-up" data-aos-delay="100">Ashen Malindu</h1>
        <span 
          style={{ height: '20px', display: 'block', overflow: 'hidden' }} 
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          <h5>{typeEffect}</h5>
        </span>
        <CTA />
        <HeaderSocials />
        <div className="me" data-aos="zoom-in" data-aos-delay="300">
          <img src={ME} alt='me' />
        </div>
        <a href='#contact' className='scroll_down' data-aos="fade-up" data-aos-delay="400">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
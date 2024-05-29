import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/ME.jpg'
import HeaderSocials from './HeaderSocials'
import {useTypewriter} from 'react-simple-typewriter'

function Header() {
  const [typeEffect] = useTypewriter({ 
    words:['Mobile Developer', 'MERN Stack Developer', 'Fullstack Developer', 'Persistent Explorer',
    'Continuous Learner'
   ], 
    loop:{}, 
    typeSpeed:100, 
    deleteSpeed:40, 
  });
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ashen Malindu</h1>
        <span style={{height: '20px',display: 'block', overflow: 'hidden' }}><h5>{typeEffect}</h5></span>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
        <img src={ME} alt='me'/>  
        </div>
        < a href='#contact' className='scroll_down' >Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
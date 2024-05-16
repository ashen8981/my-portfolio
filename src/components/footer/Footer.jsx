import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='ft'>
      <a href='#' className='footer__logo'>ASHEN MALINDU</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer__coyright">
        <small>
        &copy; 2024 Ashen Malindu. All rights reserved.
          </small>
      </div>
    </footer>
  )
}

export default Footer
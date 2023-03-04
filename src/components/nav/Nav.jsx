import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {BiMessageAltDetail} from 'react-icons/bi'
import {RiCustomerService2Line} from 'react-icons/ri'
import { useState } from 'react'

function Nav() {
  const [activeNav, setActiveNav] =useState('#');
  return (
    <nav>
    <a href='#' onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} ><AiOutlineHome/> </a>
    <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
    <a href='#experience' onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBookAlt/> </a>
    <a href='#services' onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiCustomerService2Line/> </a>
    <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} ><BiMessageAltDetail/> </a>
    </nav>
  )
}

export default Nav
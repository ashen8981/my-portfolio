import React from 'react'
import {ImLinkedin} from 'react-icons/im'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
 

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href='' target='_blank'></a>
        <a href='https://www.linkedin.com/in/ashen-malindu-a07613208/' target='_blank'><ImLinkedin/></a>
        <a href='https://github.com/ashen8981' target='_blank'><BsGithub/></a>
        <a href='https://www.facebook.com/malindu.ashen' target='_blank'><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials
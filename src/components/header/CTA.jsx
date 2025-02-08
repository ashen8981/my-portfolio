import React from 'react'
import CV from '../../assets/ashen_malindu_cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a 
          href={CV} 
          download 
          className='btn' 
          data-aos="fade-right"
        >
          Download CV
        </a>
        <a 
          href='#contact' 
          className='btn btn-primary' 
          data-aos="fade-left"
        >
          Let's Talk
        </a>
    </div>
  )
}

export default CTA;

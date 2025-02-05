import React from 'react'
import './about.css'
import ME from '../../assets/ABOUT_ME.jpg'



function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image'/>
          </div>
        </div>
          <div className="about__content">
            <p>
              I am a Software Engineer, educated at the Institute of Technology, 
              University of Moratuwa, where I completed my academic studies. 
              I am passionate about full-stack development and seeking an opportunity to get experience 
              while applying my knowledge to the field and giving my best to the company.               
            </p>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>
      </div>
    </section>
  )
}

export default About
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
            <p>A third-year IT diplomat at the Institute of Technology, University of Moratuwa(NDT) who is passionate about Fullstack Development.
            I have a strong passion for coding. I enjoy collaborating with others, sharing my ideas and learning from my peers.
            I am always looking for ways to improve my skills. 
                           
            </p>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>
      </div>
    </section>
  )
}

export default About
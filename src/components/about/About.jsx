import React from 'react';
import './about.css';
import ME from '../../assets/ABOUT_ME.jpg';

function About() {
  return (
    <section id='about'>
      <h5 data-aos="fade-up">Get To Know</h5>
      <h2 data-aos="fade-up" data-aos-delay="100">About Me</h2>
      <div className="container about__container">
        <div className="about__me" data-aos="zoom-in" data-aos-delay="200">
          <div className="about__me-image" data-aos="rotate" data-aos-delay="300">
            <img src={ME} alt='About Me' />
          </div>
        </div>
        <div className="about__content" data-aos="fade-left" data-aos-delay="400">
          <p>
            I am a Software Engineer, a graduate of the Institute of Technology, University of Moratuwa, with a strong passion for full-stack development. 
            I am eager to gain hands-on experience while applying my knowledge and skills to real-world projects. 
            My goal is to contribute effectively to a dynamic team and continuously grow as a developer, delivering my best to the company.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
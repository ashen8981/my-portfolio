import React from 'react';
import 'aos/dist/aos.css';
import './services.css';
import { SiFlutter } from 'react-icons/si';
import { CgWebsite } from 'react-icons/cg';
import { TbSlideshow } from 'react-icons/tb';

function Services() {
  return (
    <section id="services">
      <h5 className="ex" data-aos="fade-up">Here is my</h5>
      <h2 data-aos="fade-up" data-aos-delay="100">Application Services</h2>

      <div className="container services__container">
        <article className="service" data-aos="fade-right" data-aos-delay="200">
          <div className="service__head">
            <h3>Mobile App Development</h3>
          </div>
          <div className="service__icon">
            <SiFlutter />
          </div>
          <ul className="service__list">
            <li>
              <p>Experienced in Flutter, Firebase, Kotlin, and MySQL for mobile app development.</p>
            </li>
          </ul>
        </article>

        <article className="service" data-aos="fade-up" data-aos-delay="300">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <div className="service__icon">
            <CgWebsite />
          </div>
          <ul className="service__list">
            <li>
              <p>I have knowledge about HTML/CSS/JavaScript and the React framework.</p>
            </li>
          </ul>
        </article>

        <article className="service" data-aos="fade-left" data-aos-delay="400">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <div className="service__icon">
            <TbSlideshow />
          </div>
          <ul className="service__list">
            <li>
              <p>I have worked with Adobe XD, Photoshop, and Illustrator during my university period.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
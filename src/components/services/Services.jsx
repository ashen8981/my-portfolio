import React from 'react'
import './services.css'
import {SiFlutter} from 'react-icons/si'
import {CgWebsite} from 'react-icons/cg'
import {TbSlideshow} from 'react-icons/tb'


function Services() {
  return (
    <section id='services'>
      <h5 className='ex'>Here is my</h5>
      <h2>Application Services</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Mobile App Development</h3>
          </div>
          <div className='service__icon'>
          <SiFlutter />
          </div>
          <ul className='service__list'>
            <li>
              <p>I have knowledge about the Flutter,Firebase mobile app development.</p>
            </li>
          </ul>
        </article>
        { /* end of mobile development*/}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <div className='service__icon'>
          <CgWebsite/> 
          </div>
          <ul className='service__list'>
            <li>
              <p> I have knowledge about the HTML/CSS/JavaScript and React framework.</p>
            </li>
          </ul>
        </article>
        { /* end of Web development*/}
        <article className='service'>
          <div className="service__head">
              <h3>UI/UX Design</h3> 
            </div>
            <div className='service__icon'>
            <TbSlideshow/>
            </div>
            <ul className='service__list'>
            <li>
              <p>I have worked with Adobe XD,Adobe Photoshop and Adobe illustrator in my university period.</p>
            </li>
          </ul>
        </article>
        { /*UI/UX Design*/}
      </div>
      </section>
  )
}

export default Services
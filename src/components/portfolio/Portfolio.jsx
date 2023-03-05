import React from 'react'
import './portfolio.css'
import ITUM from '../../assets/ITUM.png'
import VOTE from '../../assets/VOTE.png'
import COFFEE from '../../assets/COFFEE.png'

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5 className='ex12'>My Recent Projects</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        <article className='porfolio__item'>
          <div className="portfolio__item-image">
            <img src={VOTE} alt=''/>
            </div>
            <h3>Vote App</h3>
            <h5>Flutter,Firebase</h5>
            <a href='https://github.com/ashen8981/Poll_App.git' className='btn' target='_blank'>GitHub</a>
        </article>
        <article className='porfolio__item'>
          <div className="portfolio__item-image">
            <img src={ITUM} alt=''/>
            </div>
            <h3>ITUM Communication Platform</h3>
            <h5>Flutter,Firebase</h5>
            <a href='https://github.com/ashen8981/ITUM_Communication_Platform_V3.git' className='btn' target='_blank'>GitHub</a>
        </article>
        <article className='porfolio__item'>
          <div className="portfolio__item-image">
            <img src={COFFEE} alt=''/>
            </div>
            <h3>COFFEE APP</h3>
            <h5>Flutter</h5>
            <a href='https://github.com/ashen8981/Coffe_UI.git' className='btn' target='_blank'>GitHub</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
import React from 'react';
import './portfolio.css';
import 'aos/dist/aos.css';
import ITUM from '../../assets/ITUM.png';
import VOTE from '../../assets/VOTE.png';
import COFFEE from '../../assets/COFFEE.png';
import FUEL from '../../assets/FUEL.png';
import CAFE from '../../assets/CAFE.png';
import BLOG from '../../assets/BLOG.png';

function Portfolio() {
  return (
    <section id="portfolio">
      <h5 className="ex12" data-aos="fade-down">My Recent Projects</h5>
      <h2 data-aos="fade-up">Projects</h2>
      <div className="container portfolio__container">
        
        <article className="porfolio__item" data-aos="zoom-in">
          <div className="portfolio__item-image">
            <img src={VOTE} alt=""/>
          </div>
          <h3>Vote App</h3>
          <h5>Flutter, Firebase</h5>
          <a href="https://github.com/ashen8981/Poll_App.git" className="btn" target="_blank">GitHub</a>
        </article>

        <article className="porfolio__item" data-aos="flip-left">
          <div className="portfolio__item-image">
            <img src={ITUM} alt=""/>
          </div>
          <h3>ITUM Communication Platform</h3>
          <h5>Flutter, Firebase</h5>
          <a href="https://github.com/ashen8981/ITUM_Communication_Platform_V3.git" className="btn" target="_blank">GitHub</a>
        </article>

        <article className="porfolio__item" data-aos="fade-up">
          <div className="portfolio__item-image">
            <img src={COFFEE} alt=""/>
          </div>
          <h3>COFFEE APP</h3>
          <h5>Flutter</h5>
          <a href="https://github.com/ashen8981/Coffe_UI.git" className="btn" target="_blank">GitHub</a>
        </article>

        <article className="porfolio__item" data-aos="zoom-in">
          <div className="portfolio__item-image">
            <img src={FUEL} alt=""/>
          </div>
          <h3>Fuel Management APP</h3>
          <h5>Flutter</h5>
          <a href="https://github.com/ashen8981/Fuel_App.git" className="btn" target="_blank">GitHub</a>
        </article>

        <article className="porfolio__item" data-aos="flip-right">
          <div className="portfolio__item-image">
            <img src={CAFE} alt=""/>
          </div>
          <h3>Perkup Cafe Website</h3>
          <h5>React JS, Vite, Tailwind CSS</h5>
          <a href="https://perkupcafe1.netlify.app/" className="btn" target="_blank" rel="noopener noreferrer">Visit Website</a>
        </article>

        <article className="porfolio__item" data-aos="fade-up">
          <div className="portfolio__item-image">
            <img src={BLOG} alt=""/>
          </div>
          <h3>Blog Site</h3>
          <h5>React Js, Express, Node Js, MongoDB</h5>
          <a href="https://github.com/ashen8981/blog_website_MERN.git" className="btn" target="_blank" rel="noopener noreferrer">GitHub</a>
        </article>
        
      </div>
    </section>
  );
}

export default Portfolio;
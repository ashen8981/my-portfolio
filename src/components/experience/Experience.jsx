import React from 'react';
import './experience.css';
import { AiFillHtml5 } from 'react-icons/ai';
import { SiCss3 } from 'react-icons/si';
import { TbBrandJavascript } from 'react-icons/tb';
import { SiReact } from 'react-icons/si';
import { SiFlutter } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
import { IoLogoNodejs } from 'react-icons/io';
import { TbBrandFirebase } from 'react-icons/tb';
import { SiPython } from 'react-icons/si';
import { SiGithub } from 'react-icons/si';
import { SiWordpress } from 'react-icons/si';
import { TbBrandKotlin } from "react-icons/tb";
import { SiSentry } from "react-icons/si";

function Experience() {
  return (
    <section id="experience">
      <h5 className="ex1" data-aos="fade-up">What Skills I Have</h5>
      <h2 data-aos="fade-up" data-aos-delay="100">My Skills</h2>

      <div className="container experience__container">
        <article className="skill" data-aos="zoom-in" data-aos-delay="200">
          <AiFillHtml5 className="skill_icon" />
          <h4>HTML5</h4>
        </article>
        <article className="skill" data-aos="zoom-in" data-aos-delay="300">
          <SiCss3 className="skill_icon" />
          <h4>CSS3</h4>
        </article>
        <article className="skill" data-aos="zoom-in" data-aos-delay="400">
          <TbBrandJavascript className="skill_icon" />
          <h4>JavaScript</h4>
        </article>
        <article className="skill" data-aos="zoom-in" data-aos-delay="500">
          <SiReact className="skill_icon" />
          <h4>React</h4>
        </article>
        <article className="skill" data-aos="zoom-in" data-aos-delay="600">
          <SiFlutter className="skill_icon" />
          <h4>Flutter</h4>
        </article>
        <article className="skill" data-aos="zoom-in" data-aos-delay="700">
          <FaJava className="skill_icon" />
          <h4>Java</h4>
        </article>
        <article className="skill" data-aos="zoom-in" data-aos-delay="800">
          <SiMysql className="skill_icon" />
          <h4>Mysql</h4>
        </article>
        <article className="skill" data-aos="zoom-in" data-aos-delay="900">
          <IoLogoNodejs className="skill_icon" />
          <h4>Nodejs</h4>
        </article>
        <article className="skill" data-aos="zoom-in" data-aos-delay="1000">
          <TbBrandFirebase className="skill_icon" />
          <h4>Firebase</h4>
        </article>
        <article className="skill" data-aos="zoom-in" data-aos-delay="1100">
          <SiWordpress className="skill_icon" />
          <h4>Wordpress</h4>
        </article>
        <article className="skill" data-aos="zoom-in" data-aos-delay="1200">
          <SiPython className="skill_icon" />
          <h4>Python</h4>
        </article>
        <article className="skill" data-aos="zoom-in" data-aos-delay="1300">
          <SiGithub className="skill_icon" />
          <h4>Github</h4>
        </article>
        <article className="skill" data-aos="zoom-in" data-aos-delay="1400">
          <TbBrandKotlin className="skill_icon" />
          <h4>Kotlin</h4>
        </article>
        <article className="skill" data-aos="zoom-in" data-aos-delay="1500">
          <SiSentry className="skill_icon" />
          <h4>Sentry</h4>
        </article>
      </div>
    </section>
  );
}

export default Experience;
import React from 'react'
import './experience.css'
import {AiFillHtml5} from 'react-icons/ai'
import {SiCss3} from 'react-icons/si'
import {TbBrandJavascript} from 'react-icons/tb'
import {SiReact} from 'react-icons/si'
import {SiFlutter} from 'react-icons/si'
import {FaJava} from 'react-icons/fa'
import {SiMysql} from 'react-icons/si'
import {IoLogoNodejs} from 'react-icons/io'
import {TbBrandFirebase} from 'react-icons/tb'
import {SiPython} from 'react-icons/si'
import {SiGithub} from 'react-icons/si'
import {SiWordpress} from 'react-icons/si'


function Experience() {
  return (
    <section id='experience'>
      
      <h5 className='ex'>What Skills I Have</h5>
      <h2>My Skills</h2>
      
      <div className="container experience__container">
        <article className='skill'>
          <AiFillHtml5 className='skill_icon'/>
          <h4>HTML5</h4>
        </article>
        <article className='skill'>
          <SiCss3 className='skill_icon'/>
          <h4>CSS3</h4>
        </article>
        <article className='skill'>
          <TbBrandJavascript className='skill_icon'/>
          <h4>JavaScript</h4>
        </article>
        <article className='skill'>
          <SiReact className='skill_icon'/>
          <h4>React</h4>
        </article>
        <article className='skill'>
          <SiFlutter className='skill_icon'/>
          <h4>Flutter</h4>
        </article>
        <article className='skill'>
          <FaJava className='skill_icon'/>
          <h4>Java</h4>
        </article>
        <article className='skill'>
          <SiMysql className='skill_icon'/>
          <h4>Mysql</h4>
        </article>
        <article className='skill'>
          <IoLogoNodejs className='skill_icon'/>
          <h4>Nodejs</h4>
        </article>
        <article className='skill'>
          <TbBrandFirebase className='skill_icon'/>
          <h4>Firebase</h4>
        </article>
        <article className='skill'>
          <SiWordpress className='skill_icon'/>
          <h4>Wordpress</h4>
        </article>
        <article className='skill'>
          <SiPython className='skill_icon'/>
          <h4>Python</h4>
        </article>
        <article className='skill'>
          <SiGithub className='skill_icon'/>
          <h4>Github</h4>
        </article>
        </div>
    </section>
  )
}

export default Experience
import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import {FaUniversity} from 'react-icons/fa'
import {TbTools} from 'react-icons/tb'
import {IoIosFitness} from 'react-icons/io'

const About = () => {
  return (
    <section id='about'>
      <h5>Conóceme más</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="About me" />
          </div>
        </div>
      
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaUniversity className='about__icon'/>
              <h5>Ing. Industrial</h5>
              <small>Politécnico Grancolombiano</small>
            </article>

            <article className='about__card'>
              <TbTools className='about__icon'/>
              <h5>Programación Software</h5>
              <small>U. Sergio Arboleda</small>
            </article>

            <article className='about__card'>
              <IoIosFitness className='about__icon'/>
              <h5>Bootcamp PeakU</h5>
              <small>+ Platzi</small>
            </article>
          </div>
        

          <p>
          Ingeniero industrial y programador de software fullstack, con habilidades para solucionar del lado FrontEnd / BackEnd y gestor de proyectos (Scrum).<br/><br/>
          Me defino como una persona con liderazgo, buena disposición, trabajo en equipo, siempre buscando aprender cada día más y poder aportar mis conocimientos.

          </p>

          <a href="#contact" className='btn btn-primary'>Contáctame</a>
        </div>
      </div>
    </section>
  )
}

export default About
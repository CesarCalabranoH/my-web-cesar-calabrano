import React from 'react'
import './experience.css'
import {BsStarFill} from 'react-icons/bs'
import {BsStarHalf} from 'react-icons/bs'
import {BsStar} from 'react-icons/bs'
import {AiOutlineHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {IoLogoJavascript} from 'react-icons/io'
import {BsFillBootstrapFill} from 'react-icons/bs'
import {FaVuejs} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
import {FaAngular} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
import {DiDotnet} from 'react-icons/di'
import {SiDjango} from 'react-icons/si'
import {SiSpring} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {SiGoland} from 'react-icons/si'
import {GrMysql} from 'react-icons/gr'
import {SiMongodb} from 'react-icons/si'
import {SiGooglecloud} from 'react-icons/si'
import {SiMicrosoftazure} from 'react-icons/si'
import {SiVisualstudiocode} from 'react-icons/si'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Mis conocimientos</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className="experience__frontend">
          <h3>Frontend Developer</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiOutlineHtml5 className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small><BsStarFill /><BsStarFill /><BsStar /><BsStar /></small>
              </div>
            </article>
            <article className='experience__details'>
              <DiCss3 className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small><BsStarFill /><BsStarFill /><BsStar /><BsStar /></small>
              </div>
            </article>
            <article className='experience__details'>
              <IoLogoJavascript className='experience__details-icon' />
              <div>
                <h4>Javascript</h4>
                <small><BsStarFill /><BsStarFill /><BsStarFill /><BsStar /></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillBootstrapFill className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small><BsStarFill /><BsStarHalf /><BsStar /><BsStar /></small>
              </div>
            </article>
            <article className='experience__details'>
              <FaVuejs className='experience__details-icon' />
              <div>
                <h4>Vue</h4>
                <small><BsStarFill /><BsStarHalf /><BsStar /><BsStar /></small>
              </div>
            </article>
            <article className='experience__details'>
              <FaReact className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small><BsStarFill /><BsStarFill /><BsStarHalf /><BsStar /></small>
              </div>
            </article>
            <article className='experience__details'>
              <FaAngular className='experience__details-icon' />
              <div>
                <h4>Angular</h4>
                <small><BsStarFill /><BsStarHalf /><BsStar /><BsStar /></small>
              </div>
            </article>
            <article className='experience__details'>
              <DiDotnet className='experience__details-icon' />
              <div>
                <h4>.Net (C#)</h4>
                <small><BsStarFill /><BsStarFill /><BsStarHalf /><BsStar /></small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillGithub className='experience__details-icon' />
              <div>
                <h4>Git / GitHub</h4>
                <small><BsStarFill /><BsStarFill /><BsStarHalf /><BsStar /></small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Developer</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <SiDjango className='experience__details-icon' />
              <div>
                <h4>Django (Python)</h4>
                <small><BsStarFill /><BsStarFill /><BsStarHalf /><BsStar /></small>
              </div>
            </article>
            <article className='experience__details'>
              <SiGoland className='experience__details-icon' />
              <div>
                <h4>Golang</h4>
                <small><BsStarFill /><BsStarHalf /><BsStar /><BsStar /></small>
              </div>
            </article>
            <article className='experience__details'>
              <FaNodeJs className='experience__details-icon' />
              <div>
                <h4>NodeJs</h4>
                <small><BsStarFill /><BsStarFill /><BsStar /><BsStar /></small>
              </div>
            </article>
            <article className='experience__details'>
              <SiSpring className='experience__details-icon' />
              <div>
                <h4>Spring (Java)</h4>
                <small><BsStarFill /><BsStar /><BsStar /><BsStar /></small>
              </div>
            </article>
            <article className='experience__details'>
              <GrMysql className='experience__details-icon' />
              <div>
                <h4>MySql</h4>
                <small><BsStarFill /><BsStar /><BsStar /><BsStar /></small>
              </div>
            </article>
            <article className='experience__details'>
              <SiMongodb className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small><BsStarFill /><BsStar /><BsStar /><BsStar /></small>
              </div>
            </article>
            <article className='experience__details'>
              <SiGooglecloud className='experience__details-icon' />
              <div>
                <h4>Google Cloud</h4>
                <small><BsStarFill /><BsStar /><BsStar /><BsStar /></small>
              </div>
            </article>
            <article className='experience__details'>
              <SiMicrosoftazure className='experience__details-icon' />
              <div>
                <h4>Azure</h4>
                <small><BsStarFill /><BsStar /><BsStar /><BsStar /></small>
              </div>
            </article>
            <article className='experience__details'>
              <SiVisualstudiocode className='experience__details-icon' />
              <div>
                <h4>VS Code</h4>
                <small><BsStarFill /><BsStarFill /><BsStarFill /><BsStar /></small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
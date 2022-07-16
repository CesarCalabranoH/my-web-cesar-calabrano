import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Trabajemos juntos...</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>Cesar.CalabranoH@gmail.com</h5>
            <a href="mailto:cesar.calabranoh@gmail.com" target='_blank'>Enviar el mensaje</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+57 3204179557</h5>
            <a href="https://api.whatsapp.com/send?phone=573204179557" target='_blank'>Escribeme</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact
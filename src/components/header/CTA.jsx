import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Descarga HV</a>
      <a href="#contact" className='btn btn-primary'>Contáctame</a>
    </div>
  )
}

export default CTA

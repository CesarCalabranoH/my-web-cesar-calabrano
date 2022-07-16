import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Calculadora Fitness',
    github: 'https://github.com',
    demo: 'direccion demo'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Calculadora Fitness',
    github: 'https://github.com',
    demo: 'direccion demo'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Calculadora Fitness',
    github: 'https://github.com',
    demo: 'direccion demo'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mis trabajos recientes</h5>
      <h2>Portfolio</h2>

      <Swiper className="container portfolio__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView= {3}
      pagination={{ clickable: true }}>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <SwiperSlide key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Portfolio
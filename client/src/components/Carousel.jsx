import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap'

export default class Carousela extends Component {
  render() {
    return (
      <div className="carouselOuter">
          <Carousel>
           <Carousel.Item className="item">
             <img className="img" src="../assets/carousel_first.png" alt="glass orb" />
             <Carousel.Caption>
               <p className="headerSlide">Generamos procesos que agregan valor</p>
               <p >
               Establecida en 2009 bajo estándares de la Confederación Alemana de Cooperativas -DGRV-.
               </p>
               <p>
               Apoyamos el desarrollo y fortalecimiento del sector de las finanzas incluyentes en Latinoamérica.</p>
             </Carousel.Caption>
           </Carousel.Item>
           <Carousel.Item className="item">
             <img className="img" src="../assets/emerald.jpg" alt="emerald orb" />
             <Carousel.Caption>
               <p className="headerSlide">Second image</p>
             </Carousel.Caption>
           </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}

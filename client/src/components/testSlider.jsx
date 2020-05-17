import React, { Component } from 'react'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

export default class MyCarousel extends Component {
  render() {
    return (
      <Carousel arrows infinite slidesPerPage={3}>
        <img alt="..." src="../../assets/Twitter-grey.svg" />
        <img alt="..." src="../../assets/logo-main.svg" />
        <img alt="..." src="../../assets/Twitter-grey.svg" />
      </Carousel>
    )
  }
}
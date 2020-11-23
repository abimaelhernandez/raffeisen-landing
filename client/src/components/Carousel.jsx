import React,{ Component } from 'react'
import Fade from 'react-reveal/Fade'
import PropTypes from 'prop-types'

export default class Slider extends Component {
  render() {
    const { slidesInfo, sectionRef } = this.props
    return (
      <div className="slider-container" id={sectionRef}>
        <video
          className="slider-container-mobileVideo"
          playsInline autoPlay muted loop>
          <source src="../../assets/videos/light-sphere.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
        </video>
        <div
          id="main_carousel"
          className="carousel slide"
          data-ride="carousel"
          data-interval="false"
        >
          <div className="carousel-inner">
            <div className="carousel-item active first-slide">
              <div className="first-slide-content">
                <div className="first-slide-content-text">
                  <div className="first-slide-content-text-title">
                    {slidesInfo[0].title}
                  </div>
                  <div className="first-slide-content-text-body">
                    <p className="first-slide-content-text-body-paragraph">
                      {slidesInfo[0].mainParahraph}
                    </p>
                    <p className="first-slide-content-text-body-paragraph">
                      {slidesInfo[0].secondaryParagraph}
                    </p>
                  </div>
                  <div className="first-slide-content-text-logo">
                    <div className="content" />
                  </div>
                </div>
                <div className="img-container">
                  <div className="orange-plus" />
                </div>
              </div>
            </div>
            <div className="carousel-item second-slide">
              <div className="second-slide-content">
                <div className="second-slide-content-text">
                  <div className="second-slide-content-text-title">
                    {slidesInfo[1].title}
                  </div>
                </div>
                <div className="img-container">
                  <div className="yellow-plant" />
                </div>
              </div>
            </div>
            <div className="carousel-item third-slide">
              <div className="third-slide-content">
                <div className="third-slide-content-text">
                  <Fade left>
                    <div className="third-slide-content-text-title">
                      {slidesInfo[2].title}
                    </div>
                  </Fade>
                </div>
                <div className="img-container">
                  <div className="green-arrows"/>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#main_carousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            >
            </span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#main_carousel" role="button" data-slide="next">
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            >
            </span>
            <span className="sr-only">Next</span>
          </a>
          <ol className="carousel-indicators">
            <li data-target="#main_carousel" data-slide-to="0" className="active">
            </li>
            <li data-target="#main_carousel" data-slide-to="1">
            </li>
            <li data-target="#main_carousel" data-slide-to="2">
            </li>
          </ol>
        </div>
      </div>
    )
  }
}


Slider.propTypes = {
  slidesInfo: PropTypes.instanceOf(Object),
  sectionRef: PropTypes.string
}

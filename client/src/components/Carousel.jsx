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
            <div
              className="carousel-item active first-slide"
              style={{backgroundImage: `url(../../assets/images/sphere-on-stump-min.jpg)`}}
            >
              <div className="first-slide-content">
                <Fade left>
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
                    <div
                      className="first-slide-content-text-logo"
                      style={{backgroundImage: `url(../../assets/logos/white_logo.svg)`}}
                    >
                    </div>
                  </div>
                </Fade>
                <Fade left>
                  <div className="img-container">
                    <img
                      src="../../assets/icons/Orange-Plus.svg"
                      alt={slidesInfo[0].title}/>
                  </div>
                </Fade>
              </div>
            </div>
            <div
              className="carousel-item second-slide"
              style={{backgroundImage: `url(../../assets/images/sewing-machine-min.jpg)`}}
            >
              <div className="second-slide-content">
                <div className="second-slide-content-img-container">
                  <Fade down>
                    <img
                      className="d-block"
                      src="../../assets/icons/Yellow-Plant.svg"
                      alt={slidesInfo[1].title}
                    />
                  </Fade>
                </div>
                <div className="second-slide-content-text">
                  <Fade up>
                    <div className="carousel-caption second-slide-content-text-title">
                      {slidesInfo[1].title}
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
            <div
              className="carousel-item third-slide"
              style={{backgroundImage: `url(../../assets/images/slowed-arrow-min.jpg)`}}
            >
              <div className="third-slide-content">
                <div className="third-slide-content-img-container">
                  <Fade left>
                    <img
                      src="../../assets/icons/Green-Arrows.svg"
                      alt={slidesInfo[2].title}
                    />
                  </Fade>
                </div>
                <div className="third-slide-content-text">
                  <Fade left>
                    <div className="third-slide-content-text-title">
                      {slidesInfo[2].title}
                    </div>
                  </Fade>
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
              style={{backgroundImage: `url(../../assets/icons/flecha-blanca.svg)`}}
            >
            </span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#main_carousel" role="button" data-slide="next">
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
              style={{backgroundImage: `url(../../assets/icons/flecha-blanca.svg)`}}
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

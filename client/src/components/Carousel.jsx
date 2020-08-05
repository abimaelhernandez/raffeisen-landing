import React,{ Component } from 'react'
import Fade from 'react-reveal/Fade'
import PropTypes from 'prop-types'

export default class Slider extends Component {
  render() {
    const { slidesInfo, sectionRef, aboutUsSlider } = this.props
    return (
      <div className="slider-container" id={sectionRef}>
        <div className="slider-container-overlay" />
        <video className="slider-container-mobileVideo" playsInline autoPlay muted loop>
          <source src="../../assets/videos/GlassSphere.mp4" type="video/mp4" />
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
              style={{backgroundImage: `url(../../assets/images/sphere-on-stump.jpg)`}}
            >
              <Fade left>
                <div className="img-container">
                  <img
                    src="../../assets/icons/Orange-Plus.svg"
                    alt={slidesInfo[0].title}/>
                </div>
              </Fade>
              <Fade left>
                <div className="carousel-caption caption-container">
                  <span className="dot"></span>
                  <div className="caption-container-title">
                    {slidesInfo[0].title}
                  </div>
                  <div className="caption-container-paragraphContainer">
                    <p className="caption-container-paragraph">
                      {slidesInfo[0].mainParahraph}
                    </p>
                    <p className="caption-container-paragraph">
                      {slidesInfo[0].secondaryParagraph}
                    </p>
                    <img className="slide-one-img" src="../../assets/logos/logo-die-geno.svg" alt="Die Genossenschaften"/>
                  </div>
                </div>
              </Fade>
            </div>
            <div
              className="carousel-item second-slide"
              style={{backgroundImage: `url(../../assets/images/sewing-machine.jpeg)`}}
            >
              <div className="img-container">
                <Fade down>
                  <img
                    className="d-block"
                    src="../../assets/icons/Yellow-Plant.svg"
                    alt={slidesInfo[1].title}/>
                </Fade>
              </div>
              <Fade up>
                <div className="carousel-caption caption-container-2">
                  <span className="dot"></span>
                  <div className="caption-container-2-title">
                    {slidesInfo[1].title}
                  </div>
                </div>
              </Fade>
              <div
                className="aboutus shorterAboutus"
                style={{backgroundImage: `url(../../assets/icons/AboutUs-ES.svg)`}}
                onClick={aboutUsSlider()}
                onKeyDown={aboutUsSlider()}
                role="button"
                tabIndex={0}
              />
            </div>
            <div
              className="carousel-item third-slide"
              style={{backgroundImage: `url(../../assets/images/slowed-arrow.jpg)`}}
            >
              <div className="img-container">
                <Fade left>
                  <img
                    src="../../assets/icons/Green-Arrows.svg"
                    alt={slidesInfo[2].title}/>
                </Fade>
              </div>
              <Fade left>
                <div className="carousel-caption caption-container-3">
                  <span className="dot"></span>
                  <div className="caption-container-3-title">
                    {slidesInfo[2].title}
                  </div>
                </div>
              </Fade>
                <div
                  className="aboutus shorterAboutus"
                  style={{backgroundImage: `url(../../assets/icons/AboutUs-ES.svg)`}}
                  onClick={aboutUsSlider()}
                  onKeyDown={aboutUsSlider()}
                  role="button"
                  tabIndex={0}
                />
            </div>
          </div>
          <a className="carousel-control-prev" href="#main_carousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#main_carousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
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
  sectionRef: PropTypes.string,
  aboutUsSlider: PropTypes.instanceOf(Object)
}

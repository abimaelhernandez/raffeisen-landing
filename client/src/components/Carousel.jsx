import React,{ Component } from 'react'
import PropTypes from 'prop-types'

export default class Slider extends Component {
  render (){
    const { slidesInfo } = this.props
    return (
      <div className="slider-container" id="inicio">
        <video className="slider-container-webVideo" playsInline autoPlay muted loop>
          <source src="../../assets/videos/RowingBoats.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
        </video>
        <video className="slider-container-mobileVideo" playsInline autoPlay muted loop>
          <source src="../../assets/videos/GlassSphere.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
        </video>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
          data-interval="false"
          >
          <div className="carousel-inner">
            <div className="carousel-item active first-slide">
              <div className="img-container">
                <img
                  src="../../assets/icons/Orange-Plus.svg"
                  alt="..."/>
              </div>
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
                </div>
              </div>
            </div>
            <div className="carousel-item second-slide">
              <div className="img-container">
                <img
                  className="d-block w-50"
                  src="../../assets/icons/Yellow-Plant.svg"
                  alt="..."/>
              </div>
              <div className="carousel-caption caption-container-2">
                <span className="dot"></span>
                <div className="caption-container-2-title">
                  {slidesInfo[1].title}
                </div>
              </div>
            </div>
            <div className="carousel-item third-slide">
              <div className="img-container">
                <img
                  src="../../assets/icons/Green-Arrows.svg"
                  alt="..."/>
              </div>
              <div className="carousel-caption caption-container-3">
                <span className="dot"></span>
                <div className="caption-container-3-title">
                  {slidesInfo[2].title}
                </div>
              </div>
            </div>
          </div>
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active">
            </li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1">
            </li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2">
            </li>
          </ol>
        </div>
      </div>
    )
  }
}


Slider.propTypes = {
  slidesInfo: PropTypes.instanceOf(Object)
}

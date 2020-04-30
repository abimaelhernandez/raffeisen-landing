import React from 'react'

export default function Slider(){
    return (
      <div className="slider-container">
        <video className="slider-container-webVideo" autoPlay muted loop>
          <source src="../../assets/desk.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
        </video>
        <video className="slider-container-mobileVideo" autoPlay muted loop>
          <source src="../../assets/mobile-video.mp4" type="video/mp4" />
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
                  src="../../assets/icons/asset1.svg"
                  alt="..."/>
              </div>
              <div className="carousel-caption caption-container">
                <span className="dot"></span>
                <div className="caption-container-title">
                  Generamos procesos que agregan valor
                </div>
                <div className="caption-container-paragraphContainer">
                  <p className="caption-container-paragraph">
                    Establecida en 2009 bajo estándares de la Confederación Alemana de Cooperativas -DGRV-.
                  </p>
                  <p className="caption-container-paragraph">
                    Apoyamos el desarrolloy fortalecimiento del sector de las finanzas
                    incluyentes en Latinoamérica.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item second-slide">
              <div className="img-container">
                <img
                  className="d-block w-50"
                  src="../../assets/icons/asset3.svg"
                  alt="..."/>
              </div>
              <div className="carousel-caption caption-container-2">
                <span className="dot"></span>
                <div className="caption-container-2-title">
                  Diseño de soluciones a medida
                </div>
              </div>
            </div>
            <div className="carousel-item third-slide">
              <div className="img-container">
                <img
                  src="../../assets/icons/asset2.svg"
                  alt="..."/>
              </div>
              <div className="carousel-caption caption-container-3">
                <span className="dot"></span>
                <div className="caption-container-3-title">
                  Planeación inteligente para la toma de decisiones
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

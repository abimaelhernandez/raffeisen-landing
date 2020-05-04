import React from 'react'

export default function InovationBanner(){
    return (
      <div className="inovation-banner">
        <img
          className="circleImage"
          src="../../assets/icons/Plus-orange.svg"
          alt="..."/>
        <div id="mainTitle" className="inovation-banner-main-container">
            <span className="inovation-banner-main-container-title">
              Innovación para <br/> el desarrollo estratégico
            </span>
          </div>
          <div id="content" className="inovation-banner-contentContainer">
            <span className="dot"></span>
            <div className="inovation-banner-contentContainer-title">
             Modelo de gestión
            </div>
            <p className="inovation-banner-contentContainer-paragraph">
             Basamos nuestra oferta de servicios en metodologías probadas y apegadas a la realidad de nuestros clientes, resultado de años de experiencia en el sector, acompañado del profesionalismo de un equipo de consultoría especializado.
            </p>
            <p>
             Soportamos nuestros procesos en la innovación tecnológica a través de herramientas que promueven la gestión estratégica integral.
            </p>
          </div>
          <img
            className="squareImage"
            src="../../assets/icons/asset3.svg"
            alt="..."/>
      </div>
    )
}

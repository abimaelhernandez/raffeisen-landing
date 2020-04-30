import React, { Component } from 'react'


export default class LandingBanner extends Component {

  
  render() {
    return (
      <div className="landingBanner" id='hideMe'>
        <div className="landingBanner-mainContainer">
         <img src="../assets/Raiffeisen-White.svg" alt="Main Logo" className="landingBanner-mainContainer-mainLogo fade-in "/>
        </div>
        <div className="landingBanner-secondaryContainer">
          <img src="../assets/Analitica.svg" alt="Analitica Logo" className="landingBanner-secondaryContainer-analitica"/>
          <img src="../assets/Consultoria.svg" alt="Consultoria Logo" className="landingBanner-secondaryContainer-consultoria"/>
          <img src="../assets/Capacitacion.svg" alt="Capacitacion Logo" className="landingBanner-secondaryContainer-capacitacion"/>
        </div>
      </div>
    )
  }
}

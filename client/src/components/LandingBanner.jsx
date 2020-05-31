import React, { Component } from 'react'


export default class LandingBanner extends Component {

  
  render() {
    return (
      <div className="landingBanner" id='hideMe'>
        <div className="landingBanner-mainContainer">
         <img src="../assets/logos/Raiffeisen-White.svg" alt="Main Logo" className="landingBanner-mainContainer-mainLogo fade-in "/>
        </div>
        <div className="landingBanner-secondaryContainer">
          <img src="../assets/icons/Analitica.svg" alt="Analitica Logo" className="landingBanner-secondaryContainer-analitica"/>
          <img src="../assets/icons/Consultoria.svg" alt="Consultoria Logo" className="landingBanner-secondaryContainer-consultoria"/>
          <img src="../assets/icons/Capacitacion.svg" alt="Capacitacion Logo" className="landingBanner-secondaryContainer-capacitacion"/>
        </div>
      </div>
    )
  }
}

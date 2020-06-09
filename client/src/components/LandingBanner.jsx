import React, { Component } from 'react'


export default class LandingBanner extends Component {
  render() {
    return (
      <div className="landingBanner" id='hideMe'>
        <div className="landingBanner-mainContainer">
         <img src="../assets/logos/Raiffeisen-White.svg" alt="Main Logo" className="landingBanner-mainContainer-mainLogo fade-in "/>
        </div>
        <div className="landingBanner-secondaryContainer">
          <img src="../assets/icons/Analytics.svg" alt="Analitica Logo" className="landingBanner-secondaryContainer-analytics"/>
          <img src="../assets/icons/Consultancy.svg" alt="Consultoria Logo" className="landingBanner-secondaryContainer-consultancy"/>
          <img src="../assets/icons/Training.svg" alt="Capacitacion Logo" className="landingBanner-secondaryContainer-training"/>
        </div>
      </div>
    )
  }
}

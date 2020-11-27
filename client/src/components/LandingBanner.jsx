import React, { Component } from 'react'


export default class LandingBanner extends Component {
  render() {
    return (
      <div className="landingBanner" id='hideMe'>
        <div className="landingBanner-mainContainer">
         <img src="../assets/logos/Raiffeisen-White.svg" alt="Main Logo" className="landingBanner-mainContainer-mainLogo fade-in "/>
        </div>
        <div className="landingBanner-secondaryContainer">
          <div className="landingBanner-secondaryContainer-analytics">
            <div className="logo"/>
            <p className="text">Analtica</p>
          </div>
          <div className="landingBanner-secondaryContainer-consultancy">
            <div className="logo"/>
            <p className="text">Consultoría</p>
          </div>
          <div className="landingBanner-secondaryContainer-training">
            <div className="logo"/>
            <p className="text">Capacitación</p>
          </div>
        </div>
      </div>
    )
  }
}

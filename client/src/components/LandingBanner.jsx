import React, { Component } from 'react'


export default class LandingBanner extends Component {

  
  render() {
    return (
      <div className="landingBanner" id='hideMe'>
        <div className="landingBanner-container">
         <img src="../assets/Raiffeisen-White.svg" alt="Main Logo" className="landingBanner-container-mainLogo"/>
        </div>
      </div>
    )
  }
}

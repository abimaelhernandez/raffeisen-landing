import React, { Component } from 'react'


export default class PageFooter extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-items">
          <img src="../assets/Twitter-white.svg" alt="twitter-logo" className="footer-icons"/>
          <span><a href="https://twitter.com/RaiffeisenLatam" target="_blank" rel="noopener noreferrer">@RaiffeisenLatam</a></span>
        </div>
        <div className="footer-items">
          <img src="../assets/Email.svg" alt="email-logo" className="footer-icons"/>
          <span><strong><a href="mailto:info@rflatina.com" target="_blank" rel="noopener noreferrer">info@rflatina.com</a></strong></span>
        </div>       
        <div className="footer-items">
            <img src="../assets/Phone.svg" alt="phone-logo" className="footer-icons"/>
            <span>Ciudad de México, México 
              <a href="tel:+52-55-5037-5992"> +52.55.5037.5992</a> | 
              <a href="tel:+52-55-6273-8897">   +52.55.6273.8897</a>
            <span>
              <br/>
            </span>Asunción, Paraguay <a href="tel:+595-21-62-996">+595.21.62.996</a></span>
        </div>
        <div className="footer-items">
          <img src="../assets/Globe.svg" alt="globe-logo" className="footer-icons"/>
          <span>Confederación Alemana de Cooperativas <strong><a href="https://www.dgrv.org" target="_blank" rel="noopener noreferrer">www.dgrv.org</a></strong></span>
        </div>
        <br/>
        <div className="footer-dots">
          <span className="footer-dots-dot"></span>
          <span className="footer-dots-dot"></span>
          <span className="footer-dots-dot"></span>
          <span className="footer-dots-dot"></span>
          <span className="footer-dots-dot"></span>
        </div>
      </footer>
    )
  }
}

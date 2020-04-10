import React, { Component } from 'react'


export default class FooteR extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__items">
          <img src="https://img.icons8.com/offices/30/000000/twitter.png" alt="Twitter" className="footer__icons"/>
          <span><a href="https://twitter.com/RaiffeisenLatam" target="_blank" rel="noopener noreferrer">@RaiffeisenLatam</a></span>
        </div>
        <div className="footer__items">
          <img src="../assets/email.png" alt="Email" className="footer__icons"/>
          <span><strong><a href="https://gmail.com" target="_blank" rel="noopener noreferrer">info@rflatina.com</a></strong></span>
        </div>       
        <div className="footer__items">
            <img src="../assets/phone.png" alt="Email" className="footer__icons"/>
            <span>Ciudad de México, México +52.55.5037.5992 | +52.55.6273.8897<span>
              <br/>
            </span>Asunción, Paraguay +595.21.62.996</span>
        </div>
        <div className="footer__items">
          <img src="../assets/globe.png" alt="Email" className="footer__icons"/>
          <span>Confederación Alemana de Cooperativas <strong><a href="https://www.dgrv.org" target="_blank" rel="noopener noreferrer">www.dgrv.org</a></strong></span>
        </div>
        <br/>
        <div className="footer__dots">
          <span className="footer__dots__dot"></span>
          <span className="footer__dots__dot"></span>
          <span className="footer__dots__dot"></span>
          <span className="footer__dots__dot"></span>
          <span className="footer__dots__dot"></span>
        </div>
      </footer>
    )
  }
}

import React, { Component } from 'react'
import Slide from 'react-reveal/Fade'
import Fade from 'react-reveal/Bounce'
import PropTypes from 'prop-types'

export default class PageFooter extends Component {
  render() {
    const { footerObject, sectionRef } = this.props
    return (
      <footer className="footer" id={sectionRef}>
        <Slide right>
          <div className="footer-items">
            <img src="../assets/icons/Twitter-white.svg" alt="twitter-logo" className="footer-icons footer-icons-twitter"/>
            <span><a href="https://twitter.com/RaiffeisenLatam" target="_blank" rel="noopener noreferrer">@RaiffeisenLatam</a></span>
          </div>
        </Slide>
        <Slide right>
          <div className="footer-items">
            <img src="../assets/icons/Email.svg" alt="email-logo" className="footer-icons footer-icons-email"/>
            <span><a href="mailto:info@rflatina.com" target="_blank" rel="noopener noreferrer">info@rflatina.com</a></span>
          </div>
        </Slide>
        <Slide right>
          <div className="footer-items displayFlex displayNoneD">

            <img src="../assets/icons/Phone.svg" alt="phone-logo" className="footer-icons footer-icons-phone"/>

            <div>
              <span>{footerObject.mx}
                <a href="tel:+52-55-5037-5992"> +52.55.5037.5992 </a> &middot;
                <a href="tel:+52-55-6273-8897"> +52.55.6273.8897</a>
              </span>
              <p>
                <span>{footerObject.py} <a href="tel:+595-21-62-996">+595.21.62.996</a></span>
              </p>
            </div>
          </div>
        </Slide>
        <Slide right>
          <div className="footer-items displayFlex displayNoneM">

            <img src="../assets/icons/Phone.svg" alt="phone-logo" className="footer-icons footer-icons-phone"/>

            <div>
              <span>{footerObject.mx}
              </span>
              <p>
                <a href="tel:+52-55-5037-5992"> +52.55.5037.5992 </a> &middot;
                <a href="tel:+52-55-6273-8897"> +52.55.6273.8897</a>
              </p>
              <p>
                <span>{footerObject.py}</span>
              <p>
                <span><a href="tel:+595-21-62-996">+595.21.62.996</a></span>
              </p>
              </p>
            </div>
          </div>
        </Slide>
        <Slide right>
          <div className="footer-items displayFlex">
            <img src="../assets/icons/Globe.svg" alt="globe-logo" className="footer-icons footer-icons-globe"/>
            <span className="displayNoneD">{footerObject.globe} &middot; <strong><a href="https://www.dgrv.org" target="_blank" rel="noopener noreferrer">www.dgrv.org</a></strong></span>
            <span className="displayNoneM">{footerObject.globe} <br/> <a href="https://www.dgrv.org" target="_blank" rel="noopener noreferrer">www.dgrv.org</a></span>
          </div>
        </Slide>
          <div className="footer-items">
            <Fade>
              <div className="footer-dots">
                <span className="footer-dots-dot dot-blue"></span>
                <span className="footer-dots-dot dot-green"></span>
                <span className="footer-dots-dot dot-yellow"></span>
                <span className="footer-dots-dot dot-orange"></span>
                <span className="footer-dots-dot dot-red"></span>
              </div>
            </Fade>
          </div>
      </footer>
    )
  }
}

PageFooter.propTypes = {
  footerObject: PropTypes.instanceOf(Object),
  sectionRef: PropTypes.string
}

import React, { Component } from 'react'
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share'
import FacebookIcon from 'react-share/lib/FacebookIcon'
import TwitterIcon from 'react-share/lib/TwitterIcon'
import WhatsappIcon from 'react-share/lib/WhatsappIcon'

import projectBody from './LangData'
import LandingBanner from './components/LandingBanner'
import Slider from './components/Carousel'
import InovationBanner from './components/Inovation'
import Services from './components/Services'
import Coverage from './components/Coverage'
import PageFooter from './components/Footer'

import '../dist/sass/mains.scss'
import ToolsCard from './components/ToolsCards'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      locale: 'es',
      messages: projectBody,
      openMenu: false,
      scrolled: 1000,
      navbarLogo: '../assets/logos/Raiffeisen-Blue.svg',
      navbarLogoClass: 'rl-navigation-bar-logo-large'
    }
  }

  componentDidMount() {
    this.changeLogo()
  }

  handleSpanish = (e) => {
    e.preventDefault()
    this.setState({ locale: 'es' })
  }

  handleEnglish = (e) => {
    e.preventDefault()
    this.setState({ locale: 'en' })
  }

  boldLang = (lang) => {
    const { locale } = this.state
    return lang === locale ? 'bold-text' : ''
  }

  toggleMenu = () => {
    const { openMenu } = this.state
    this.setState({ openMenu: !openMenu })
  }

  changeLogo = () => {
    window.addEventListener('scroll', () => {
      const { scrolled } = this.state
      const logoImg = scrolled > window.scrollY ? '../assets/logos/Raiffeisen-Blue.svg' : '../assets/logos/Blue-R.svg'
      const logoImgClass = scrolled > window.scrollY ? 'rl-navigation-bar-logo-large' : 'rl-navigation-bar-logoChange'
      this.setState({navbarLogo: logoImg, navbarLogoClass: logoImgClass})
    })
  }

  render() {
    const { locale, messages, openMenu, navbarLogo, navbarLogoClass } = this.state
    return (
      <div>
        <LandingBanner />
        <div className="rl-navigation-bar">
          <div className="rl-navigation-bar-wrapper">
            <a className="rl-navigation-bar-logo" href="/">
              <img src={ navbarLogo } alt="Raiffeisen Main Logo" className={ navbarLogoClass } />
              <img src="../assets/logos/Blue-R.svg" alt="Raiffeisen Main Logo" className="rl-navigation-bar-logo-medium" />
              <img src="../assets/logos/Mobile-R.svg" alt="Raiffeisen Main Logo" className="rl-navigation-bar-logo-small" />
            </a>
            <div className="rl-navigation-bar-items">
              <a className="rl-navigation-bar-items-single" href="/">{messages[locale].navigation.home}</a>
              <a className="rl-navigation-bar-items-single" href="#nosotros">{messages[locale].navigation.aboutUs}</a>
              <a className="rl-navigation-bar-items-single" href="#services">{messages[locale].navigation.services}</a>
              <a className="rl-navigation-bar-items-single" href="#herramientas">{messages[locale].navigation.tools}</a>
              <a className="rl-navigation-bar-items-single" href="#cobertura">{messages[locale].navigation.coverage}</a>
            </div>

            <div className="rl-navigation-bar-contacts">
              <a className="rl-navigation-bar-items-single" href="#contacto">{messages[locale].navigation.contact}</a>
            </div>
            <div className="rl-navigation-bar-lang">
              <button type="button" className={`rl-navigation-bar-items-single ${this.boldLang('es')}`} name="es" onClick={this.handleSpanish}>Es</button>
              <button type="button" className={`rl-navigation-bar-items-single ${this.boldLang('en')}`} name="en" onClick={this.handleEnglish}>En</button>
            </div>
            <div className="rl-navigation-bar-shareOptions">
              <button type="button" data-toggle="modal" data-target="#shareModal" >
                <img src="../assets/icons/Desktop-share.svg" alt="Raiffeisen page share" className="rl-navigation-bar-shareOptions-share" />
              </button>
              <a href="https://twitter.com/RaiffeisenLatam" target="_blank" rel="noopener noreferrer" className="rl-navigation-bar-items-single">
                <img src="../assets/icons/Twitter-grey.svg" alt="Raiffeisen Twitter" className="rl-navigation-bar-shareOptions-share" />
              </a>
            </div>

              { /* This is the mobile navbar */ }
            <div className="rl-navigation-bar-menu">
              <input type="checkbox" onChange={this.toggleMenu} checked={openMenu} className="rl-navigation-bar-menu-checkbox" id="navi-toggle" />
              <label htmlFor="navi-toggle" className="rl-navigation-bar-menu-button">
                <span className="rl-navigation-bar-menu-icon" />
              </label>
              <div className="rl-navigation-bar-menu-background" />
              <nav className="rl-navigation-bar-menu-nav">
                <button type="button" name="button" onClick={this.toggleMenu}>
                  <div className="rl-navigation-bar-menu-items">
                    <a className="rl-navigation-bar-items-single" href="/">{messages[locale].navigation.home}</a>
                    <a className="rl-navigation-bar-items-single" href="#nosotros">{messages[locale].navigation.aboutUs}</a>
                    <a className="rl-navigation-bar-items-single" href="#services">{messages[locale].navigation.services}</a>
                    <a className="rl-navigation-bar-items-single" href="#herramientas">{messages[locale].navigation.tools}</a>
                    <a className="rl-navigation-bar-items-single" href="#cobertura">{messages[locale].navigation.coverage}</a>
                  </div>
                </button>
                <div className="rl-navigation-bar-menu-bottom">
                  <button type="button" data-toggle="modal" data-target="#shareModal" >
                    <img src="../assets/icons/Mobile-share.svg" alt="Raiffeisen page share" className="rl-navigation-bar-contacts-share" />
                  </button>
                  <a href="https://twitter.com/RaiffeisenLatam" target="_blank" rel="noopener noreferrer" className="rl-navigation-bar-items-single">
                    <img src="../assets/icons/Twitter-white.svg" alt="Raiffeisen Twitter" className="rl-navigation-bar-contacts-share" />
                  </a>
                  <button type="button" className={`rl-navigation-bar-items-single ${this.boldLang('es')}`} name="es" onClick={this.handleSpanish}>Es</button>
                  <button type="button" className={`rl-navigation-bar-items-single ${this.boldLang('en')}`} name="en" onClick={this.handleEnglish}>En</button>
                </div>
              </nav>
            </div>
          </div>
        </div>
        
        <div className="container">
          <div className="modal fade" id="shareModal" role="dialog">
            <div className="modal-dialog modal-sm mt-modal">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">{messages[locale].shareTo}</h4>
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body d-flex justify-content-around">
                  <FacebookShareButton quote={messages[locale].learnMore} url="https://infinite-tor-93660.herokuapp.com">
                    <FacebookIcon size={32} />
                  </FacebookShareButton>
                  <TwitterShareButton title={messages[locale].learnMore} url="https://infinite-tor-93660.herokuapp.com">
                    <TwitterIcon size={32} />
                  </TwitterShareButton>
                  <WhatsappShareButton title={messages[locale].learnMore} url="https://infinite-tor-93660.herokuapp.com">
                    <WhatsappIcon size={32} />
                  </WhatsappShareButton>
                </div>
                <div className="modal-footer justify-content-center">
                  <button type="button" className="btn btn-secondary btn-sm defaultFont" data-dismiss="modal">{messages[locale].close}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Slider slidesInfo={messages[locale].mainCarouselInfo} />
        <InovationBanner inovationInfo={messages[locale].inovationBanner} />
        <Services serviceObj={messages[locale].servicesObject}  serviceTitle={messages[locale].navigation.services}/>
        <ToolsCard toolsObject={messages[locale].toolsObject} toolsHeader={messages[locale].toolsHeader} />
        <Coverage coverageInfo={messages[locale].coverageObject} />
        <PageFooter footerObject={messages[locale].footerObject} />
      </div>
    )
  }
}

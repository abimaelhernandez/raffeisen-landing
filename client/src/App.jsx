import React, { Component } from 'react'
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share'
import FacebookIcon from 'react-share/lib/FacebookIcon'
import TwitterIcon from 'react-share/lib/TwitterIcon'
import WhatsappIcon from 'react-share/lib/WhatsappIcon'

import projectBody from './LangData'
import LandingBanner from './components/LandingBanner'
import Slider from './components/Carousel'
import InovationBanner from './components/Inovation'
import Servicios from './components/Servicios'
import PageFooter from './components/Footer'

import '../dist/sass/mains.scss'
import ToolsCard from './components/ToolsCards'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      locale: 'es',
      messages: projectBody,
      openMenu: false
    }
  }

  handleSpanish = (e) => {
    e.preventDefault()
    this.setState({ locale: 'es' })
  }

  handleEnglish = (e) => {
    e.preventDefault()
    this.setState({ locale: 'en' })
  }

  toggleMenu = () => {
    const { openMenu } = this.state
    this.setState({ openMenu: !openMenu })
  }

  render() {
    const { locale, messages, openMenu } = this.state
    return (
      <div>
        <LandingBanner />
        <div className="rl-navigation-bar">
          <div className="rl-navigation-bar-wrapper">
            <a className="rl-navigation-bar-logo" href="/">
              <img src="../assets/logos/Raiffeisen-Blue.svg" alt="Raiffeisen Main Logo" className="rl-navigation-bar-logo-large" />
              <img src="../assets/logos/Blue-R.svg" alt="Raiffeisen Main Logo" className="rl-navigation-bar-logo-medium" />
              <img src="../assets/logos/Mobile-R.svg" alt="Raiffeisen Main Logo" className="rl-navigation-bar-logo-small" />
            </a>
            <div className="rl-navigation-bar-items">
              <a className="rl-navigation-bar-items-single" href="/">{messages[locale].navigation.inicio}</a>
              <a className="rl-navigation-bar-items-single" href="#nosotros">{messages[locale].navigation.nosotros}</a>
              <a className="rl-navigation-bar-items-single" href="#servicios">{messages[locale].navigation.servicios}</a>
              <a className="rl-navigation-bar-items-single" href="#herramientas">{messages[locale].navigation.herramientas}</a>
              <a className="rl-navigation-bar-items-single" href="#cobertura">{messages[locale].navigation.cobertura}</a>
            </div>
            <div className="rl-navigation-bar-search">
              <form action="#">
                <input type="text" name="search" className="rl-navigation-bar-search-box" />
                <span type="submit" className="rl-navigation-bar-search-button">
                  <svg width="1em" height="1em">
                    <path fillRule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clipRule="evenodd" />
                  </svg>
                </span>
              </form>
            </div>
            <div className="rl-navigation-bar-contacts">
              <a className="rl-navigation-bar-items-single" href="#contacto">{messages[locale].navigation.contacto}</a>
              <button type="button" data-toggle="modal" data-target="#myModal" >
                <img src="../assets/icons/Desktop-share.svg" alt="Raiffeisen page share" className="rl-navigation-bar-contacts-share" />
              </button>
              <button type="button" className="rl-navigation-bar-items-single" name="es" onClick={this.handleSpanish}>Es</button>
              <button type="button" className="rl-navigation-bar-items-single" name="es" onClick={this.handleEnglish}>En</button>
              <a href="https://twitter.com/RaiffeisenLatam" target="_blank" rel="noopener noreferrer" className="rl-navigation-bar-items-single">
                <img src="../assets/icons/Twitter-grey.svg" alt="Raiffeisen Twitter" className="rl-navigation-bar-contacts-share" />
              </a>
            </div>

            <div className="rl-navigation-bar-menu">
              <input type="checkbox" onChange={this.toggleMenu} checked={openMenu} className="rl-navigation-bar-menu-checkbox" id="navi-toggle" />
              <label htmlFor="navi-toggle" className="rl-navigation-bar-menu-button">
                <span className="rl-navigation-bar-menu-icon" />
              </label>
              <div className="rl-navigation-bar-menu-background" />
              <nav className="rl-navigation-bar-menu-nav">
                <button type="button" name="button" onClick={this.toggleMenu}>
                  <div className="rl-navigation-bar-menu-items">
                    <a className="rl-navigation-bar-items-single" href="/">{messages[locale].navigation.inicio}</a>
                    <a className="rl-navigation-bar-items-single" href="#nosotros">{messages[locale].navigation.nosotros}</a>
                    <a className="rl-navigation-bar-items-single" href="#servicios">{messages[locale].navigation.servicios}</a>
                    <a className="rl-navigation-bar-items-single" href="#herramientas">{messages[locale].navigation.herramientas}</a>
                    <a className="rl-navigation-bar-items-single" href="#buscar">{messages[locale].navigation.buscar}</a>
                    <a className="rl-navigation-bar-items-single" href="#cobertura">{messages[locale].navigation.cobertura}</a>
                  </div>
                </button>
                <div className="rl-navigation-bar-menu-bottom">
                  <button type="button" data-toggle="modal" data-target="#myModal" >
                    <img src="../assets/icons/Mobile-share.svg" alt="Raiffeisen page share" className="rl-navigation-bar-contacts-share" />
                  </button>
                  <a href="https://twitter.com/RaiffeisenLatam" target="_blank" rel="noopener noreferrer" className="rl-navigation-bar-items-single">
                    <img src="../assets/icons/Twitter-white.svg" alt="Raiffeisen Twitter" className="rl-navigation-bar-contacts-share" />
                  </a>
                  <button type="button" className="rl-navigation-bar-items-single" name="es" onClick={this.handleSpanish}>Es</button>
                  <button type="button" className="rl-navigation-bar-items-single" name="es" onClick={this.handleEnglish}>En</button>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog modal-sm mt-modal">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">{messages[locale].shareTo}</h4>
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body d-flex justify-content-around">
                  <FacebookShareButton quote="Learn more about Raiffeisen! #Raiffeisen" url="https://infinite-tor-93660.herokuapp.com">
                    <FacebookIcon size={32} />
                  </FacebookShareButton>
                  <TwitterShareButton title="Learn more about Raiffeisen!" url="https://infinite-tor-93660.herokuapp.com" hashtags={['Raiffeisen']}>
                    <TwitterIcon size={32} />
                  </TwitterShareButton>
                  <WhatsappShareButton title="Learn more about Raiffeisen!" url="https://infinite-tor-93660.herokuapp.com">
                    <WhatsappIcon size={32} />
                  </WhatsappShareButton>
                </div>
                <div className="modal-footer justify-content-center">
                  <button type="button" className="btn btn-secondary btn-sm defaultFont" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Slider slidesInfo={messages[locale].mainCarouselInfo} />
        <InovationBanner inovationInfo={messages[locale].inovationBanner} />
        <Servicios serviceObj={messages[locale].servicesObject} />
        <ToolsCard toolsObject={messages[locale].toolsObject} toolsHeader={messages[locale].toolsHeader} />
        <PageFooter footerObject={messages[locale].footerObject} />
      </div>
    )
  }
}

import React, { Component } from 'react'

import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share'
import FacebookIcon from 'react-share/lib/FacebookIcon'
import TwitterIcon from 'react-share/lib/TwitterIcon'
import WhatsappIcon from 'react-share/lib/WhatsappIcon'

import projectBody from './LangData'
import LandingBanner from './components/LandingBanner'
import Navbar from './components/Navigation'
import Slider from './components/Carousel'
import InovationBanner from './components/Inovation'
import PageFooter from './components/Footer'

import '../dist/sass/mains.scss'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      locale: 'es',
      messages: projectBody
    }
  }

  handleSpanish = (e) => {
    e.preventDefault()
    this.setState({ locale : 'es'})
  }

  handleEnglish = (e) => {
    e.preventDefault()
    this.setState({ locale : 'en' })
  }

  render(){
    const { locale, messages } = this.state
    return (
      <div>
        <LandingBanner/>

        <div className="navigation">
          <div className="navigation-mainLogo">
            <img src="../assets/logo-main.svg" alt="Main Logo" className="navigation-mainLogo-large"/>
          </div>
          <div className="navigation-items">
            <button type="button" className="navigation-items-item"><a href="#inicio">{messages[locale].navigation.inicio}</a></button>
            <button type="button" className="navigation-items-item"><a href="#nosotros">{messages[locale].navigation.nosotros}</a></button>
            <button type="button" className="navigation-items-item"><a href="#servicios">{messages[locale].navigation.servicios}</a></button>
            <button type="button" className="navigation-items-item"><a href="#herramientas">{messages[locale].navigation.herramientas}</a></button>
            <button type="button" className="navigation-items-item"><a href="#cobertura">{messages[locale].navigation.cobertura}</a></button>
          </div>
          <div className="navigation-search">
            <form action="#">
              <input type="text" name="search" className="navigation-search-box"/>
              <span type="submit" className="navigation-search-button">
                <svg width="1em" height="1em">
                  <path fillRule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clipRule="evenodd"/>
                  <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clipRule="evenodd"/>
                </svg>
              </span>
            </form>
          </div>
          <div className="navigation-icons">
            <button type="button"className="navigation-items-item"><a href="#contacto">{messages[locale].navigation.contacto}</a></button>
            <button type="button" data-toggle="modal" data-target="#myModal">
              <img src="https://img.icons8.com/small/30/000000/share.png" alt="share" className="navigation-icons-individual-share"/>
            </button> 
            <button type="button" className="navigation-icons-individual-lang" name="es" onClick={this.handleSpanish}>Es</button>
            <button type="button" className="navigation-icons-individual-lang" name="es" onClick={this.handleEnglish}>En</button>
            <a href="https://twitter.com/RaiffeisenLatam" target="_blank" rel="noopener noreferrer">
              <img src="../assets/Twitter-grey.svg" alt="Twitter" className="navigation-icons-individual-twitter"/>
            </a>
          </div>
        </div>

        <div className="navigationMobile navBanner">
          <img src="../assets/main-small.svg" alt="Raiffeisen Logo" className="navigationMobile-mainLogo-small"/>

          <input type="checkbox" className="navigationMobile-checkbox" id="navi-toggle"/>

          <label htmlFor="navi-toggle" className="navigationMobile-button">
            <span className="navigationMobile-icon">&nbsp;</span>
          </label>

          <div className="navigationMobile-background">&nbsp;</div>

          <nav className="navigationMobile-nav">

            <ul className="navigationMobile-list">
              <li className="navigationMobile-item"><a href="#inicio" className="navigationMobile-link">{messages[locale].navigation.inicio}</a></li>
              <li className="navigationMobile-item"><a href="#nosotros" className="navigationMobile-link">{messages[locale].navigation.nosotros}</a></li>
              <li className="navigationMobile-item"><a href="#servicios" className="navigationMobile-link">{messages[locale].navigation.servicios}</a></li>
              <li className="navigationMobile-item"><a href="#herramientas" className="navigationMobile-link">{messages[locale].navigation.herramientas}</a></li>
              <li className="navigationMobile-item"><a href="#cobertura" className="navigationMobile-link">{messages[locale].navigation.cobertura}</a></li>
              <li className="navigationMobile-item"><a href="#buscar" className="navigationMobile-link">{messages[locale].navigation.buscar}</a></li>
              <li className="navigationMobile-item"><a href="#contacto" className="navigationMobile-link">{messages[locale].navigation.contacto}</a></li>
            </ul>

            <div className="navigationMobile-bottom">
            <button type="button" data-toggle="modal" data-target="#myModal">
              <img src="https://img.icons8.com/small/30/000000/share.png" alt="share" className="navigation-icons-individual-share"/>
            </button> 
            <a href="https://twitter.com/RaiffeisenLatam" target="_blank" rel="noopener noreferrer">
              <img src="../assets/Twitter-white.svg" alt="Twitter" className="navigation-icons-individual-twitter"/>
            </a>
              <button type="button" className="navigationMobile-lang" name="es" onClick={this.handleSpanish}>Es</button>
              <button type="button" className="navigationMobile-lang" name="es" onClick={this.handleEnglish}>En</button>
            </div>
          </nav>
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
                    <FacebookIcon size={32}/>
                  </FacebookShareButton>
                  <TwitterShareButton title="Learn more about Raiffeisen!" url="https://infinite-tor-93660.herokuapp.com" hashtags={['Raiffeisen']}>
                    <TwitterIcon size={32} />
                  </TwitterShareButton>
                  <WhatsappShareButton title="Learn more about Raiffeisen!" url="https://infinite-tor-93660.herokuapp.com">
                    <WhatsappIcon size={32} />
                  </WhatsappShareButton>
                </div>
                <div class="modal-footer">
                  <button type="button" className="btn btn-default defaultFont" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Slider/>
        <InovationBanner/>
        <Navbar testProp={messages[locale]}/>
        <PageFooter/>
      </div>
    )
  }
}

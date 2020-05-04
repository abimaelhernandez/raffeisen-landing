import React, { Component } from 'react'
import '../dist/sass/mains.scss'

import projectBody from './LangData'
import LandingBanner from './components/LandingBanner'
import Navbar from './components/Navigation'
import Slider from './components/Carousel'
import InovationBanner from './components/Inovation'
import PageFooter from './components/Footer'

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
    console.log('in Change :', this.state)
  }

  handleEnglish = (e) => {
    e.preventDefault()
    this.setState({ locale : 'en' })
    console.log('in Change EN :', this.state)
  }

  render(){
    const { locale, messages } = this.state
    return (
      <div>
        <LandingBanner/>

        {/* Desktop Navigation Bar */}
        <div className="navigation">
          <div className="navigation-mainLogo">
            <img src="../assets/logo-main.svg" alt="Main Logo" className="navigation-mainLogo-large"/>
          </div>
          <div className="navigation-items">
            <button type="button" className="navigation-items-item">{messages[locale].navigation.inicio}</button>
            <button type="button" className="navigation-items-item">{messages[locale].navigation.nosotros}</button>
            <button type="button" className="navigation-items-item">{messages[locale].navigation.servicios}</button>
            <button type="button" className="navigation-items-item">{messages[locale].navigation.herramientas}</button>
            <button type="button" className="navigation-items-item">{messages[locale].navigation.cobertura}</button>
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
            <button type="button"className="navigation-items-item">{messages[locale].navigation.contacto}</button>
            <button type="button" data-toggle="modal" data-target="#myModal">
              <img src="https://img.icons8.com/small/30/000000/share.png" alt="share" className="navigation-icons-individual-share"/>
            </button> 
            <button type="button" className="navigation-icons-individual-lang" name="es" onClick={this.handleSpanish}>Es</button>
            <button type="button" className="navigation-icons-individual" name="es" onClick={this.handleEnglish}>En</button>
            <a href="https://twitter.com/RaiffeisenLatam" target="_blank" rel="noopener noreferrer">
              <img src="../assets/Twitter-grey.svg" alt="Twitter" className="navigation-icons-individual-twitter"/>
            </a>
          </div>
        </div>

        {/* Mobile Navigation Bar */}
        <div className="navigationMobile navBanner">
          <img src="../assets/main-small.svg" alt="Raiffeisen Logo" className="navigationMobile-mainLogo-small"/>

          <input type="checkbox" className="navigationMobile-checkbox" id="navi-toggle"/>

          <label htmlFor="navi-toggle" className="navigationMobile-button">
            <span className="navigationMobile-icon">&nbsp;</span>
          </label>

          <div className="navigationMobile-background">&nbsp;</div>

          <nav className="navigationMobile-nav">

            <ul className="navigationMobile-list">
              <li className="navigationMobile-item"><a href="#inico" className="navigationMobile-link">{messages[locale].navigation.inicio}</a></li>
              <li className="navigationMobile-item"><a href="#nosotros" className="navigationMobile-link">{messages[locale].navigation.nosotros}</a></li>
              <li className="navigationMobile-item"><a href="#servicios" className="navigationMobile-link">{messages[locale].navigation.servicios}</a></li>
              <li className="navigationMobile-item"><a href="#herramientas" className="navigationMobile-link">{messages[locale].navigation.herramientas}</a></li>
              <li className="navigationMobile-item"><a href="#cobertura" className="navigationMobile-link">{messages[locale].navigation.cobertura}</a></li>
              <li className="navigationMobile-item"><a href="#buscar" className="navigationMobile-link">{messages[locale].navigation.buscar}</a></li>
              <li className="navigationMobile-item"><a href="#contacto" className="navigationMobile-link">{messages[locale].navigation.contacto}</a></li>
            </ul>

            <div className="navigationMobile-bottom">
              <img src="https://img.icons8.com/small/30/000000/share.png" alt="share" className="navigation-icons-individual-share"/>
              <a href="https://twitter.com/RaiffeisenLatam" target="_blank" rel="noopener noreferrer">
                <img src="../assets/Twitter-white.svg" alt="Twitter" className="navigation-icons-individual-twitter"/>
              </a>
              <button type="button" className="navigationMobile-lang" name="es" onClick={this.handleSpanish}>Es</button>
              <button type="button" className="navigationMobile-lang" name="es" onClick={this.handleEnglish}>En</button>
            </div>
          </nav>
        </div>

        {/* This is the share modal */}
        <div className="container"> 
          <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog modal-sm">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Where would you like to share to?</h4>
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body">
                  <p>This is a small modal.</p>
                </div>
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <Slider/>
        <InovationBanner/>
        <div>
          <Navbar testProp={messages[locale]}/>
        </div>
        <PageFooter/>
      </div>
    )
  }
}

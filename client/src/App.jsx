import React, {Component} from 'react'
import {FacebookShareButton, TwitterShareButton, WhatsappShareButton} from 'react-share'
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
      currentView: 'inicio',
      openMenu: false,
      scrolled: 1000,
      navbarLogo: '../assets/logos/Raiffeisen-Blue.svg',
      navbarLogoClass: 'rl-navigation-bar-logo-large',
      menuSections: projectBody.es.navigation.sections
    }
  }

  componentDidMount() {
    const { hash } = window.location
    this.setState({
      currentView: hash || !hash.includes('home')
        ? hash.substring(1) : projectBody.es.navigation.sections[0].ref
      })
    this.changeLogo()
  }

  handleLanguage = (lang) => {
    this.setState({
      locale: lang,
      menuSections: projectBody[lang].navigation.sections,
      currentView: projectBody[lang].navigation.sections[0].ref
    })
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  updateClass = (state, value) => value === state ? 'bold-text' : ''

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

  aboutUsSlider = () => {
    const { menuSections } = this.state
    this.setState({ currentView: menuSections[1].ref })
    return document.getElementById(menuSections[1].ref).scrollIntoView()
  }

    render() {
      const { locale, messages, openMenu, navbarLogo, navbarLogoClass, currentView, menuSections } = this.state

      return (<div>
        <LandingBanner />
        <div className="rl-navigation-bar">
          <div className="rl-navigation-bar-wrapper">
            <a className="rl-navigation-bar-logo" href="/">
              <img src={navbarLogo} alt="Raiffeisen Main Logo" className={navbarLogoClass}/>
              <img src="../assets/logos/Blue-R.svg" alt="Raiffeisen Main Logo" className="rl-navigation-bar-logo-medium"/>
              <img src="../assets/logos/R.svg" alt="Raiffeisen Main Logo" className="rl-navigation-bar-logo-small"/>
            </a>
            <div className="rl-navigation-bar-items">
              {
                menuSections.map((section) =>
                  <a
                    key={section.ref}
                    className={`rl-navigation-bar-items-single ${this.updateClass(currentView, section.ref)}`}
                    onClick={() => this.setState({currentView: section.ref})}
                    href={`#${section.ref}`}>{section.title}
                  </a>)
              }
            </div>

            <div className="rl-navigation-bar-contacts">
              <a
                className={`rl-navigation-bar-items-single ${this.updateClass(currentView, messages[locale].navigation.contact.ref)}`}
                href={`#${messages[locale].navigation.contact.ref}`}
              >{messages[locale].navigation.contact.title}</a>
            </div>
            <div className="rl-navigation-bar-lang">
              <button
                type="button"
                className={`rl-navigation-bar-items-single ${this.updateClass(locale, 'es')}`}
                name="es"
                onClick={() => this.handleLanguage('es')}
              >Es</button>
              <button
                type="button"
                className={`rl-navigation-bar-items-single ${this.updateClass(locale, 'en')}`}
                name="en"
                onClick={() => this.handleLanguage('en')}
              >En</button>
            </div>
            <div className="rl-navigation-bar-shareOptions">
              <button type="button" data-toggle="modal" data-target="#shareModal">
                <img src="../assets/icons/Desktop-share.svg" alt="Raiffeisen page share" className="rl-navigation-bar-shareOptions-share" />
              </button>
              <a href="https://twitter.com/RaiffeisenLatam" target="_blank" rel="noopener noreferrer" className="rl-navigation-bar-items-single">
                <img src="../assets/icons/Twitter-grey.svg" alt="Raiffeisen Twitter" className="rl-navigation-bar-shareOptions-share" />
              </a>
            </div>

            {/* This is the mobile navbar */}
            <div className="rl-navigation-bar-menu">
              <input type="checkbox" onChange={this.toggleMenu} checked={openMenu} className="rl-navigation-bar-menu-checkbox" id="navi-toggle" />
              <label htmlFor="navi-toggle" className="rl-navigation-bar-menu-button">
                <span className="rl-navigation-bar-menu-icon" />
              </label>
              <div className="rl-navigation-bar-menu-background" />
              <nav className="rl-navigation-bar-menu-nav">
                <button type="button" name="button" onClick={this.toggleMenu}>
                  <div className="rl-navigation-bar-menu-items">
                    {
                      menuSections.map((section) =>
                      <a
                        key={`mobile-${section.ref}`}
                        className={`rl-navigation-bar-items-single ${this.updateClass(currentView, section.ref)}`}
                        onClick={() => this.setState({currentView: section.ref})}
                        href={`#${section.ref}`}
                      >{section.title}</a>)
                    }
                    <a
                      className="rl-navigation-bar-items-single"
                      href={`#${messages[locale].navigation.contact.ref}`}
                    >{messages[locale].navigation.contact.title}</a>
                  </div>
                </button>
                <div className="rl-navigation-bar-menu-bottom">
                  <button type="button" data-toggle="modal" data-target="#shareModal">
                    <img src="../assets/icons/Mobile-share.svg" alt="Raiffeisen page share" className="rl-navigation-bar-contacts-share" />
                  </button>
                  <a href="https://twitter.com/RaiffeisenLatam" target="_blank" rel="noopener noreferrer" className="rl-navigation-bar-items-single">
                    <img src="../assets/icons/Twitter-white.svg" alt="Raiffeisen Twitter" className="rl-navigation-bar-contacts-share" />
                  </a>
                  <button
                    type="button"
                    className={`rl-navigation-bar-items-single ${this.updateClass(locale, 'es')}`}
                    name="es"
                    onClick={() => this.handleLanguage('es')}
                  >Es</button>
                  <button
                    type="button"
                    className={`rl-navigation-bar-items-single ${this.updateClass(locale, 'en')}`}
                    name="en"
                    onClick={() => this.handleLanguage('en')}
                  >En</button>
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
                  <FacebookShareButton quote={messages[locale].learnMore} url="https://raiffeisenlatina.com/">
                    <FacebookIcon size={32} />
                  </FacebookShareButton>
                  <TwitterShareButton title={messages[locale].learnMore} url="https://raiffeisenlatina.com/">
                    <TwitterIcon size={32} />
                  </TwitterShareButton>
                  <WhatsappShareButton title={messages[locale].learnMore} url="https://raiffeisenlatina.com/">
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
        <div onMouseEnter={() => this.setState({currentView: menuSections[0].ref})}>
          <Slider
            slidesInfo={messages[locale].mainCarouselInfo}
            sectionRef={menuSections[0].ref}
            aboutUsSlider={() => this.aboutUsSlider}
          />
        </div>
        <div onMouseEnter={() => this.setState({currentView: menuSections[1].ref})}>
          <InovationBanner
            inovationInfo={messages[locale].inovationBanner}
            animationReady={currentView}
            sectionRef={menuSections[1].ref}
            serviceTitle={menuSections[2].title}
          />
        </div>
        <div onMouseEnter={() => this.setState({currentView: menuSections[2].ref})}>
          <Services
            serviceObj={messages[locale].servicesObject}
            sectionRef={menuSections[2].ref}
          />
        </div>
        <div onMouseEnter={() => this.setState({currentView: menuSections[3].ref})}>
          <ToolsCard
            toolsObject={messages[locale].toolsObject}
            toolsHeader={messages[locale].toolsHeader}
            sectionRef={menuSections[3].ref}
          />
        </div>
        <div
          onMouseEnter={() => this.setState({currentView: menuSections[4].ref})}
          onTouchStart={() => this.setState({currentView: menuSections[4].ref})}
        >
          <Coverage
            coverageInfo={messages[locale].coverageObject}
            animationReady={currentView}
            sectionRef={menuSections[4].ref}
          />
        </div>
        <div onMouseEnter={() => this.setState({currentView: messages[locale].navigation.contact.ref})}>
          <PageFooter
            footerObject={messages[locale].footerObject}
            sectionRef={messages[locale].navigation.contact.ref}
          />
        </div>
      </div>)
    }
  }

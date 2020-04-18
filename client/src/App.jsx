import React, { Component } from 'react'
import Navbar from './components/Navigation'
import '../dist/sass/mains.scss'
import projectBody from './LangData'

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
        <div className="navigation">
          <div className="navigation-mainLogo">
            <img src="../assets/logo-main.svg" alt="Main Logo" className="navigation-mainLogo-img"/>
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
            <img src="https://img.icons8.com/small/30/000000/share.png" alt="share" className="navigation-icons-individual-share"/>
            <button type="button" className="navigation-icons-individual-lang" name="es" onClick={this.handleSpanish}>Es</button>
            <button type="button" className="navigation-icons-individual" name="es" onClick={this.handleEnglish}>En</button>
            <img src="https://img.icons8.com/offices/30/000000/twitter.png" alt="Twitter" className="navigation-icons-individual-twitter"/>
          </div>
        </div>
        <div className="navigation-mobile">
          
        </div>
        <div>
          <Navbar testProp={messages[locale]}/>
        </div>

      </div>
    )
  }
}

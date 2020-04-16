import React, { Component } from 'react'
import Navbar from './components/Navigation'
import './components/sass/mains.scss'
import projectBody from './LangData'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      locale: 'en',
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
          <div className="navigation__mainLogo">
            <img src="../assets/logo-main.svg" alt="Main Logo" className="navigation__mainLogo-img"/>
          </div>
          <div className="navigation__items">
            <span className="navigation__items-item">Inicio</span>
            <span className="navigation__items-item">Nosotros</span>
            <span className="navigation__items-item">Servicios</span>
            <span className="navigation__items-item">Herramientas</span>
            <span className="navigation__items-item">Cobertura</span>
          </div>
          <div className="navigation__search">
            <form action="#">
              <input type="text" name="search" className="navigation__search-box"/>
              <span type="submit" className="navigation__search-button">
                <svg width="1em" height="1em">
                  <path fillRule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clipRule="evenodd"/>
                  <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clipRule="evenodd"/>
                </svg>
              </span>
            </form>
          </div>
          <div className="navigation__icons">
            <span className="navigation__item">Contacto</span>
            <img src="https://img.icons8.com/small/30/000000/share.png" alt="share" className="navigation__icons-individual__share"/>
            <button type="button" className="navigation__icons-individual" name="es" onClick={this.handleSpanish}>Es</button>
            <button type="button" className="navigation__icons-individual" name="es" onClick={this.handleEnglish}>En</button>
            <img src="https://img.icons8.com/offices/30/000000/twitter.png" alt="Twitter" className="navigation__icons-individual__twitter"/>
          </div>
        </div>
        <div>
          <Navbar testProp={messages[locale]}/>
        </div>

      </div>
    )
  }
}

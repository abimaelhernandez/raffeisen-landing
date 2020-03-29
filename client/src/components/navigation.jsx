import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'


export default class NavBar extends Component {
  render() {
    return (
      <div className="navigation">
        <ul className="navigation__list">
          <li className="navigation__item"><a href="#inicio">Inicio</a></li>
          <li className="navigation__item"><a href="#nosotros">Nosotros</a></li>
          <li className="navigation__item"><a href="#servicios">Servicios</a></li>
          <li className="navigation__item"><a href="#herramientas">Herramientas</a></li>
          <li className="navigation__item"><a href="#cobertura">Cobertura</a></li>
        </ul>
          <Button variant="outline-primary">Primary</Button>
          <div className="navigation-search">
            <input type="text" placeholder="Search.." name="search" className="navigation-search__box"/>
            <button type="submit" className="navigation-search__button">
              <svg className="bi bi-search" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clipRule="evenodd"/>
              <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clipRule="evenodd"/>
              </svg>
            </button>
          </div>
          <ul className="navigation__list">
          <li className="navigation__item"><a href="#contacto">Contacto</a></li>
          </ul>
          <img src="https://img.icons8.com/small/30/000000/share.png" alt="share"/>
          <img src="https://img.icons8.com/offices/30/000000/mexico--v1.png" alt="Español"/>
          <img src="https://img.icons8.com/office/30/000000/usa.png" alt="English"/>
          <img src="https://img.icons8.com/offices/30/000000/twitter.png" alt="Twitter"/>
      </div>
    )
  }
}


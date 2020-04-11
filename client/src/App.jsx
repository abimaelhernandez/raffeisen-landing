import React, { Component } from 'react'
import NavBar from './components/Navigation'
import Carousela from './components/Carousel'
import Inter from './components/Internalization'
import PageFooter from './components/Footer'

import './components/sass/mains.scss'

export default class App extends Component {
  render() {
    return (
      <div className="parent-container">
        <NavBar/>
        <Carousela/>
        <Inter/>
        <PageFooter/>
      </div>
    )
  }
}

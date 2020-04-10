import React, { Component } from 'react'
import NavBar from './components/navigation'
import Carousela from './components/Carousel'
import PageFooter from './components/Footer'

import './components/sass/mains.scss'

export default class App extends Component {
  render() {
    return (
      <div className="parent-container">
        <NavBar/>
        <Carousela/>
        <PageFooter/>
      </div>
    )
  }
}

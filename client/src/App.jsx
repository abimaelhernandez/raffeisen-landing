import React, { Component } from 'react'
import NavBar from './components/navigation'
import Carousela from './components/Carousel'

import '../dist/styles.scss'

export default class App extends Component {
  render() {
    return (
      <div className="parent-container">
        <NavBar/>
        <Carousela/>
      </div>
    )
  }
}

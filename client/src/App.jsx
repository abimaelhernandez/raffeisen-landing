import React, { Component } from 'react'

import '../dist/styles.scss'
import NavBar from './components/navigation'

export default class App extends Component {
  render() {
    return (
      <div className="parent-container">
        <NavBar/>
      </div>
    )
  }
}

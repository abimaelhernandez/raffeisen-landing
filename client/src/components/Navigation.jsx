import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NavBar extends Component {

  render() {
    const {testProp} = this.props
    console.log('in CHILD :', testProp)
    return (
      <div className="blop">
        <h1>
          Hello World {testProp.navigation.inicio} hi ppl ---- {testProp.navigation.herramientas} 
        </h1>
      </div>
    )
  }
}

NavBar.propTypes = {
  testProp: PropTypes
}

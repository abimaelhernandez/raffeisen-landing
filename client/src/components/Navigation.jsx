import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NavBar extends Component {

  render() {
    const {testProp} = this.props
    console.log('in CHILD :', testProp)
    return (
      <div className="navigation">
        Hello World {testProp.greeting}
      </div>
    )
  }
}

NavBar.propTypes = {
  testProp: PropTypes
}



import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class NavBar extends Component {

  render() {
    const { example } = this.props
    return (
      <div className="navigation">
        {example} Hello World
      </div>
    )
  }
}

NavBar.propTypes = {
  example: PropTypes.string
}

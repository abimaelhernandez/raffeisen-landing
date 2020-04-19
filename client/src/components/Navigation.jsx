import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NavBar extends Component {

  render() {
    const {testProp} = this.props
    //  console.log('in CHILD :', testProp)
    return (
      <div className="blop">
        <h1>
          {testProp.navigation.inicio}/I AM THE CHILD COMPONENT/{testProp.navigation.herramientas} 
        </h1>
      </div>
    )
  }
}

NavBar.propTypes = {
  testProp: PropTypes.instanceOf(Object)
}

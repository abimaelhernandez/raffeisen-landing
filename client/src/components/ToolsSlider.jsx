/* eslint react/prop-types: 0 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ToolsSlider extends Component {

  closeSlider = () => {
    const { resetProps } = this.props
    resetProps(true)
  }

  render(){
    const { clickedId } = this.props
    console.log(clickedId, 'i amd clicked in child')
    console.log('I am the props in child', this.props)
    
    return (
      <div className="tools-slider">
        <button type="button" onClick={this.closeSlider}>Close me</button>
        <h1>I am Tools Slider</h1>
      </div>
  )}
}

ToolsSlider.propTypes = {
  clickedId:  PropTypes.number
}
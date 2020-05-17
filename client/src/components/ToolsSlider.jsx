/* eslint react/prop-types: 0 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

export default class ToolsSlider extends Component {


  componentDidMount() {   
    this.getActive() 
  }

  closeSlider = () => {
    const { resetProps } = this.props
    resetProps(true)
  }

  getActive = () => {
    const { clickedId } = this.props
    console.log('i am the cliked id', clickedId)
  }

  render(){
    const { toolsObject } = this.props

    const finalArray = [
      (<div key={1}>
        <h1>{toolsObject[0].mainTitle}</h1>
      </div>),
      (<div key={2}>
        <h1>{toolsObject[1].mainTitle}</h1>
      </div>),
      (<div key={3}>
        <h1>{toolsObject[2].mainTitle}</h1>
      </div>)
    ]

    console.log('I am the toolsObject', finalArray)
    
    return (
      <div className="tools-slider-parent">
        <div id="tools-slider" className="carousel slide" data-interval="false" data-ride="carousel">
          <span role="button" tabIndex={0} onClick={this.closeSlider} onKeyDown={this.closeSlider}>Close me</span>
          <Carousel arrows infinite slidesPerPage={3} slides={finalArray}/>
        </div>
      </div>
  )}
}

ToolsSlider.propTypes = {
  clickedId:  PropTypes.number
}
/* eslint react/prop-types: 0 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

export default class ToolsSlider extends Component {
  constructor() {
    super()
    this.state = { 
      value: -1
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(value) {
    this.setState({ value })
  }

  closeSlider = () => {
    const { resetProps } = this.props
    resetProps(true)
  }

  render(){
    const { toolsObject, clickedId } = this.props
    const { value } = this.state
    console.log('I am in the slider and clicked id', clickedId)
    
    return (
      <div className="tools-slider-parent">
        <div id="tools-slider" className="carousel slide" data-interval="false" data-ride="carousel">
          <span role="button" tabIndex={0} onClick={this.closeSlider} onKeyDown={this.closeSlider}>Close me</span>
          <Carousel
            value={value}
            onChange={this.onChange}
            slides={[
              (<div key={1}>
                <h1>{toolsObject[0].mainTitle}</h1>
              </div>),
              (<div key={2}>
                <h1>{toolsObject[1].mainTitle}</h1>
              </div>),
              (<div key={3}>
                <h1>{toolsObject[2].mainTitle}</h1>
              </div>),
              (<div key={4}>
                <h1>{toolsObject[3].mainTitle}</h1>
              </div>),
              (<div key={5}>
                <h1>{toolsObject[4].mainTitle}</h1>
              </div>),
              (<div key={6}>
                <h1>{toolsObject[5].mainTitle}</h1>
              </div>),
              (<div key={7}>
                <h1>{toolsObject[6].mainTitle}</h1>
              </div>),
              (<div key={8}>
                <h1>{toolsObject[7].mainTitle}</h1>
              </div>),
              (<div key={9}>
                <h1>{toolsObject[8].mainTitle}</h1>
              </div>),
              (<div key={10}>
                <h1>{toolsObject[9].mainTitle}</h1>
              </div>)
            ]}
            arrows
            infinite
          />
        </div>
      </div>
  )}
}

ToolsSlider.propTypes = {
  clickedId:  PropTypes.number
}
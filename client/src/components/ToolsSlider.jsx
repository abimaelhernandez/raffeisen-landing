/* eslint react/prop-types: 0 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

export default class ToolsSlider extends Component {
  constructor(){
    super()
    this.state = {
      leftItem: {},
      centerItem: {},
      rightItem: {}
    }
  }

  componentDidMount() {
    this.getCenterItem()
    this.getLeftItem()
    this.getRightItem()
  }

  closeSlider = () => {
    const { resetProps } = this.props
    resetProps(true)
  }

  getLeftItem = () => {
    const { clickedId, toolsObject } = this.props
    const { length } = toolsObject
    // left item = 1
      // cli array.length - 1
      console.log('ten ? ', clickedId === 1 ? 10 : clickedId - 1 )
    const left = toolsObject.find(x => x.id === (clickedId === 1 ? length : clickedId - 1))
    console.log('clickedId left', left )
    this.setState({ leftItem: left})
  }

  getCenterItem = () => {
    const { clickedId, toolsObject } = this.props
    const center = toolsObject.find(x => x.id === clickedId)
    this.setState({ centerItem: center })
  }

   getRightItem = () => {
     const { clickedId, toolsObject } = this.props
     const right = toolsObject.find(x => x.id === clickedId + 1)
     this.setState({ rightItem: right })
   }

  render(){
    const { leftItem, centerItem, rightItem } = this.state
    // console.log('hello', leftItem.id, centerItem.id, rightItem.id)
    const finalArray = [
      (<div key={1}>
        <h1>{leftItem.mainTitle}</h1>
      </div>),
      (<div key={2}>
        <h1>{centerItem.mainTitle}</h1>
      </div>),
      (<div key={3}>
        <h1>{rightItem.mainTitle}</h1>
      </div>)
    ]

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

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
      rightItem: {},
      fourthItem: {},
      fifthItem: {},
      sixthItem: {}
    }
  }

  componentDidMount() {
    this.getCenterItem()
    this.getLeftItem()
    this.getRightItem()
    this.getFourthItem()
    this.getFifththItem()
    this.getSixthItem()
  }

  closeSlider = () => {
    const { resetProps } = this.props
    resetProps(true)
  }

  getLeftItem = () => {
    const { clickedId, toolsObject } = this.props
    const { length } = toolsObject
    const left = toolsObject.find(x => x.id === (clickedId === 1 ? length : clickedId - 1))
    this.setState({ leftItem: left})
  }

  getCenterItem = () => {
    const { clickedId, toolsObject } = this.props
    const center = toolsObject.find(x => x.id === clickedId)
    this.setState({ centerItem: center })
  }

  getRightItem = () => {
    const { clickedId, toolsObject } = this.props
    const right = toolsObject.find(x => x.id === (clickedId === 10 ? 1 : clickedId + 1))
    this.setState({ rightItem: right })
  }

  getFourthItem = () => {
    const { clickedId, toolsObject  } = this.props
    const fourth = toolsObject.find(x => x.id === (clickedId === 10 ? 2 : clickedId + 2))
    this.setState({ fourthItem: fourth })
  }

  getFifththItem = () => {
    const { clickedId, toolsObject } = this.props
    const fifth = toolsObject.find(x => x.id === (clickedId === 10 ? 3 : clickedId + 3))
    this.setState({ fifthItem: fifth })
  }

  getSixthItem = () => {
    const { clickedId, toolsObject } = this.props
    const sixth = toolsObject.find(x => x.id === (clickedId === 10 ? 4 : clickedId + 4))
    this.setState({ sixthItem: sixth })
  }

  render(){
    const { leftItem, centerItem, rightItem, fourthItem, fifthItem, sixthItem } = this.state
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
      </div>),
      (<div key={4}>
        <h1>{fourthItem.mainTitle}</h1>
      </div>),
      (<div key={5}>
        <h1>{fifthItem.mainTitle}</h1>
      </div>),
      (<div key={6}>
        <h1>{sixthItem.mainTitle}</h1>
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

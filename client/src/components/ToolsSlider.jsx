/* eslint react/prop-types: 0 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

export default class ToolsSlider extends Component {
  constructor(){
    super()
    this.state = {
      centerItem: {},
      leftItem: {},
      rightItem: {},
      fourthItem: {},
      fithItem: {},
      sixthItem: {},
      seventhItem: {},
      eightItem: {},
      ninthItem: {},
      thenthItem: {}
    }
  }

  componentDidMount() {
    this.getCenterItem()
    this.getLeftItem()
    this.getRightItem()
    this.getFourthItem()
  }

  closeSlider = () => {
    const { resetProps } = this.props
    resetProps(true)
  }

  getLeftItem = () => {
    const { clickedId, toolsObject } = this.props
    // const length = Object.values(toolsObject).length  === clickedId
    const test2 = toolsObject.find(x => x.id === clickedId - 1)
    this.setState({ leftItem: test2})
  }

  getCenterItem = () => {
    const { clickedId, toolsObject } = this.props
    const test = toolsObject.find(x => x.id === clickedId)
    this.setState({ centerItem: test})
  }

  getRightItem = () => {
    const { clickedId, toolsObject } = this.props
    const length = Object.values(toolsObject).length === clickedId
    const test3 = length ? toolsObject.find(x => x.id === 1) : toolsObject.find(x => x.id === clickedId + 1)
    this.setState({ rightItem: test3})
  }

  getFourthItem = () => {
    const { clickedId, toolsObject } = this.props
    const test4 = toolsObject.find(x => x.id === clickedId + 2)
    this.setState({ fourthItem: test4})
  }

  getFithItem = () => {
    const { clickedId, toolsObject } = this.props
    const test5 = toolsObject.find(x => x.id === clickedId + 3)
    this.setState({ fithItem: test5})
  }

  getsixthItem = () => {
    const { clickedId, toolsObject } = this.props
    const test6 = toolsObject.find(x => x.id === clickedId + 4)
    this.setState({ sixthItem: test6})
  }

  getSeventhItem = () => {
    const { clickedId, toolsObject } = this.props
    const test7 = toolsObject.find(x => x.id === clickedId  + 5)
    this.setState({ seventhItem: test7})
  }

  getEightItem = () => {
    const { clickedId, toolsObject } = this.props
    const test8 = toolsObject.find(x => x.id === clickedId + 6)
    this.setState({ eightItem: test8})
  }

  getNithItem = () => {
    const { clickedId, toolsObject } = this.props
    const test9 = toolsObject.find(x => x.id === clickedId + 8)
    this.setState({ fithItem: test9})
  }

  getTenthItem = () => {
    const { clickedId, toolsObject } = this.props
    const test5 = toolsObject.find(x => x.id === clickedId + 9)
    this.setState({ fithItem: test5})
  }

  render(){
    const { leftItem, centerItem, rightItem, fourthItem, fithItem, sixthItem, seventhItem, eightItem, ninthItem,thenthItem } = this.state
    console.log('hello', leftItem, centerItem, rightItem, fourthItem, fithItem, sixthItem, seventhItem, eightItem, ninthItem,thenthItem)
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

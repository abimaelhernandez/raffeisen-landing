/* eslint react/prop-types: 0 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

export default class ToolsSlider extends Component {
  constructor() {
    super()
    this.state = { value: 0 }
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount(){
    const { clickedId } = this.props
    this.setState({ value: clickedId - 1 })
  }

  onChange(value) {
    this.setState({ value })
  }

  closeSlider = () => {
    const { resetProps } = this.props
    resetProps(true)
  }

  render(){
    const { toolsObject } = this.props
    const { value } = this.state
    
    return (
      <div className="tools-slider-parent">
        <div id="tools-slider" className="carousel slide" data-interval="false" data-ride="carousel">
          <Carousel
            value={value}
            onChange={this.onChange}
            slides={[
              (<div key={1}>
                <h1>{toolsObject[0].mainTitle}</h1>
              </div>),
              (<div key={2}>
                <div className="card individual-slide" >
                  <span className="individual-slide-close" role="button" tabIndex={0} onClick={this.closeSlider} onKeyDown={this.closeSlider}>
                    <svg className="bi bi-x" viewBox="0 0 16 16" fill="white">
                      <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                      <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                    </svg>
                  </span>
                  <div className="card-body">
                  <h1 className="individual-slide-title">{toolsObject[1].mainTitle}</h1>
                    <p className="card-text individual-slide-body">{toolsObject[1].bodyContent}</p>
                  </div>
                </div>
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
            centered
            slidesPerPage={3}
          />
        </div>
      </div>
  )}
}

ToolsSlider.propTypes = {
  clickedId:  PropTypes.number
}
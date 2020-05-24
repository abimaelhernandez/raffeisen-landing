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

  componentDidMount = () => {
    const { clickedId } = this.props
    this.setState({ value: clickedId - 1 })
  }

  onChange = (value) => {
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
                <div className="card individual-slide" style={{ background: toolsObject[0].backgroundColor }}>
                  <span className="individual-slide-close" role="button" tabIndex={0} onClick={this.closeSlider} onKeyDown={this.closeSlider}>
                    <svg className="bi bi-x" viewBox="0 0 16 16" fill="white">
                      <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                      <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                    </svg>
                  </span>
                  <div className="card-body individual-slide-body individual-slide-body-1">
                    <h1 className="individual-slide-body-title">{toolsObject[0].mainTitle}</h1>
                    <p className="card-text individual-slide-body-subText">{toolsObject[0].bodyContent}</p>
                  </div>
                </div>
              </div>),
              (<div key={2}>
                <div className="card individual-slide" style={{ background: toolsObject[1].backgroundColor }}>
                  <span className="individual-slide-close" role="button" tabIndex={0} onClick={this.closeSlider} onKeyDown={this.closeSlider}>
                    <svg className="bi bi-x" viewBox="0 0 16 16" fill="white">
                      <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                      <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                    </svg>
                  </span>
                  <div className="card-body individual-slide-body individual-slide-body-2">
                  <h1 className="individual-slide-body-title">{toolsObject[1].mainTitle}</h1>
                    <p className="card-text individual-slide-body-subText">{toolsObject[1].bodyContent}</p>
                  </div>
                </div>
              </div>),
              (<div key={3}>
                <div className="card individual-slide" style={{ background: toolsObject[2].backgroundColor }}>
                  <span className="individual-slide-close" role="button" tabIndex={0} onClick={this.closeSlider} onKeyDown={this.closeSlider}>
                    <svg className="bi bi-x" viewBox="0 0 16 16" fill="white">
                      <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                      <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                    </svg>
                  </span>
                  <div className="card-body individual-slide-body individual-slide-body-3">
                  <h1 className="individual-slide-body-title">{toolsObject[2].mainTitle}</h1>
                    <p className="card-text individual-slide-body-subText">{toolsObject[2].bodyContent}</p>
                  </div>
                </div>
              </div>),
              (<div key={4}>
                <div className="card individual-slide" style={{ background: toolsObject[3].backgroundColor }}>
                  <span className="individual-slide-close" role="button" tabIndex={0} onClick={this.closeSlider} onKeyDown={this.closeSlider}>
                    <svg className="bi bi-x" viewBox="0 0 16 16" fill="white">
                      <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                      <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                    </svg>
                  </span>
                  <div className="card-body individual-slide-body individual-slide-body-4">
                  <h1 className="individual-slide-body-title">{toolsObject[3].mainTitle}</h1>
                    <p className="card-text individual-slide-body-subText">{toolsObject[3].bodyContent}</p>
                  </div>
                </div>
              </div>),
              (<div key={5}>
                <div className="card individual-slide" style={{ background: toolsObject[4].backgroundColor }}>
                  <span className="individual-slide-close" role="button" tabIndex={0} onClick={this.closeSlider} onKeyDown={this.closeSlider}>
                    <svg className="bi bi-x" viewBox="0 0 16 16" fill="white">
                      <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                      <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                    </svg>
                  </span>
                  <div className="card-body individual-slide-body individual-slide-body-5">
                  <h1 className="individual-slide-body-title">{toolsObject[4].mainTitle}</h1>
                    <p className="card-text individual-slide-body-subText">{toolsObject[4].bodyContent}</p>
                  </div>
                </div>
              </div>),
              (<div key={6}>
                <div className="card individual-slide" style={{ background: toolsObject[5].backgroundColor }}>
                  <span className="individual-slide-close" role="button" tabIndex={0} onClick={this.closeSlider} onKeyDown={this.closeSlider}>
                    <svg className="bi bi-x" viewBox="0 0 16 16" fill="white">
                      <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                      <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                    </svg>
                  </span>
                  <div className="card-body individual-slide-body individual-slide-body-6">
                  <h1 className="individual-slide-body-title">{toolsObject[5].mainTitle}</h1>
                    <p className="card-text individual-slide-body-subText">{toolsObject[5].bodyContent}</p>
                  </div>
                </div>
              </div>),
              (<div key={7}>
                <div className="card individual-slide" style={{ background: toolsObject[6].backgroundColor }}>
                  <span className="individual-slide-close" role="button" tabIndex={0} onClick={this.closeSlider} onKeyDown={this.closeSlider}>
                    <svg className="bi bi-x" viewBox="0 0 16 16" fill="white">
                      <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                      <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                    </svg>
                  </span>
                  <div className="card-body individual-slide-body individual-slide-body-7">
                  <h1 className="individual-slide-body-title">{toolsObject[6].mainTitle}</h1>
                    <p className="card-text individual-slide-body-subText">{toolsObject[6].bodyContent}</p>
                  </div>
                </div>
              </div>),
              (<div key={8}>
                <div className="card individual-slide" style={{ background: toolsObject[7].backgroundColor }}>
                  <span className="individual-slide-close" role="button" tabIndex={0} onClick={this.closeSlider} onKeyDown={this.closeSlider}>
                    <svg className="bi bi-x" viewBox="0 0 16 16" fill="white">
                      <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                      <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                    </svg>
                  </span>
                  <div className="card-body individual-slide-body individual-slide-body-8">
                  <h1 className="individual-slide-body-title">{toolsObject[7].mainTitle}</h1>
                    <p className="card-text individual-slide-body-subText">{toolsObject[7].bodyContent}</p>
                  </div>
                </div>
              </div>),
              (<div key={9}>
                <div className="card individual-slide" style={{ background: toolsObject[8].backgroundColor }}>
                  <span className="individual-slide-close" role="button" tabIndex={0} onClick={this.closeSlider} onKeyDown={this.closeSlider}>
                    <svg className="bi bi-x" viewBox="0 0 16 16" fill="white">
                      <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                      <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                    </svg>
                  </span>
                  <div className="card-body individual-slide-body individual-slide-body-9">
                  <h1 className="individual-slide-body-title">{toolsObject[8].mainTitle}</h1>
                    <p className="card-text individual-slide-body-subText">{toolsObject[8].bodyContent}</p>
                  </div>
                </div>
              </div>),
              (<div key={10}>
                <div className="card individual-slide" style={{ background: toolsObject[9].backgroundColor }}>
                  <span className="individual-slide-close" role="button" tabIndex={0} onClick={this.closeSlider} onKeyDown={this.closeSlider}>
                    <svg className="bi bi-x" viewBox="0 0 16 16" fill="white">
                      <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                      <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                    </svg>
                  </span>
                  <div className="card-body individual-slide-body individual-slide-body-10">
                  <h1 className="individual-slide-body-title">{toolsObject[9].mainTitle}</h1>
                    <p className="card-text individual-slide-body-subText">{toolsObject[9].bodyContent}</p>
                  </div>
                </div>
              </div>)
            ]}
            arrows
            infinite
            centered
            slidesPerPage={3}
          />
        </div>
        <div className="tools-parent-mobile">
          {
            toolsObject.map((item) =>
              <div key={item.id} className="tools-parent-mobile-dropdown">
                <button className="btn tools-parent-mobile-dropdown-button" style={{ background: item.backgroundColor }} type="button" data-toggle="collapse" data-target={`#${item.mobileId}`} aria-expanded="false">
                  <i>{item.mainTitle}</i>
                  <svg className="bi bi-chevron-down tools-parent-mobile-dropdown-button-drop" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clipRule="evenodd"/>
                  </svg>
                </button>
                <div className="collapse tools-parent-mobile-dropdown-content" id={`${item.mobileId}`}>
                  <div className="card card-body" style={{ background: item.backgroundColor }}>
                    <p>{item.bodyContent}</p>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
  )}
}

ToolsSlider.propTypes = {
  clickedId:  PropTypes.number
}
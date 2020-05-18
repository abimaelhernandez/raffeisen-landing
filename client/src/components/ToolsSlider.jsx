/* eslint react/prop-types: 0 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ToolsSlider extends Component {

  closeSlider = () => {
    const { resetProps } = this.props
    resetProps(true)
  }

  getActive = (item) => {
    const { clickedId } = this.props
    if(clickedId === item.id){
      return true
    }
    return false
  }

  render(){
    const { toolsObject } = this.props
    
    return (
      <div className="tools-slider-parent">
        <div id="tools-slider" className="carousel slide" data-interval="false" data-ride="carousel">
          
          <div className="carousel-inner">
            { toolsObject.map((item) =>
              <div className={`carousel-item ${this.getActive(item) ? 'active': ''}`} key={item.id}
              style={{background: item.backgroundColor}}
              >
                <span role="button" tabIndex={0} onClick={this.closeSlider} onKeyDown={this.closeSlider}>
                  <svg className="bi bi-x" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clipRule="evenodd"/>
                    <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clipRule="evenodd"/>
                  </svg>
                </span>
                <div className="carousel-caption">
                  <h1>{item.mainTitle}</h1>
                  <p>{item.bodyContent}</p>
                </div>
              </div>
            )}
          </div>

          <a className="carousel-control-prev" href="#tools-slider" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#tools-slider" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
  )}
}

ToolsSlider.propTypes = {
  clickedId:  PropTypes.number
}
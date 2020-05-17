/* eslint react/prop-types: 0 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ToolsSlider extends Component {


  componentDidMount() {    
  }

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
                <span role="button" tabIndex={0} onClick={this.closeSlider} onKeyDown={this.closeSlider}>Close me</span>
                <div className="carousel-caption d-none d-md-block">
                  <p>{item.mainTitle}</p>
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
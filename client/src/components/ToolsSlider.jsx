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
    console.log('Cliked', clickedId, item)
    if(clickedId === item.id){
      return true
    }
    return false
  }

  render(){
    const { clickedId, toolsObject } = this.props
    console.log(clickedId, 'i amd clicked in child')
    console.log('I am the props in child', this.props)
    
    return (
      <div className="tools-slider">
        <button type="button" onClick={this.closeSlider}>Close me</button>
        {toolsObject[0].mainTitle}
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            { toolsObject.map((item) =>
              <div className={`carousel-item ${this.getActive(item) ? 'active': ''}`} key={item.id}>
                <div className="carousel-caption d-none d-md-block">
                  <p>{item.mainTitle}</p>
                </div>
              </div>
            )}
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
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
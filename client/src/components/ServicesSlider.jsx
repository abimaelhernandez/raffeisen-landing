/* eslint react/prop-types: 0 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ServicesSlider extends Component {

  closeSliderView = () => {
    const {resetProps} = this.props
    resetProps(true)
  }

  getActive = (item) => {
    const {clickedId} = this.props
    if(clickedId === item.id){
      return true
    }
    return false
  }

  render(){
    const {passedObj} = this.props
    return (
      <div className="servicesSlider-parent">
        <button
          type="button"
          className="close servicesSlider-parent-close-button"
          aria-label="Close"
          onClick={this.closeSliderView}>
          <span aria-hidden="true">&times;</span>
        </button>
        <div id="servicios-slider-id" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            { passedObj.map((item) =>
              <div key={item.id} className={`carousel-item ${this.getActive(item) ? 'active': ''}`}>
               <img src={item.imageBackground} className="col-sm-12 col-md-6" alt="..."/>
                <div className={`caption ${item.id} col-sm-12 col-md-6`} style={{background : item.backgroundColor}}>
                  <img
                    className="icon"
                    src={item.icon}
                    alt={item.alt}/>
                  <p className="paragraph">{item.mainParahraph}</p>
                  <div className="list-items-container">
                    <li>{Object.values(item.listItems)[0]}</li>
                    <li>{Object.values(item.listItems)[1]}</li>
                    <li>{Object.values(item.listItems)[2]}</li>
                  </div>
                  <p className="clause">{item.mainParahraph}</p>
                </div>
              </div>
            )}
          </div>
          <a className="carousel-control-prev" href="#servicios-slider-id" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#servicios-slider-id" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    )
  }
}

ServicesSlider.propTypes = {
  clickedId:  PropTypes.number
}

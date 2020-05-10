import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ServicesSlider from './ServicesSlider'

export default class Servicios extends Component {
  constructor(){
    super()
    this.state = {
      clickedId: 0,
      hasBeenClicked: false
    }
  }

  clickHandler = (item) => {
  this.setState({ clickedId: item})
  this.setState({ hasBeenClicked: true})
 }

  render(){
    const { clickedId , hasBeenClicked} = this.state
    const { serviceObj } = this.props
    if (hasBeenClicked) {
      return <ServicesSlider pasedObj={serviceObj} clickedId={clickedId}/>
    }
    return (
      <div className="servicios-parent">
        <div className="servicios-parent-container">
          {serviceObj.map((item) =>
            <div className="servicios-parent-container-item" key={item.id}>
              <img
                className="servicios-parent-container-item-img"
                src={item.imageBackground}
                alt="no hello"/>
              <div className="servicios-parent-container-item-logo-container">
                <img
                  className="servicios-parent-container-item-logo-container-asset"
                  src={item.icon}
                  alt={item.alt}/>
                <div className="clickHandler">
                  <button type="button" onClick={this.clickHandler.bind(this, item.id)}>
                    {item.button}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

Servicios.propTypes = {
  serviceObj: PropTypes.instanceOf(Object)
}

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Servicios extends Component {

  clickHandler = (item) => {
  console.log('Item youve clicked', item)
 }

  render(){
    const { serviceObj } = this.props
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
                  alt="Consultoria"/>
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

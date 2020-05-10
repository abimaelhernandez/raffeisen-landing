import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Servicios extends Component {
  constructor(props){
    super(props)
    this.state = {
      example: 'examople this mff'
    }
  }

  clickHandler = () => {
    const {serviceObj} = this.props
  console.log('youve cliked Me toggler ', serviceObj)
 }

  render(){
    const { example } = this.state
    return (
      <div className="servicios-parent">
        <div> {example }</div>
        <div className="servicios-parent-container">
          <div className="servicios-parent-container-item">

            <img
              className="servicios-parent-container-item-img"
              src="../../assets/servicios_light_bulm_full.jpg"
              alt="no hello"/>

            <div className="servicios-parent-container-item-logo-container">
              <img
                className="servicios-parent-container-item-logo-container-asset"
                src="../assets/icons/Consultoria.svg"
                alt="Consultoria"/>
              <div className="clickHandler">
                <button type="button" onClick={this.clickHandler}>
                  click me
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

Servicios.propTypes = {
  serviceObj: PropTypes.instanceOf(Object)
}

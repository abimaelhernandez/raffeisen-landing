import React, { Component } from 'react'

export default class Servicios extends Component {

  clickHandler = () => {
    console.log('youve cliked Me')
  }

  render(){
    return (
      <div className="servicios-parent">
        <div> Sevicios </div>
        <div className="servicios-parent-child-container">
          <div className="servicios-parent-child-container-item">
            <img
              className="servicios-parent-child-container-item-img"
              src="../../assets/servicios_light_bulm_full.jpg"
              alt="no hello"/>
            <div className="servicios-parent-child-container-item-logo-container">
              <img
                className="servicios-parent-child-container-item-logo-container-asset"
                src="../assets/icons/Consultoria.svg"
                alt="Consultoria"/>
              <div className="clickHandler">
                <button type="button" onClick={this.clickHandler}>
                  click me
                </button>
              </div>
            </div>
          </div>
          <div className="servicios-parent-child-container-item">
            <img
              className="servicios-parent-child-container-item-img"
              src="../../assets/servicios_chalk_board.jpg"
              alt="no world"/>
            <div className="servicios-parent-child-container-item-logo-container">
              <img
                className="servicios-parent-child-container-item-logo-container-asset"
                src="../assets/icons/Analitica.svg"
                alt="Analitica"/>
                <div className="clickHandler">
                  <button type="button" onClick={this.clickHandler}>
                    click me
                  </button>
                </div>
            </div>
          </div>
          <div className="servicios-parent-child-container-item">
            <img className="servicios-parent-child-container-item-img" src="../../assets/servicios_wooden_stair.jpg" alt="no Im here"/>
            <div className="servicios-parent-child-container-item-logo-container">
              <img
                className="servicios-parent-child-container-item-logo-container-asset"
                src="../assets/icons/Capacitacion.svg"
                alt="Capacitacion"/>
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

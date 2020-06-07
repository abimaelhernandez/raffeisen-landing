import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import Fade from 'react-reveal/Fade'
import ServicesSlider from './ServicesSlider'

export default class Services extends Component {
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

 resetProps = (childValue) => {
   if (childValue) {
     console.log('childValue Parent is True ', childValue)
     this.setState({hasBeenClicked: false, clickedId: 0})
   }
 }

  render(){
    const { clickedId , hasBeenClicked} = this.state
    const { serviceObj } = this.props
    if (hasBeenClicked && clickedId ) {
      return <ServicesSlider
              passedObj={serviceObj}
              clickedId={clickedId}
              resetProps={this.resetProps}
            />
    }
    return (
      <div className="services-parent" id="services">
        <p className="services-parent-title">Servicios</p>
        <div className="services-parent-container">
          {serviceObj.map((item) =>
            <div
              className="col-sm-12 col-md-4 services-parent-container-item"
              style={{backgroundImage: 'url(../../assets/images/servicios_light_bulm_full.jpg)'}}
              key={item.id}>
            </div>
          )}
        </div>
      </div>
    )
  }
}

Services.propTypes = {
  serviceObj: PropTypes.instanceOf(Object)
}

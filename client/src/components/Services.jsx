import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
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

 resetProps = (childValue) => {
   if (childValue) {
     console.log('childValue Parent is True ', childValue)
     this.setState({hasBeenClicked: false, clickedId: 0})
   }
 }

  render() {
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
      <div className="servicios-parent" id="servicios">
        <Slide left>
          <p className="servicios-parent-title">Servicios</p>
        </Slide>
        <div className="container-fluid servicios-parent-container">
          {serviceObj.map((item) =>
            <div
              className="col-sm-12 col-md-4 services-parent-container-item"
              style={{backgroundImage: `url(${item.imageBackground})`}}
              key={item.id}
            >
              <div
                className="services-parent-container-item-logo-container"
              >
                 <img
                   className="services-parent-container-item-logo-container-asset"
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


Services.propTypes = {
  serviceObj: PropTypes.instanceOf(Object)
}

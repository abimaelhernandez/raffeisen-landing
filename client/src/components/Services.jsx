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
    const { serviceObj, serviceTitle } = this.props
    if (hasBeenClicked && clickedId ) {
      return <ServicesSlider
              passedObj={serviceObj}
              clickedId={clickedId}
              resetProps={this.resetProps}
            />
    }
    return (
      <div className="services-parent" id="services">
        <p className="services-parent-title">{serviceTitle}</p>
        <div className="services-parent-container">
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
                    <button
                      type="button"
                      className="service-info-more"
                      onClick={this.clickHandler.bind(this, item.id)}
                    >
                      <span>
                        {item.button}
                      </span>
                      <svg className="service-info-more-icon" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z"/>
                      </svg>
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
  serviceObj: PropTypes.instanceOf(Object),
  serviceTitle: PropTypes.string
}

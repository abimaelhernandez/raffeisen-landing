import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import Fade from 'react-reveal/Fade'
import ServicesSlider from './ServicesSlider'

export default class Services extends Component {
  constructor(){
    super()
    this.state = {
      clickedId: 0,
      hasBeenClicked: false,
      test: false
    }
  }

  clickHandler = (item) => {
    this.setState({ clickedId: item})
    this.setState({ hasBeenClicked: true})
   }

   resetProps = (childValue) => {
     if (childValue) {
       console.log('childValue Parent is True ', childValue)
       this.setState({hasBeenClicked: false, clickedId: 0, test:false })
     }
   }

   changeClass = (id) => {
     const {hasBeenClicked, clickedId } = this.state
     console.log('inside calss name', id)
     if(hasBeenClicked) {
       this.fireSetTime()
     }
     return hasBeenClicked && clickedId === id && 'correctId'
   }

   fireSetTime = () => {
     // const { test } = this.state
     console.log('test')
     setTimeout(() => this.setState({ test: true }), 1000)
   }

  render(){
    const { clickedId , hasBeenClicked, test} = this.state
    const { serviceObj, serviceTitle, sectionRef } = this.props
    console.log('serv title :', serviceTitle, hasBeenClicked)
    if (test) {
      return <ServicesSlider
              passedObj={serviceObj}
              clickedId={clickedId}
              resetProps={this.resetProps}
            />
    }
    return (
      <div className="services" id={sectionRef}>
        <div className="services-container">
          {serviceObj.map((item) =>
            <div
              className={`col-sm-12 col-md-4 services-container-item ${item.name} ${hasBeenClicked && clickedId !== item.id && 'disabled'} ${this.changeClass(item.id)}`}
              style={{backgroundImage: `url(${item.imageBackground})`}}
              key={item.id}
              onClick={this.clickHandler.bind(this, item.id)}
              onKeyDown={this.clickHandler.bind(this, item.id)}
              role="button"
              tabIndex={0}
            >
              <div className="services-container-item-title">
                <div
                  className="services-container-item-title-logo"
                  style={{backgroundImage: `url(${item.icon})`}}
                />
                <p className="services-container-item-title-text">
                  {item.alt}
                </p>
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
  serviceTitle: PropTypes.string,
  sectionRef: PropTypes.string
}

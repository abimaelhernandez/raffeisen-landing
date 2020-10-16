import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import Fade from 'react-reveal/Fade'
// import ServicesSlider from './ServicesSlider'

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
     this.setState({hasBeenClicked: false, clickedId: 0})
   }
 }

 changeColumn (item){
   const {clickedId, hasBeenClicked} = this.state
   console.log('clickedId', clickedId, hasBeenClicked, item)
    if(hasBeenClicked && clickedId === item){
      return 6
    }
    return 4
 }

  render(){
    const { clickedId , hasBeenClicked} = this.state
    const { serviceObj, sectionRef } = this.props
    // if (hasBeenClicked && clickedId ) {
    //   return <ServicesSlider
    //           passedObj={serviceObj}
    //           clickedId={clickedId}
    //           resetProps={this.resetProps}
    //         />
    // }
    return (
      <div className="services" id={sectionRef}>
        <div className="services-container">
          {serviceObj.map((item) =>
            <div
              className={`services-container-item ${item.name} ${hasBeenClicked && clickedId !== item.id &&  'disabled'} ${this.changeColumn(item.id)} ${hasBeenClicked && clickedId === item.id && 'clicked'}`}
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
  sectionRef: PropTypes.string
}

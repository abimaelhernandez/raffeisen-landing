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
      visibility: false
    }
  }

  clickHandler = (item) => {
    this.setState({ clickedId: item})
    this.setState({ hasBeenClicked: true})
  }

  resetProps = (childValue) => {
    if (childValue) {
      this.setState({
        hasBeenClicked: false,
        clickedId: 0,
        visibility: false
      })
    }
  }

  fireSetTime = () => {
    setTimeout(() => this.setState({ visibility: true }), 1100)
    console.log('test')
  }

  changeColumn (id){
    const {clickedId, hasBeenClicked} = this.state
    console.log('clickedId', clickedId, hasBeenClicked, id)
    if (hasBeenClicked && clickedId === id){
      return 6
    }
    return 4
  }

  identifyId (id){
    const {clickedId, hasBeenClicked} = this.state
    if (hasBeenClicked) {
      this.fireSetTime()
      if (clickedId === id &&
        clickedId !== 1) {
          return 'clicked'
        }
      return 'firstSquare'
    }
 }

  render(){
    const { clickedId , hasBeenClicked, visibility } = this.state
    const { serviceObj, sectionRef } = this.props
    if (visibility) {
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
              className={`services-container-item ${item.name} ${hasBeenClicked && clickedId !== item.id &&  'disabled'} ${this.changeColumn(item.id)} ${this.identifyId(item.id)}`}
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

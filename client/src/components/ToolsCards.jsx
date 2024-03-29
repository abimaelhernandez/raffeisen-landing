import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Flip from 'react-reveal/Flip'
import ToolsSlider from './ToolsSlider'

export default class ToolsCard extends Component {
  constructor(){
    super()
    this.state = {
      clickedId: 0,
      hasBeenClicked: false
    }
  }

clickHandler = (item) => {
  this.setState({ clickedId: item, hasBeenClicked: true })
}

resetProps = (value) => {
  if (value) this.setState({ clickedId: 0, hasBeenClicked: false })
}

  render() {
    const { clickedId, hasBeenClicked } = this.state
    const { toolsObject, toolsHeader, sectionRef } = this.props

    if (hasBeenClicked) {
      return (
        <div className="tools-parent" id={sectionRef}>
          <div className="tools-parent-header">
            <div className="tools-parent-header-title">
              <h1>{toolsHeader.title}</h1>
            </div>
            <div className="tools-parent-header-subText">
              <p>{toolsHeader.subText}</p>
            </div>
          </div>
          <ToolsSlider toolsObject={toolsObject} clickedId={clickedId} resetProps={this.resetProps}/>
        </div>
      )
    }
    return (
      <div className="tools-parent" id={sectionRef}>
        <div className="tools-parent-header">
          <div className="tools-parent-header-title">
            <h1>{toolsHeader.title}</h1>
          </div>
          <div className="tools-parent-header-subText">
            <p>{toolsHeader.subText}</p>
          </div>
        </div>
        
        <div className="tools-parent-desktop">
          <div className="tools-parent-desktop-cards">
          {toolsObject.map((item) =>
            <Flip right key={item.id}>
              <div role="button" tabIndex="0" onKeyPress={this.clickHandler.bind(this, item.id)} onClick={this.clickHandler.bind(this, item.id)} className="tools-parent-desktop-cards-card" style={{ background: item.backgroundColor }}>
                <div className="tools-parent-desktop-cards-card-content">
                  <div className="card-title">
                    <p>{item.mainTitle}</p>
                    <div className="iconContainer">
                      <img src={item.icon} alt={item.alt} className="iconContainer-icon"/>
                    </div>
                  </div>
                </div>
              </div>
            </Flip>
          )}
        </div>
        </div>

        <div className="tools-parent-mobile">
          {
            toolsObject.map((item) =>
            <Flip top key={item.id}>
                <div className="tools-parent-mobile-dropdown">
                  <button className="btn tools-parent-mobile-dropdown-button" style={{ background: item.backgroundColor }} type="button" data-toggle="collapse" data-target={`#${item.mobileId}`} aria-expanded="false">
                    <i>{item.mainTitle}</i>
                    <svg className="bi bi-chevron-down tools-parent-mobile-dropdown-button-drop" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clipRule="evenodd"/>
                    </svg>
                  </button>
                  <div className="collapse tools-parent-mobile-dropdown-content" id={`${item.mobileId}`}>
                    <div className="card card-body" style={{ background: item.backgroundColor }}>
                      <p>{item.bodyContent}</p>
                      <div className="tools-parent-mobile-dropdown-content-iconContainer">
                        <img src={item.icon} alt={item.alt} className="tools-parent-mobile-dropdown-content-iconContainer-icon"/>
                      </div>
                    </div>
                  </div>
                </div>
              </Flip>
            )
          }
        </div>
      </div>
  )}
}

ToolsCard.propTypes = {
  toolsObject: PropTypes.instanceOf(Object),
  toolsHeader: PropTypes.instanceOf(Object),
  sectionRef: PropTypes.string
}

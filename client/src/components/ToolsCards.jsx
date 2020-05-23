import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
    const { toolsObject } = this.props
    const { clickedId, hasBeenClicked } = this.state
    if (hasBeenClicked) { 
      return <ToolsSlider toolsObject={toolsObject} clickedId={clickedId} resetProps={this.resetProps}/>
    }
    return (
      <div className="toolsParent" id="herramientas">
        <div className="toolsParent-header">
          <div className="toolsParent-header-title">
            <h1>Herramientas</h1>
          </div>
          <div className="toolsParent-header-subText">
            <p>Buscando consolidar los procesos de gestión y consultoría integral, Raiffeisen Latina propone un grupo de herramientas sistematizadas conceptualizadas y desarrolladas por DGRV para el sector cooperativo y de finanzas incluyentes.</p>
          </div>
        </div>
        <div className="toolsParent-cards card-body">
          {toolsObject.map((item) => 
            <div key={item.id} className="toolsParent-cards-card">
              <div className="toolsParent-cards-card-content" style={{ background: item.backgroundColor }}>
                <div className="toolsParent-cards-card-content-openButton">
                  <span 
                    role="button" 
                    tabIndex={0} 
                    onKeyDown={this.clickHandler.bind(this, item.id)} 
                    onClick={this.clickHandler.bind(this, item.id)}
                    >
                    &gt;
                  </span>
                </div>
                <p className="toolsParent-cards-card-content-title">{item.mainTitle}</p>
                </div>
            </div>
          )}
        </div>
      </div>
  )}
}

ToolsCard.propTypes = {
  toolsObject: PropTypes.instanceOf(Object)
}
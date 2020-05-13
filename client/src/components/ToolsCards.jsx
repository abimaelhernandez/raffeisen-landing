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


componentDidMount() {
  const { toolsObject } = this.props
  console.log(toolsObject[1].mainTitle, 'in tools')
}
  
clickHandler = (item) => {
  // const { clickedId } = this.state
  this.setState({ clickedId: item, hasBeenClicked: true })
  console.log(item, 'I am clicked id')
}

resetProps = (value) => {
  if (value) {
    this.setState({ clickedId: 0, hasBeenClicked: false })
  }
  console.log('props cleaned from child', value)
}

  render() {
    const { toolsObject } = this.props
    const { clickedId, hasBeenClicked } = this.state
    if (hasBeenClicked) {
      return <ToolsSlider
              toolsObject={toolsObject}
              clickedId={clickedId}
              resetProps={this.resetProps}
              />
    }
    return (
      <div className="tools-parent">
        {clickedId}
        <div>
          <h1>Herramientas</h1>
        </div>
        <div>
          <p>Buscando consolidar los procesos de gestión y consultoría integral, Raiffeisen Latina propone un grupo de herramientas sistematizadas conceptualizadas y desarrolladas por DGRV para el sector cooperativo y de finanzas incluyentes.</p>
        </div>
        <div className="cards-container card-body">
          {toolsObject.map((item) => 
            <div key={item.id} className="card">
              <button type="button" onClick={this.clickHandler.bind(this, item.id)}>&gt;</button>
              <p>{item.mainTitle}</p>
            </div>
          )}
        </div>
      </div>
  )}
}

ToolsCard.propTypes = {
  toolsObject: PropTypes.instanceOf(Object)
}
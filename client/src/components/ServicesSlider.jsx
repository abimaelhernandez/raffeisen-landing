import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ServicesSlider extends Component {
  constructor() {
    super()
    this.state = {
      centerItem: {}
    }
  }

  componentDidMount() {
    const {clickedId, pasedObj} = this.props
    this.getClickedId(clickedId, pasedObj)
  }

  getClickedId = (clickedId, passedObj) => {
    console.log(clickedId , 'da ¡m adi')
    const objOfSelected = clickedId && passedObj.find(obj => obj.id === clickedId)
      this.setState({ centerItem: objOfSelected})
  }

  render(){
    const {centerItem} = this.state
    console.log('props passed to child :', centerItem)
    return (
      <div className="servicesSlider-parent">
        <img className="servicesSlider-parent-img" alt="..." src={centerItem.imageBackground}/>
        <div className="servicesSlider-parent-info-container">
         <p>{centerItem.mainParahraph}</p>
         <p>{centerItem.secondaryParagraph}</p>
        </div>
      </div>
    )
  }
}

ServicesSlider.propTypes = {
  pasedObj: PropTypes.instanceOf(Object),
  clickedId:  PropTypes.number
}

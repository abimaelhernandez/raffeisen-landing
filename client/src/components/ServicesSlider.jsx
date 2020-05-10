/* eslint react/prop-types: 0 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ServicesSlider extends Component {
  constructor() {
    super()
    this.state = {
      centerItem: {},
      rightItem: {}
    }
  }

  componentDidMount() {
    const {clickedId, pasedObj} = this.props
    this.getClickedId(clickedId, pasedObj)
  }

  getClickedId = (clickedId, passedObj) => {
    const objLength = clickedId && Object.keys(passedObj).length

    const centerObj = clickedId && passedObj.find(obj => obj.id === clickedId)

    const goRight = clickedId === objLength
     ? passedObj.find(obj => obj.id === clickedId)
     : passedObj.find(obj => obj.id === clickedId + 1)

    console.log('Clicked', clickedId, clickedId -1)
      this.setState({
        centerItem: centerObj,
        rightItem: goRight
      })

  }

  closeSliderView = () => {
    const {resetProps} = this.props
    resetProps(true)
  }

  render(){
    const {centerItem, rightItem} = this.state
    console.log('props passed to child :', centerItem)
    return (
      <div className="servicesSlider-parent">
        <button
          type="button"
          className="close servicesSlider-parent-close-button"
          aria-label="Close"
          onClick={this.closeSliderView}>
          <span aria-hidden="true">&times;</span>
        </button>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="servicesSlider-parent-img" alt="..." src={centerItem.imageBackground}/>
              <div className="servicesSlider-parent-info-container">
               <p>{centerItem.mainParahraph}</p>
               <p>{centerItem.secondaryParagraph}</p>
              </div>
            </div>

            <div className="carousel-item">
              <img className="servicesSlider-parent-img" alt="..." src={rightItem.imageBackground}/>
              <div className="servicesSlider-parent-info-container">
               <p>{rightItem.mainParahraph}</p>
               <p>{rightItem.secondaryParagraph}</p>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    )
  }
}

ServicesSlider.propTypes = {
  pasedObj: PropTypes.instanceOf(Object),
  clickedId:  PropTypes.number,
}



// <div className="carousel-item">
//   <img src={leftItem.imageBackground} className="d-block w-100" alt="..."/>
//   <div className="servicesSlider-parent-info-container">
//     <p>{leftItem.mainParahraph}</p>
//     <p>{leftItem.secondaryParagraph}</p>
//   </div>
// </div>

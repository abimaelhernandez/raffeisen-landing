/* eslint react/prop-types: 0 */
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
    // const {clickedId} = this.props
  }


  closeSliderView = () => {
    const {resetProps} = this.props
    resetProps(true)
  }

  getActive = (item) => {
    const {clickedId} = this.props
    console.log('Clicked', clickedId, item)
    if(clickedId === item.id){
      return true
    }
    return false
  }

  render(){
    const {centerItem} = this.state
    const {passedObj} = this.props
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
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            { passedObj.map((item) =>
              <div className={`carousel-item ${this.getActive(item) ? 'active': ''}`}>
               <img src={item.imageBackground} className="d-block w-50" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <p>{item.mainParahraph}</p>
                </div>
              </div>
            )}
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

      </div>
    )
  }
}

ServicesSlider.propTypes = {
  clickedId:  PropTypes.number,
}
// passedObj: PropTypes.instanceOf(Object),


// <div className="carousel-item">
//   <img src={leftItem.imageBackground} className="d-block w-100" alt="..."/>
//   <div className="servicesSlider-parent-info-container">
//     <p>{leftItem.mainParahraph}</p>
//     <p>{leftItem.secondaryParagraph}</p>
//   </div>
// </div>

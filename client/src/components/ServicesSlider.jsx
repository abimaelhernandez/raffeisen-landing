/* eslint react/prop-types: 0 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ServicesSlider extends Component {

  closeSliderView = () => {
    const {resetProps} = this.props
    resetProps(true)
  }

  getActive = (item) => {
    const {clickedId} = this.props
    if(clickedId === item.id){
      return true
    }
    return false
  }

  render() {
    const {passedObj, sectionRef} = this.props
    return (
      <div className="servicesSlider-parent" id={sectionRef}>
        <button
          type="button"
          className="close servicesSlider-parent-close"
          aria-label="Close"
          onClick={this.closeSliderView}
        >
        </button>
        <div
          id="services-slider"
          className="carousel slide"
          data-ride="carousel" data-interval="false"
        >
          <div className="carousel-inner">
            { passedObj.map((item) =>
            <div
              key={item.id}
              className={`carousel-item ${this.getActive(item) ? 'active': ''}`}
            >
              <div className="inner-container">
                <div className={`image ${item.name}`}>
                  <p className='title'>
                    <span className={`icon ${item.name}`} />
                    <span className='text'> { item.alt } </span>
                  </p>
                </div>
                <div
                  className="caption"
                >
                  <p className={`paragraph ${item.name}`}>
                    {item.mainParahraph}
                  </p>
                  <div className={`list-items ${item.name}`}>
                    <div className="item image1" />
                    <div className="item image2" />
                    <div className="item image3" />
                  </div>
                  <div className="quotes">
                    {Object.values(item.listItems).map(listItem =>
                      <p className={`text ${item.name}`} key={listItem}>{listItem}</p>
                    )}
                  </div>
                  <p className="clause">
                    {item.secondaryParagraph}
                  </p>
                </div>
              </div>
            </div>
            )}
          </div>
          <a
            className="carousel-control-prev"
            href="#services-slider"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            >
            </span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#services-slider"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            >
            </span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    )
  }
}

ServicesSlider.propTypes = {
  clickedId:  PropTypes.number,
  sectionRef: PropTypes.string
}

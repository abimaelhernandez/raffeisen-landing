import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class InovationBanner extends Component {

  renderInovation = () => {
    let lastPosition = 0

    window.addEventListener('scroll', () => {
      lastPosition = window.scrollY
      return lastPosition > 300 && true
    })
  }

  render (){
    const {inovationInfo} = this.props
    if(window.scrollY > 300) {
    return(
      <div className="inovation-banner" id="nosotros">
        <img
          className="circleImage"
          src="../../assets/icons/Orange-Plus.svg"
          alt="Orange Plus Sign"/>
        <div id="mainTitle" className="inovation-banner-main-container">
            <span className="inovation-banner-main-container-title">
              {inovationInfo.topPhrase}
            </span>
          </div>
          <div id="content" className="inovation-banner-contentContainer">
            <span className="dot"></span>
            <div className="inovation-banner-contentContainer-title">
             {inovationInfo.title}
            </div>
            <p className="inovation-banner-contentContainer-paragraph">
             {inovationInfo.mainParahraph}
            </p>
            <p>
             {inovationInfo.secondaryParagraph}
            </p>
          </div>
          <img
            className="squareImage"
            src="../../assets/icons/Yellow-Plant.svg"
            alt="ellow Plant Icon"/>
      </div>
    )}
   return (<h1> hello world </h1>)
  }
}

InovationBanner.propTypes = {
  inovationInfo: PropTypes.instanceOf(Object)
}

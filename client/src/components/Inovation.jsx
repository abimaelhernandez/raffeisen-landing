import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class InovationBanner extends Component {
  render (){
    const {inovationInfo} = this.props
    return (
    <div className="about-us_inovation" id="nosotros">
      <img
        className="about-us_inovation-icon circle"
        src="../../assets/icons/Circulo_rojo.svg"
        alt={inovationInfo.topPhrase}
      />
      <h2 className="about-us_inovation-title">{ inovationInfo.topPhrase } </h2>
      <div id="content" className="about-us_inovation-conatiner">
        <span className="bullet-point" />
        <div className="about-us_inovation-content-wrap">
          <p className="about-us_inovation-description-title">{ inovationInfo.title }</p>
          <p className="about-us_inovation-description">{ inovationInfo.mainParahraph } </p>
          <p className="about-us_inovation-description">{ inovationInfo.secondaryParagraph }</p>
        </div>
      </div>
      <img
        className="about-us_inovation-icon triangle"
        src="../../assets/icons/Triangle-green.svg"
        alt={inovationInfo.title}
      />
    </div>
    )
  }
}

InovationBanner.propTypes = {
  inovationInfo: PropTypes.instanceOf(Object)
}

import React,{ Component } from 'react'
// import Fade from 'react-reveal/Fade'
// import Roll from 'react-reveal/Roll'
import PropTypes from 'prop-types'

export default class Coverage extends Component {
  render() {
    const { coverageInfo } = this.props
    return (<div className="rl_coverage" id="cobertura">

      <div className="rl_coverage_description">
        <h2 className="rl_coverage-title" >{ coverageInfo.title }</h2>
        <p className="rl_coverage-text">{ coverageInfo.description }</p>
      </div>
      <div
        className="rl_coverage-map-img"
        style={{backgroundImage: 'url("../assets/images/coverage_map.svg")'}}
      >
      <div className="rl_coverage-map-countries">
        {
          coverageInfo.countries.map((country) =>
          country.sections ? <div className="rl_coverage-map-countries-section">
          {country.sections.map((place) =>
            <span className={`dot ${place.style}`}><span className="country-name">{ place.name }</span></span>
          )}
          </div>:
          <span className={`dot ${country.style}`}><span className="country-name">{ country.name }</span></span>)
        }
      </div>

    </div>

    </div>)
  }
}

Coverage.propTypes = {
  coverageInfo: PropTypes.instanceOf(Object),
}

import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Coverage extends Component {
  constructor() {
    super()
    this.state = {
      animationstart: false
    }
  }

  componentDidUpdate(prevProps) {
    const { animationstart } = this.state
    const { sectionRef } = this.props
    if (prevProps.animationReady === sectionRef && !animationstart) {
      this.startAnimation()
    }
  }

  startAnimation = () => {
    this.setState({ animationstart: true })
  }

  changeClassName = (name) => {
    const {animationstart} = this.state
    return `${name} ${animationstart ? 'start-animation' : ''}`
  }

  render() {
    const { coverageInfo, sectionRef} = this.props
    return (<div className="rl_coverage" id={sectionRef}>
      <div className="rl_coverage_description">
        <h2 className="rl_coverage-title">
          {coverageInfo.title}
        </h2>
        <p className="rl_coverage-text">
          {coverageInfo.description}
        </p>
      </div>
      <div className={this.changeClassName('rl_coverage-map-img')}>
        <div className={this.changeClassName('rl_coverage-map-countries')}>
          { coverageInfo.countries.map((country) => country.sections
              ? <div
                  key={`sections-${country.sections[0].style}`}
                  className="rl_coverage-map-countries-section"
                >
                { country.sections.map((place) =>
                  <span
                    key={`${place.name}-${place.style}`}
                    className={`dot ${this.changeClassName(place.style)}`}
                  >
                    <span className="country-name">{place.name}</span>
                  </span>)
                }
              </div>
              : <span
                  key={`${country.name}-${country.style}`}
                  className={`dot ${this.changeClassName(country.style)}`}
                >
                <span className="country-name">{country.name}</span>
              </span>)
          }
        </div>
      </div>
    </div>)
  }
}

Coverage.propTypes = {
  coverageInfo: PropTypes.instanceOf(Object),
  animationReady: PropTypes.string,
  sectionRef: PropTypes.string
}

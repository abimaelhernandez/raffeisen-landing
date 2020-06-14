import React,{ Component } from 'react'
// import Fade from 'react-reveal/Fade'
// import Roll from 'react-reveal/Roll'
import PropTypes from 'prop-types'

export default class Slider extends Component {
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
      <div className="rl_coverage-map-dots">
        <span className="dot"><span className="dot-hover">DOT 1</span></span>
        <div className="rl_coverage-map-dots-section">
          <span className="dot dot-2"><span className="dot-hover">DOT 2</span></span>
          <span className="dot dot-3"><span className="dot-hover">DOT 3</span></span>
        </div>
        <span className="dot"><span className="dot-hover">MEXICO</span></span>
        <span className="dot"><span className="dot-hover">MEXICO</span></span>
        <span className="dot"><span className="dot-hover">NICARAGUA</span></span>
        <span className="dot"><span className="dot-hover">MEXICO</span></span>
        <span className="dot"><span className="dot-hover">MEXICO</span></span>

      </div>

    </div>

    </div>)
  }
}

Slider.propTypes = {
  coverageInfo: PropTypes.instanceOf(Object),
}

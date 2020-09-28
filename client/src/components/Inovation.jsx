import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class InovationBanner extends Component {
  constructor() {
    super()
    this.state = {
      animationstart: false
    }
  }

  componentDidMount() {
    const { sectionRef } = this.props
    this.setState({animationstart: window.location.href.includes(sectionRef)})
    if (window.innerWidth > 800) {
      const aboutUs = document.getElementById(`${sectionRef}`)
      aboutUs.onmouseover = this.startAnimation
    } else {
      this.setState({animationstart: true})
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
    this.setState({animationstart: true})
  }

  changeClassName = (name) => {
    const {animationstart} = this.state
    return `${name} ${animationstart ? 'start-animation' : ''}`
  }

  leftGear = () =>  {
    // styles
    console.log('wondow :',window)
    const rotate = - window.scrollY / 10 * Math.PI
    const divStyle = {
      transform: `rotate(${rotate}deg)`
    }
    return  <img
              style={divStyle}
              className={this.changeClassName('leftGear')}
              src="../../assets/icons/red-gear.svg"
              alt="Circles Icon"
            />
  }

  rightGear = () => {
    const rotate = window.scrollY / 10 * Math.PI
    const divStyle = {
      transform: `rotate(${rotate}deg)`
    }
    return  <img
              style={divStyle}
              className={this.changeClassName('rightGear')}
              src="../../assets/icons/blue-gear.svg"
              alt="Triangle Icon"
              id="rightgear"
            />
  }

  render() {
    const {inovationInfo, sectionRef} = this.props
    return (
      <div className="inovation-banner" id={sectionRef}>
        <div className="inovation-banner-content">
          <this.leftGear/>
          <div
            id="mainTitle"
            className={this.changeClassName('inovation-banner-main-container')}
          >
            <span className="inovation-banner-main-container-title">
              {inovationInfo.topPhrase}
            </span>
          </div>
          <div className={this.changeClassName('inovation-banner-secondary')}>
            <div className="inovation-banner-secondary-title">
              {inovationInfo.title}
            </div>
            <p className="inovation-banner-secondary-paragraph">
              {inovationInfo.mainParahraph}
            </p>
            <p>
              {inovationInfo.secondaryParagraph}
            </p>
          </div>
          <this.rightGear/>
        </div>
      </div>
    )
  }
}

InovationBanner.propTypes = {
  inovationInfo: PropTypes.instanceOf(Object),
  animationReady: PropTypes.string,
  sectionRef: PropTypes.string
}

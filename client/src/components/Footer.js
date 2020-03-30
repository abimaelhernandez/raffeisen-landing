import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer" >
        <div className="twitter-handle">@RaiffeisenLatam </div>
        <div className="email">info@rflatina.com</div>
        <div className="adress-conta-info">
          Ciudad de México, México +52.55.5037.5992 | +52.55.6273.8897
          Asunción, Paraguay +595.21.62.996
        </div>
        <div className="org">Confederación Alemana de Cooperativas www.dgrv.org</div>
      </div>
    )
  }
}

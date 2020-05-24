/* eslint react/prop-types: 0 */
import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

// const google = this.props

class GoogleMap extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stores: [{latitude: 47.49855629475769, longitude: -122.14184416996333},
              {latitude: 47.359423, longitude: -122.021071},
              {latitude: 47.2052192687988, longitude: -121.988426208496},
              {latitude: 47.6307081, longitude: -122.1434325},
              {latitude: 47.3084488, longitude: -122.2140121},
              {latitude: 47.5524695, longitude: -122.0425407}]
    }
  }

  displayMarkers = () => {
    const { stores } = this.state
    return stores.map((store, index) =>
      <Marker key={store.latitude} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={() => console.log('You clicked me!')} />
    )
  }

  render() {
    const mapStyles = {
      width: '100%',
      height: '100%'
    }
    const { google } = this.props
    return (
        <Map
          google={google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        >
          {this.displayMarkers()}
        </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyClqN39okt4l971oS6cBdQnnKMWh8wAf1s'
})(GoogleMap)

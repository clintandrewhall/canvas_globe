import React from 'react';
import { AmbientLight, AppRegistry, asset, View, VrButton, Text } from 'react-360';

import Earth from './src/react-vr-geolocate';
import Marker from './src/marker';

export default class canvas_globe extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
    };
  }

  render() {
    const earthRadius = 1;
    const locations = this.props.locations || [];
    const markers = locations.map(location => ({
      coordinates: {
        lat: parseFloat(location.lat),
        lon: parseFloat(location.lng),
      },
      component: <Marker highlighted={true} label={location.name} />,
    }));

    return this.props.locations ? (
      <View>
        <View style={{ alignItems: 'center' }}>
          <View
            style={{
              position: 'absolute',
              transform: [{ translate: [0, 0, -2.25] }],
            }}
          >
            <Earth
              locationMarkerStyle={{ color: 'red' }}
              showLocationMarkers={true}
              wrap={asset('earth.jpg')}
              locationContent={markers}
              scale={earthRadius}
              focalPoint={markers[this.state.index]}
            />
          </View>
          <AmbientLight intensity={1.2} decay={100} />
        </View>
        <VrButton
          style={{
            flex: 1,
            justifyContent: 'center',
            alignContent: 'center',
            position: 'absolute',
            transform: [{ translate: [2, 0, -3] }],
          }}
          onClick={() => {
            this.setState({
              index: Math.min(this.state.index + 1, markers.length - 1),
            });
          }}
        >
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 0.25,
            }}
          >
            {'>'}
          </Text>
        </VrButton>
        <VrButton
          style={{
            flex: 1,
            justifyContent: 'center',
            alignContent: 'center',
            position: 'absolute',
            transform: [{ translate: [-2, 0, -3] }],
          }}
          onClick={() => {
            this.setState({
              index: Math.max(this.state.index - 1, 0),
            });
          }}
        >
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 0.25,
            }}
          >
            {'<'}
          </Text>
        </VrButton>
      </View>
    ) : null;
  }
}

AppRegistry.registerComponent('canvas_globe', () => canvas_globe);

import React from 'react';
import { AmbientLight, AppRegistry, StyleSheet, NativeModules, asset, View } from 'react-360';

const { NativeModule } = NativeModules;

import Earth from './src/react-vr-geolocate';
import Marker from './src/marker';

export default class canvas_globe extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      locations: null,
    };
  }

  componentDidMount() {
    setInterval(() => this._checkStorage(), 5000);
  }

  _checkStorage() {
    console.log('Checking for data...');
    NativeModule.getData(data => {
      console.log('DATA', typeof data);
      const locations = JSON.parse(data).map(location => ({
        coordinates: {
          lat: parseFloat(location.lat),
          lon: parseFloat(location.lng),
        },
        component: <Marker highlighted={true} label={location.name} />,
      }));

      this.setState({ locations });
    });
  }

  render() {
    const earthRadius = 1;

    return this.state.locations ? (
      <View>
        <View style={{ alignItems: 'center' }}>
          <View
            style={{
              position: 'absolute',
              transform: [{ translate: [0, 0, -3] }],
            }}
          >
            <Earth
              locationMarkerStyle={{ color: 'red' }}
              showLocationMarkers={true}
              wrap={asset('earth.jpg')}
              locationContent={this.state.locations}
              scale={earthRadius}
              focalPoint={this.state.locations[this.state.index]}
            />
          </View>
          <AmbientLight intensity={1.2} decay={100} />
        </View>
      </View>
    ) : null;
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('canvas_globe', () => canvas_globe);

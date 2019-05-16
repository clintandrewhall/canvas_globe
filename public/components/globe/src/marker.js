import React from 'react';
import { Image, asset, View, Text } from 'react-360';

export default class Marker extends React.Component {
  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          flex: 1,
          backfaceVisibility: 'hidden',
          justifyContent: 'center',
          transform: [{ rotateX: 30 }, { translate: [0, 0.065, 0] }],
        }}
      >
        <View
          style={{
            display: this.props.highlighted ? 'flex' : 'none',
            backfaceVisibility: 'hidden',
            backgroundColor: '#F3F3F3',
            paddingLeft: 0.025,
            paddingRight: 0.025,
            height: 0.05,
            flex: 1,
            transform: [
              { scale: 1.75 },
              {
                translateY: 0.07,
              },
            ],
          }}
        >
          <Text
            style={{
              backfaceVisibility: 'hidden',
              display: 'flex',
              textAlign: 'center',
              textAlignVertical: 'center',
              fontSize: 0.025,
              color: '#000',
              transform: [{ translate: [0, -0.005, 0] }],
            }}
          >
            {this.props.label}
          </Text>
        </View>
        <Image
          style={{
            display: this.props.highlighted ? 'flex' : 'none',
            position: 'absolute',
            width: 0.075,
            height: 0.075,
            transform: [{ translateY: 0 }],
          }}
          source={asset('pin.png')}
        />
      </View>
    );
  }
}

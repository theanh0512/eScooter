import React from 'react';
import Svg, { Path } from 'react-native-svg';
import Colors from 'app/common/Colors';

const SvgIconfinderBatteryLow = props => (
  <Svg height={32} width={32} {...props}>
    <Path fill="none" d="M0 0h32v32H0z"/>
    <Path fill={Colors.activeRed} d="M24 12h4v8h-4z"/>
    <Path d="M4 8v4H0v8h4v4h28V8H4zm2 14V10h24v12H6z"/>
  </Svg>
);

export default SvgIconfinderBatteryLow;


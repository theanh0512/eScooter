import React from 'react';
import Svg, { Path } from 'react-native-svg';
import Colors from 'app/common/Colors';

const SvgIconfinderBatteryMedium = props => (
  <Svg height={32} width={32} {...props}>
    <Path fill="none" d="M0 0h32v32H0z"/>
    <Path fill={Colors.yellow} d="M16 12h12v8H16z"/>
    <Path d="M4 8v4H0v8h4v4h28V8H4zm2 14V10h24v12H6z"/>
  </Svg>
);

export default SvgIconfinderBatteryMedium;


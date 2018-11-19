import React from 'react';
import Svg, { Path } from 'react-native-svg';

const MenuIconHome = props => (
  <Svg width="24" height="24" viewBox="0 0 24 24">
    <Path
      id="a"
      fill={props.fillColor}
      d="M15.505 9H13v10h2.505A3.498 3.498 0 0 0 19 15.506v-3.011A3.5 3.5 0 0 0 15.505 9zM2.5 17h-1a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1zM20 12.495A4.5 4.5 0 0 0 15.505 8H12.5a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h3.005A4.5 4.5 0 0 0 20 15.506v-3.011zM12 4h7v-.5C19 2.121 17.878 1 16.5 1h-2A2.502 2.502 0 0 0 12 3.5V4zm12 .5v19a.5.5 0 0 1-.5.5h-16a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 0 0-1h-4a.5.5 0 1 1 0-1H7v-5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 0 0-1h-5a.5.5 0 1 1 0-1H7V4.5a.5.5 0 0 1 .5-.5H11v-.5A3.5 3.5 0 0 1 14.5 0h2A3.5 3.5 0 0 1 20 3.5V4h3.5a.5.5 0 0 1 .5.5zM5.5 14h-5a.5.5 0 1 1 0-1h5a.5.5 0 0 1 0 1z"
    />
  </Svg>
);
module.exports = MenuIconHome;

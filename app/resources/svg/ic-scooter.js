import React from 'react';
import Svg, { Path } from 'react-native-svg';
import Colors from 'app/common/Colors';

const ScooterIcon = props => (
  <Svg width="24" height="24" viewBox="0 0 24 24">
    <Path
      id="a"
      fill={props.fillColor ? props.fillColor : Colors.purple}
      d="M4.5,20 C2.57,20 1,18.43 1,16.5 C1,14.57 2.57,13 4.5,13 C6.43,13 8,14.57 8,16.5 C8,18.43 6.43,20 4.5,20 Z M15.5,2 C15.225,2 15,1.775 15,1.5 C15,1.225 15.225,1 15.5,1 L16.133,1 L16.446,2 L15.5,2 Z M19.87,11.246 C19.997,11.207 20.104,11.118 20.165,11.001 C20.228,10.883 20.239,10.746 20.2,10.619 L16.978,0.351 C16.912,0.142 16.719,0 16.5,0 L15.5,0 C14.673,0 14,0.673 14,1.5 C14,2.327 14.673,3 15.5,3 L16.761,3 L19.101,10.456 C16.782,11.372 15.206,13.513 15.019,16 L8.949,16 C8.697,13.756 6.811,12 4.5,12 C2.019,12 0,14.019 0,16.5 C0,18.981 2.019,21 4.5,21 C6.811,21 8.697,19.244 8.949,17 L15.5,17 C15.776,17 16,16.776 16,16.5 C16,14.074 17.556,11.963 19.87,11.246 Z M4.516,17.982 C3.706,17.982 3.047,17.31 3.047,16.482 C3.047,15.655 3.706,14.982 4.516,14.982 C5.325,14.982 5.984,15.655 5.984,16.482 C5.984,17.31 5.325,17.982 4.516,17.982 Z M4.516,13.982 C3.154,13.982 2.047,15.104 2.047,16.482 C2.047,17.861 3.154,18.982 4.516,18.982 C5.877,18.982 6.984,17.861 6.984,16.482 C6.984,15.104 5.877,13.982 4.516,13.982 Z M21.516,17.982 C20.706,17.982 20.047,17.31 20.047,16.482 C20.047,15.655 20.706,14.982 21.516,14.982 C22.325,14.982 22.984,15.655 22.984,16.482 C22.984,17.31 22.325,17.982 21.516,17.982 Z M21.516,13.982 C20.154,13.982 19.047,15.104 19.047,16.482 C19.047,17.861 20.154,18.982 21.516,18.982 C22.877,18.982 23.984,17.861 23.984,16.482 C23.984,15.104 22.877,13.982 21.516,13.982 Z M21.5,20 C19.57,20 18,18.43 18,16.5 C18,14.57 19.57,13 21.5,13 C23.43,13 25,14.57 25,16.5 C25,18.43 23.43,20 21.5,20 Z M21.5,12 C19.019,12 17,14.019 17,16.5 C17,18.981 19.019,21 21.5,21 C23.981,21 26,18.981 26,16.5 C26,14.019 23.981,12 21.5,12 Z"
    />
  </Svg>
);
module.exports = ScooterIcon;

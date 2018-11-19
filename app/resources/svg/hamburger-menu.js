import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const HamburgerMenuSvg = props => (
  <Svg
    width={props.width ? props.width : 24}
    height={props.height ? props.height : 24}
    viewBox="0 0 24 24"
  >
    <Path
      id="a"
      fill={props.fillColor ? props.fillColor : ''}
      d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
    />
  </Svg>
);

HamburgerMenuSvg.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fillColor: PropTypes.string
};

module.exports = HamburgerMenuSvg;

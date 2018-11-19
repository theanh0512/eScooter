import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const NavigationMenuButton = ({ handleMenuButtonPress, buttonImageElement }) => (
  <TouchableOpacity activeOpacity={0.8} onPress={handleMenuButtonPress}>
    {buttonImageElement}
  </TouchableOpacity>
);

NavigationMenuButton.propTypes = {
  handleMenuButtonPress: PropTypes.func.isRequired,
  buttonImageElement: PropTypes.element
};

module.exports = NavigationMenuButton;

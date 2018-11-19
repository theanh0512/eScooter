import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropType from 'prop-types';
import Colors from 'app/common/Colors';

const SeparatorLine = ({ style, lineColor = Colors.grey, lineWidth = StyleSheet.hairlineWidth }) => (
  <View
    style={[
      style,
      {
        backgroundColor: lineColor,
        height: lineWidth
      }
    ]}
  />
);

SeparatorLine.propTypes = {
  lineColor: PropType.string,
  lineWidth: PropType.number
};

module.exports = SeparatorLine;

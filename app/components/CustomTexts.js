import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import Colors from 'app/common/Colors';

const defaultStyling = {
  color: Colors.black
};

/**
 * Base text component rendering text
 * with styling
 * @param text
 * @param style
 * @returns {*}
 * @constructor
 */
const BaseText = ({ text, style }) => (
  <Text style={[defaultStyling, style]}>{text}</Text>
);
BaseText.propTypes = {
  text: PropTypes.string
};

/**
 * Regular font text component
 * @param text
 * @param style
 * @param fontSize
 * @returns {*}
 * @constructor
 */
export const RegularText = ({ text, style, fontSize }) => (
  <BaseText text={text} style={[style, { fontWeight: 'normal', fontSize: fontSize }]}/>
);
RegularText.propTypes = {
  fontSize: PropTypes.number.isRequired,
  text: PropTypes.string
};

/**
 * Bold font text component
 * @param text
 * @param style
 * @param fontSize
 * @returns {*}
 * @constructor
 */
export const BoldText = ({ text, style, fontSize }) => (
  <BaseText text={text} style={[style, { fontWeight: 'bold', fontSize: fontSize }]}/>
);
BoldText.propTypes = {
  fontSize: PropTypes.number.isRequired,
  text: PropTypes.string
};

/**
 * Extra bold font text component
 * @param text
 * @param style
 * @param fontSize
 * @returns {*}
 * @constructor
 */
export const ExtraBoldText = ({ text, style, fontSize }) => (
  <BaseText text={text} style={[style, { fontWeight: '800', fontSize: fontSize }]}/>
);
ExtraBoldText.propTypes = {
  fontSize: PropTypes.number.isRequired,
  text: PropTypes.string
};

/**
 * Semibold font text component
 * @param text
 * @param style
 * @param fontSize
 * @returns {*}
 * @constructor
 */
export const SemiBoldText = ({ text, style, fontSize }) => (
  <BaseText text={text} style={[style, { fontWeight: '600', fontSize: fontSize }]}/>
);
SemiBoldText.propTypes = {
  fontSize: PropTypes.number.isRequired,
  text: PropTypes.string
};

/**
 * Semibold font text component
 * @param text
 * @param style
 * @param fontSize
 * @returns {*}
 * @constructor
 */
export const LightText = ({ text, style, fontSize }) => (
  <BaseText text={text} style={[style, { fontWeight: '300', fontSize: fontSize }]}/>
);
LightText.propTypes = {
  fontSize: PropTypes.number.isRequired,
  text: PropTypes.string
};

/**
 * Thin font text component
 * @param text
 * @param style
 * @param fontSize
 * @returns {*}
 * @constructor
 */
export const ThinText = ({ text, style, fontSize }) => (
  <BaseText text={text} style={[style, { fontWeight: '100', fontSize: fontSize }]}/>
);
ThinText.propTypes = {
  fontSize: PropTypes.number.isRequired,
  text: PropTypes.string
};

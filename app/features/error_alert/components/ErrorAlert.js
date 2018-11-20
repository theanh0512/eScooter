import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { showMessage, MessageBar } from 'react-native-messages';
import { isEmptyString } from 'app/utils/StringUtils';
import { BoldText, RegularText } from 'app/components/CustomTexts';
import style from 'app/features/error_alert/components/ErrorAlert.styles';

/**
 * Error alert content component
 * @param message
 * @returns {*}
 * @constructor
 */
const ErrorMessageContent = ({ message }) => {
  let title = null;
  let description = null;

  if (message instanceof Object) {
    ({ title, description } = message);
  }

  if (title && description) {
    return (
      <View style={style.contentContainer}>
        <BoldText
          style={[style.title, style.textStyle]}
          fontSize={16}
          text={title}
        />
        <RegularText
          style={[style.description, style.textStyle]}
          fontSize={16}
          text={description}
        />
      </View>
    );
  }

  return (
    <View style={style.contentContainer}>
      <BoldText
        style={[style.content, style.textStyle]}
        fontSize={16}
        text={message}
      />
    </View>
  );
};

ErrorMessageContent.propTypes = {
  message: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string
    })
  ])
};

/**
 * Method that invokes showMessage() on
 * <ErrorAlert/> component added inside
 * DeliveryApp component
 * @param message
 */
const showErrorAlert = message => {
  showMessage(message, {
    messageComponent: ErrorMessageContent,
    duration: 2000
  });
};

/**
 * Container class that is connected to
 * errorAlert store state and renders <MessageBar>
 */
class ErrorAlert extends React.Component {
  /* eslint-disable class-methods-use-this */
  componentWillReceiveProps(nextProps) {
    if (!isEmptyString(nextProps.errorMessage)) {
      showErrorAlert(nextProps.errorMessage);
    }
  }

  render() {
    return <MessageBar/>;
  }
}

ErrorAlert.propTypes = {
  errorMessage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string
    })
  ])
};

const mapStateToProps = state => ({
  errorMessage: state.errorAlert.errorMessage
});

// Passing {pure: false} to remove optimisation which don't trigger
// componentWillReceiveProps() if new value of 'errorMessage' was same as old
module.exports = connect(
  mapStateToProps,
  null,
  null,
  { pure: false }
)(ErrorAlert);

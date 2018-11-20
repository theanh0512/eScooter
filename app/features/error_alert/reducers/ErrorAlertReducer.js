import { SHOW_ERROR } from 'app/features/error_alert/constants';

const defaultState = {
  errorMessage: undefined
};

module.exports = (state = defaultState, action) => {
  switch (action.type) {
    case SHOW_ERROR:
      return {
        ...state,
        errorMessage: action.errorMessage
      };
    default:
      return defaultState;
  }
};

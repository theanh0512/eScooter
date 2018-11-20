import { SHOW_ERROR } from 'app/features/error_alert/constants';

const showErrorWithMessage = message => ({
  type: SHOW_ERROR,
  errorMessage: message
});

export default showErrorWithMessage;

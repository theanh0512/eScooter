import showErrorWithMessage from 'app/features/error_alert/actions/ErrorAlertActions';

/**
 * Creates a user exception handled by default handler
 *
 * @param status
 * @param message
 * @returns {{name: string, status: *, message: *, toString(): string}}
 * @constructor
 */
export const Exception = (status, message) => ({
  name: 'Exception',
  status,
  message,
  toString() {
    return `${this.name}: ${this.status} - ${this.message}`;
  }
});

/**
 * Helper util method to generate random
 * integer within specified range
 * @param min
 * @param max
 * @returns {*}
 */
const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

/**
 * Random friendly error message generator
 * @returns {{title: *, description: *}}
 */
const getRandomNoServiceError = () => {
  const titles = ['Our server is daydreaming'];
  const descriptions = ['We\'re waking it up as we speak. Please try again in a bit. '];
  const randomValue = getRandomInt(0, 2);
  return { title: titles[randomValue], description: descriptions[randomValue] };
};

/**
 * Default exception handler
 * Handles standard error codes like 401, 500, 503 etc.
 *
 * @param exception
 * @param dispatch
 */
export const exceptionHandler = (exception, dispatch, handle401 = true) => {
  const { status } = exception;
  if (status === 401) {
    // Login failure message
    dispatch(showErrorWithMessage('Incorrect email address or password'));
  } else if (status >= 500 && status <= 511) {
    // Randomized no service friendly error
    dispatch(showErrorWithMessage(getRandomNoServiceError()));
  } else {
    // All other errors
    dispatch(showErrorWithMessage('Unknown Error'));
  }
};

const capitalizeString = string =>
  string.charAt(0).toUpperCase() + string.slice(1);

const isEmptyString = string => !string || string.length === 0;

module.exports = {
  capitalizeString,
  isEmptyString
};

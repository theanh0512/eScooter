import { combineReducers } from 'redux';
import mapReducer from 'app/features/map/reducer/MapReducer';
import errorAlert from 'app/features/error_alert/reducers/ErrorAlertReducer';

module.exports = combineReducers({
  mapReducer,
  errorAlert
});

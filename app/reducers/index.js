import { combineReducers } from 'redux';
import mapReducer from 'app/features/map/reducer/MapReducer';
import tripReducer from 'app/features/trips/reducer/TripReducer';
import errorAlert from 'app/features/error_alert/reducers/ErrorAlertReducer';

module.exports = combineReducers({
  mapReducer,
  tripReducer,
  errorAlert
});

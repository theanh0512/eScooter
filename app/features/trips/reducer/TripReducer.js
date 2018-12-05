import { HIDE_LOADING_TRIPS, SAVE_TRIPS, SHOW_LOADING_TRIPS } from 'app/features/trips/constants';

const defaultState = {
  trips: [],
  loadingTrips: false
};

module.exports = (state = defaultState, action) => {
  switch (action.type) {
    case SAVE_TRIPS: {
      return { ...state, trips: action.trips }
    }
    case SHOW_LOADING_TRIPS: {
      return {
        ...state,
        loadingTrips: true
      };
    }
    case HIDE_LOADING_TRIPS: {
      return {
        ...state,
        loadingTrips: false
      };
    }
    default:
      return state;
  }
};

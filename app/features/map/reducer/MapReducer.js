import {
  HIDE_LOADING_SCOOTERS,
  SAVE_SCOOTERS,
  SHOW_LOADING_SCOOTERS
} from 'app/features/map/constants';

const defaultState = {
  scooters: [],
  loadingScooterList: false
};

module.exports = (state = defaultState, action) => {
  switch (action.type) {
    case SAVE_SCOOTERS: {
      return { ...state, scooters: action.scooters }
    }
    case SHOW_LOADING_SCOOTERS: {
      return {
        ...state,
        loadingScooterList: true
      };
    }
    case HIDE_LOADING_SCOOTERS: {
      return {
        ...state,
        loadingScooterList: false
      };
    }
    default:
      return state;
  }
};

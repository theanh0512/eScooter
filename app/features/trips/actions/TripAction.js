import { tripsAPI } from 'app/api/index';
import { exceptionHandler } from 'app/common/ExceptionHandler';
import { HIDE_LOADING_TRIPS, SAVE_TRIPS, SHOW_LOADING_TRIPS } from 'app/features/trips/constants';

const showLoadingTrips = () => ({
  type: SHOW_LOADING_TRIPS
});

const hideLoadingTrips = () => ({
  type: HIDE_LOADING_TRIPS
});

const saveTrips = trips => ({
  type: SAVE_TRIPS,
  trips
});

const getTrips = () => async (dispatch, getState) => {
  try {
    dispatch(showLoadingTrips());
    const response = await tripsAPI();
    if (response.trips) {
      dispatch(saveTrips(response.trips));
    }
    dispatch(hideLoadingTrips());

    return true;
  }
  catch (error) {
    exceptionHandler(error, dispatch);
    return false;
  }
};

module.exports = { getTrips };

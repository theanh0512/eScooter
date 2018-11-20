import { scootersAPI } from 'app/api/index';
import { exceptionHandler } from 'app/common/ExceptionHandler';
import {
  HIDE_LOADING_SCOOTERS,
  SAVE_SCOOTERS,
  SHOW_LOADING_SCOOTERS
} from 'app/features/map/constants';

const showLoadingScooterList = () => ({
  type: SHOW_LOADING_SCOOTERS
});

const hideLoadingScooterList = () => ({
  type: HIDE_LOADING_SCOOTERS
});

const saveScooterList = scooters => ({
  type: SAVE_SCOOTERS,
  scooters
});

const getScooters = () => async (dispatch, getState) => {
  try {
    dispatch(showLoadingScooterList());
    const response = await scootersAPI();
    if (response.scooters) {
      dispatch(saveScooterList(response.scooters));
    }
    dispatch(hideLoadingScooterList());

    return true;
  }
  catch (error) {
    exceptionHandler(error, dispatch);
    return false;
  }
};

module.exports = { getScooters };

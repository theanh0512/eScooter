/**
 * Public method to get list of scooters
 * @returns {Promise<*>}
 */
import { APIVersionV1, get } from 'app/api/apiBase';

export const scootersAPI = async () => {
  const url = `http://127.0.0.1:5000/api/v1/scooters`;
  const response = await get(url, APIVersionV1);
  return response;
};

/**
 * Public method to get bee trips
 * @returns {Promise<*>}
 */
export const tripsAPI = async () => {
  const url = `http://127.0.0.1:5000/api/v1/trips`;
  const response = await get(url, APIVersionV1);
  return response;
};

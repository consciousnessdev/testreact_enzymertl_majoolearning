import { apiCall } from './api/api';
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';

export const setSearchField = (text) => ({
  type: CHANGE_SEARCHFIELD,
  payload: text,
});

export const requestRobots = (
  apiUrl = 'https://jsonplaceholder.typicode.com/users'
) => async (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  // await apiCall(apiUrl)
  //   .then((data) => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
  //   .catch((error) =>
  //     dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error })
  //   );
  const data = await apiCall(apiUrl);
  if (data) {
    return dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data });
  }
  return dispatch({ type: REQUEST_ROBOTS_FAILED, payload: data });
};

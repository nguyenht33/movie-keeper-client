import {API_KEY, MOVIE_URL, API_BASE_URL} from '../config';

export const ADD_WATCHED_REQUEST = 'ADD_TO_WATCHED_REQUEST';
export const addWatchedRequest = () => ({
  type: ADD_WATCHED_REQUEST
});

export const ADD_WATCHED_SUCCESS = 'ADD_TO_WATCHED_SUCCESS';
export const addWatchedSuccess = status => ({
  type: ADD_WATCHED_SUCCESS,
  status
});

export const addWatched = (userId, reqBody) => dispatch => {
  dispatch(addWatchedRequest);
  fetch(`${API_BASE_URL}/watched/${userId}`, {
    method: 'POST',
    headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json'
   },
    body: JSON.stringify(reqBody)
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(status => {
      dispatch(addWatchedSuccess(status));
    });
}

export const addWatchList = (userId, reqBody) => dispatch => {
  fetch(`${API_BASE_URL}/watchlist/${userId}`, {
    method: 'POST',
    headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json'
   },
    body: JSON.stringify(reqBody)
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(status => {
      console.log(status)
    });
}

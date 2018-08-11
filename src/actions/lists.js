import { API_KEY, MOVIE_URL, API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

// check if a user have a movie in their watched collection
export const checkWatched = (movieId) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  const userId = getState().auth.currentUser.id;

  fetch(`${API_BASE_URL}/watched/check/${userId}/${movieId}`, {
      method: 'GET',
      headers: {
       'Authorization': `Bearer ${authToken}`
      }
    })
      .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      .then(json => {
        dispatch(checkWatchedSuccess(json));
      })
      .catch(err => {
        console.log(err)
      })
}

export const CHECK_WATCHED_SUCCESS = 'CHECK_WATCHED_SUCCESS';
export const checkWatchedSuccess = json => ({
  type: CHECK_WATCHED_SUCCESS,
  json
});

// check if a user have a movie in their watchlist collection
export const checkWatchlist = (movieId) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  const userId = getState().auth.currentUser.id;

  fetch(`${API_BASE_URL}/watchlist/check/${userId}/${movieId}`, {
      method: 'GET',
      headers: {
       'Authorization': `Bearer ${authToken}`
      }
    })
      .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      .then(json => {
        // console.log(json)
        dispatch(checkWatchlistSuccess(json));
      })
      .catch(err => {
        console.log(err)
      })
}

export const CHECK_WATCHLIST_SUCCESS = 'CHECK_WATCHLIST_SUCCESS';
export const checkWatchlistSuccess = json => ({
  type: CHECK_WATCHLIST_SUCCESS,
  json
});

// add a movie to a user's watched collection
export const addWatched = (reqBody) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  const userId = getState().auth.currentUser.id;
  const body = JSON.stringify(reqBody);
console.log(body)
  dispatch(addWatchedRequest);
  fetch(`${API_BASE_URL}/watched/${userId}`, {
      method: 'POST',
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
       'Authorization': `Bearer ${authToken}`
      },
      body: JSON.stringify(reqBody)
    })
      .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      .then(json => {
        dispatch(addWatchedSuccess(json));
      })
      .catch(err => {
        console.log(err)
      })
}
export const ADD_WATCHED_REQUEST = 'ADD_WATCHED_REQUEST';
export const addWatchedRequest = () => ({
  type: ADD_WATCHED_REQUEST
});
export const ADD_WATCHED_SUCCESS = 'ADD_WATCHED_SUCCESS';
export const addWatchedSuccess = json => ({
  type: ADD_WATCHED_SUCCESS,
  json
});


// add a movie to a user's watchlist collection
export const addWatchlist = (reqBody) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  const userId = getState().auth.currentUser.id;

  fetch(`${API_BASE_URL}/watchlist/${userId}`, {
    method: 'POST',
    headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json',
     'Authorization': `Bearer ${authToken}`
    },
    body: JSON.stringify(reqBody)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(json => {
      dispatch(addWatchlistSuccess(json))
    })
    .catch(err => {
      console.log(err)
    })
}
export const ADD_WATCHLIST_SUCCESS = 'ADD_WATCHLIST_SUCCESS';
export const addWatchlistSuccess = json => ({
  type: ADD_WATCHLIST_SUCCESS,
  json
});

// remove a movie from a user's watched collection
export const removeWatched = (movieId) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  const userId = getState().auth.currentUser.id;

  fetch(`${API_BASE_URL}/watched/${userId}/${movieId}`, {
    method: 'DELETE',
    headers: {
     'Authorization': `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.status)
    .then(status => {
      dispatch(removeWatchedSuccess(status));
    })
    .catch(err => {
      console.log(err)
    })
}
export const REMOVE_WATCHED_SUCCESS = 'REMOVE_WATCHED_SUCCESS';
export const removeWatchedSuccess = status => ({
  type: REMOVE_WATCHED_SUCCESS,
  status
});

// remove a movie from a user's watchlist collection
export const removeWatchlist = (movieId) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  const userId = getState().auth.currentUser.id;

  fetch(`${API_BASE_URL}/watchlist/${userId}/${movieId}`, {
    method: 'DELETE',
    headers: {
     'Authorization': `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.status)
    .then(status => {
      dispatch(removeWatchlistSuccess(status));
    })
    .catch(err => {
      console.log(err)
    })
}
export const REMOVE_WATCHLIST_SUCCESS = 'REMOVE_WATCHLIST_SUCCESS';
export const removeWatchlistSuccess = status => ({
  type: REMOVE_WATCHLIST_SUCCESS,
  status
});

// get movies from user's watched collection
export const getWatched = (page, perPage) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  const userId = getState().auth.currentUser.id;

  fetch(`${API_BASE_URL}/watched/list/${userId}/${page}/${perPage}`, {
    headers: {
     'Authorization': `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(json => {
      dispatch(getWatchedSuccess(json));
    })
    .catch(err => {
      dispatch(getWatchedError(err))
    })
}
export const GET_WATCHED_SUCCESS = 'GET_WATCHED_SUCCESS';
export const getWatchedSuccess = json => ({
  type: GET_WATCHED_SUCCESS,
  json
});
export const GET_WATCHED_ERROR = 'GET_WATCHED_ERROR';
export const getWatchedError = error => ({
  type: GET_WATCHED_ERROR,
  error
});

// get movies from user's watchlist collection
export const getWatchlist = (page, perPage) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  const userId = getState().auth.currentUser.id;

  fetch(`${API_BASE_URL}/watchlist/list/${userId}/${page}/${perPage}`, {
    headers: {
      'Authorization': `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(json => {
      dispatch(getWatchlistSuccess(json));
    })
    .catch(err => {
      dispatch(getWatchlistError(err))
    })
}
export const GET_WATCHLIST_SUCCESS = 'GET_WATCHLIST_SUCCESS';
export const getWatchlistSuccess = json => ({
  type: GET_WATCHLIST_SUCCESS,
  json
});
export const GET_WATCHLIST_ERROR = 'GET_WATCHLIST_ERROR';
export const getWatchlistError = error => ({
  type: GET_WATCHLIST_ERROR,
  error
});

// update movie watched with reviews or ratings
export const updateWatched = (movieId, reqBody) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  const userId = getState().auth.currentUser.id;

  fetch(`${API_BASE_URL}/watched/${userId}/${movieId}`, {
    method: 'PUT',
    headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json',
     'Authorization': `Bearer ${authToken}`
    },
    body: JSON.stringify(reqBody)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(json => {
      dispatch(updateWatchedSuccess(json));
    })
    .catch(err => {
      console.log(err);
    });
}
export const UPDATE_WATCHED_SUCCESS = 'UPDATE_WATCHED_SUCCESS';
export const updateWatchedSuccess = json => ({
  type: UPDATE_WATCHED_SUCCESS,
  json
});

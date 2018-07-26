import {API_KEY, MOVIE_URL, API_BASE_URL} from '../config';

export const ADD_WATCHED_REQUEST = 'ADD_WATCHED_REQUEST';
export const addWatchedRequest = () => ({
  type: ADD_WATCHED_REQUEST
});

export const ADD_WATCHED_SUCCESS = 'ADD_WATCHED_SUCCESS';
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
      return res;
    })
    .then(res => {
      dispatch(addWatchedSuccess(res.status));
    });
}

export const REMOVE_WATCHED_SUCCESS = 'REMOVE_WATCHED_SUCCESS';
export const removeWatchedSuccess = status => ({
  type: REMOVE_WATCHED_SUCCESS,
  status
});


export const removeWatched = (userId, movieId) => dispatch => {
  fetch(`${API_BASE_URL}/watched/${userId}/${movieId}`, {
    method: 'DELETE'
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.status;
    })
    .then(status => {
      dispatch(removeWatchedSuccess(status));
    });
}

export const ADD_WATCHLIST_SUCCESS = 'ADD_WATCHLIST_SUCCESS';
export const addWatchlistSuccess = status => ({
  type: ADD_WATCHLIST_SUCCESS,
  status
});

export const addWatchlist = (userId, reqBody) => dispatch => {
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
      return res.status;
    })
    .then(status => {
      dispatch(addWatchlistSuccess(status))
    });
}

export const REMOVE_WATCHLIST_SUCCESS = 'REMOVE_WATCHLIST_SUCCESS';
export const removeWatchlistSuccess = status => ({
  type: REMOVE_WATCHLIST_SUCCESS,
  status
});

export const removeWatchlist = (userId, movieId) => dispatch => {
  fetch(`${API_BASE_URL}/watchlist/${userId}/${movieId}`, {
    method: 'DELETE'
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.status;
    })
    .then(status => {
      dispatch(removeWatchlistSuccess(status));
    });
}

export const GET_WATCHED_SUCCESS = 'GET_WATCHED_SUCCESS';
export const getWatchedSuccess = movies => ({
  type: GET_WATCHED_SUCCESS,
  movies
});

export const getWatched = userId => dispatch => {
  fetch(`${API_BASE_URL}/watched/${userId}`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(res => {
      dispatch(getWatchedSuccess(res.watched));
    });
}

export const GET_WATCHLIST_SUCCESS = 'GET_WATCHLIST_SUCCESS';
export const getWatchlistSuccess = movies => ({
  type: GET_WATCHLIST_SUCCESS,
  movies
});

export const getWatchlist = userId => dispatch => {

  fetch(`${API_BASE_URL}/watchlist/${userId}`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(res => {
      dispatch(getWatchlistSuccess(res.watchlist));
    });
}













// export const CHECK_WATCHED_SUCCESS = 'CHECK_WATCHED_SUCCESS';
// export const checkWatchedSuccess = status => ({
//   type: CHECK_WATCHED_SUCCESS,
//   status
// });
//
// export const checkWatched = (userId, movieId) => dispatch => {
//   fetch(`${API_BASE_URL}/watched/${userId}/${movieId}`)
//     .then(res => {
//       if (!res.ok) {
//         return Promise.reject(res.statusText);
//       }
//       return res.json();
//     })
//     .then(status => {
//       dispatch(checkWatchedSuccess(status));
//     });
// }
//
// export const CHECK_WATCHLIST_SUCCESS = 'CHECK_WATCHLIST_SUCCESS';
// export const checkWatchlistSuccess = status => ({
//   type: CHECK_WATCHLIST_SUCCESS,
//   status
// });
//
// export const checkWatchlist = (userId, movieId) => dispatch => {
//   fetch(`${API_BASE_URL}/watched/${userId}/${movieId}`)
//     .then(res => {
//       if (!res.ok) {
//         return Promise.reject(res.statusText);
//       }
//       return res.json();
//     })
//     .then(status => {
//       dispatch(checkWatchlistSuccess(status));
//     });
// }

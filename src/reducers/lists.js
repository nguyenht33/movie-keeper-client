import { ADD_WATCHED_REQUEST,
         ADD_WATCHED_SUCCESS,
         REMOVE_WATCHED_SUCCESS,
         ADD_WATCHLIST_SUCCESS,
         REMOVE_WATCHLIST_SUCCESS,
         GET_WATCHED_SUCCESS,
         GET_WATCHLIST_SUCCESS
       } from '../actions/lists';

const initialState = {
  watchedStatus: '',
  watchlistStatus: '',
  moviesWatched: '',
  moviesWatchlist: '',
  loading: false
}

export default function reducer(state=initialState, action){
  switch (action.type) {
    case ADD_WATCHED_REQUEST: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case ADD_WATCHED_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        watchedStatus: action.status
      });
    }

    case REMOVE_WATCHED_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        watchedStatus: action.status
      });
    }

    case ADD_WATCHLIST_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        watchlistStatus: action.status
      });
    }

    case REMOVE_WATCHLIST_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        watchlistStatus: action.status
      });
    }

    case GET_WATCHED_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        moviesWatched: action.movies
      });
    }

    case GET_WATCHLIST_SUCCESS: {
      console.log(action.movies)
      return Object.assign({}, state, {
        loading: false,
        moviesWatchlist: action.movies
      });
    }

    default:
      return state;
    }
}

import { CHECK_WATCHED_SUCCESS,
         CHECK_WATCHLIST_SUCCESS,
         ADD_WATCHED_REQUEST,
         ADD_WATCHED_SUCCESS,
         REMOVE_WATCHED_SUCCESS,
         ADD_WATCHLIST_SUCCESS,
         REMOVE_WATCHLIST_SUCCESS,
         GET_WATCHED_SUCCESS,
         GET_WATCHED_ERROR,
         GET_WATCHLIST_SUCCESS,
         GET_WATCHLIST_ERROR
       } from '../actions/lists';

const initialState = {
  watchedCheck: null,
  watchlistCheck: null,
  watchedStatus: null,
  watchlistStatus: null,
  watchedMovieId: null,
  rating: null,
  review: null,
  watchlistMovieId: null,
  moviesWatched: null,
  moviesWatchlist: null,
  loading: false,
  error: null
}

export default function reducer(state=initialState, action){
  switch (action.type) {
    case CHECK_WATCHED_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        watchedCheck: action.json.watched,
        watchedMovieId: action.json.id,
        rating: action.json.rating,
        review: action.json.review,
      });
    }

    case CHECK_WATCHLIST_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        watchlistCheck: action.json.watchlist,
        watchlistMovieId: action.json.id,
      });
    }

    case ADD_WATCHED_REQUEST: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case ADD_WATCHED_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        watchedStatus: action.json.status,
        watchedMovieId: action.json.movieId
      });
    }

    case REMOVE_WATCHED_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        watchedStatus: action.status
      });
    }

    case ADD_WATCHLIST_SUCCESS: {
      console.log(action.json)
      return Object.assign({}, state, {
        loading: false,
        watchlistStatus: action.json.status,
        watchlistMovieId: action.json.movieId
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
        moviesWatched: action.json.movies
      });
    }

    case GET_WATCHED_ERROR: {
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      });
    }

    case GET_WATCHLIST_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        moviesWatchlist: action.json.movies
      });
    }

    case GET_WATCHLIST_ERROR: {
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      });
    }

    default:
      return state;
    }
}

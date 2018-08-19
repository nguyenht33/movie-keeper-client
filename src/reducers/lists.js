import { CHECK_WATCHED_SUCCESS,
         CHECK_WATCHED_ERROR,
         CHECK_WATCHLIST_SUCCESS,
         CHECK_WATCHLIST_ERROR,
         ADD_WATCHED_REQUEST,
         ADD_WATCHED_SUCCESS,
         ADD_WATCHED_ERROR,
         REMOVE_WATCHED_SUCCESS,
         REMOVE_WATCHED_ERROR,
         ADD_WATCHLIST_SUCCESS,
         ADD_WATCHLIST_ERROR,
         REMOVE_WATCHLIST_SUCCESS,
         REMOVE_WATCHLIST_ERROR,
         GET_WATCHED_REQUEST,
         GET_WATCHED_SUCCESS,
         GET_WATCHED_ERROR,
         GET_WATCHLIST_REQUEST,
         GET_WATCHLIST_SUCCESS,
         GET_WATCHLIST_ERROR,
         UPDATE_WATCHED_SUCCESS,
         UPDATE_WATCHED_ERROR
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
  moviesWatchedPages: null,
  moviesWatchlistPages: null,
  loading: false,
  error: null
}

export default function reducer(state = initialState, action){
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

    case CHECK_WATCHED_ERROR: {
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      });
    }

    case CHECK_WATCHLIST_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        watchlistCheck: action.json.watchlist,
        watchlistMovieId: action.json.id,
      });
    }

    case CHECK_WATCHLIST_ERROR: {
      return Object.assign({}, state, {
        loading: false,
        error: action.error
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
        watchedCheck: true,
        watchedStatus: action.json.status,
        watchedMovieId: action.json.movieId,
        rating: action.json.rating,
        review: action.json.review
      });
    }

    case ADD_WATCHED_ERROR: {
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      });
    }

    case ADD_WATCHLIST_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        watchlistStatus: action.json.status,
        watchlistMovieId: action.json.movieId,
        watchlistCheck: true
      });
    }

    case ADD_WATCHLIST_ERROR: {
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      });
    }

    case REMOVE_WATCHED_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        watchedCheck: false,
        watchedStatus: action.status,
        rating: null,
        review: null
      });
    }

    case REMOVE_WATCHED_ERROR: {
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      });
    }

    case REMOVE_WATCHLIST_ERROR: {
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      });
    }

    case REMOVE_WATCHLIST_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        watchlistStatus: action.status,
        watchlistCheck: false
      });
    }

    case GET_WATCHED_REQUEST: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case GET_WATCHED_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        moviesWatched: action.json.movies,
        moviesWatchedPages: action.json.pages
      });
    }

    case GET_WATCHED_ERROR: {
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      });
    }

    case GET_WATCHLIST_REQUEST: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case GET_WATCHLIST_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        moviesWatchlist: action.json.movies,
        moviesWatchlistPages: action.json.pages
      });
    }

    case GET_WATCHLIST_ERROR: {
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      });
    }

    case UPDATE_WATCHED_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        rating: action.json.rating,
        review: action.json.review
      });
    }

    case UPDATE_WATCHED_ERROR: {
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      });
    }

    default:
      return state;
    }
}

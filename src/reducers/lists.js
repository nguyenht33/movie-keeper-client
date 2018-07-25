import { CHECK_WATCHED_SUCCESS,
         CHECK_WATCHLIST_SUCCESS,
         ADD_WATCHED_REQUEST,
         ADD_WATCHED_SUCCESS,
         REMOVE_WATCHED_SUCCESS,
         ADD_WATCHLIST_SUCCESS,
         REMOVE_WATCHLIST_SUCCESS,
       } from '../actions/lists';

const initialState = {
  watchedCheck: '',
  watchlistCheck: '',
  watchedStatus: '',
  watchlistStatus: '',
  loading: false
}

export default function reducer(state=initialState, action){
  switch (action.type) {
    case CHECK_WATCHED_SUCCESS: {
      console.log(action.status)
      return Object.assign({}, state, {
        loading: false,
        watchedCheck: action.status
      });
    }

    case CHECK_WATCHLIST_SUCCESS: {
      console.log(action.status)
      return Object.assign({}, state, {
        loading: false,
        watchlistCheck: action.status
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
      console.log(action.status)
      return Object.assign({}, state, {
        loading: false,
        watchlistStatus: action.status
      });
    }

    case REMOVE_WATCHLIST_SUCCESS: {
      console.log(action.status)
      return Object.assign({}, state, {
        loading: false,
        watchlistStatus: action.status
      });
    }

    default:
      return state;
    }
}

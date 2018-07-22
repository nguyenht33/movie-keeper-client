import { ADD_WATCHED_REQUEST,
         ADD_WATCHED_SUCCESS
       } from '../actions/lists';

const initialState = {
  watchedStatus: '',
  watchlistStatus: '',
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

    default:
      return state;
    }
}

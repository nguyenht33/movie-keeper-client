import { FETCH_MOVIES_SUCCESS } from '../actions';

const initialState = {
  data: []
}

export const movieReducer = (state=initialState, action) => {
  if (action.type === FETCH_MOVIES_SUCCESS) {
      console.log(action.movies);
        return Object.assign({}, state, {
          data: action.movies
        });
      }
  return state;
}

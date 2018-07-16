import { FETCH_MOVIES_SUCCESS,
         FETCH_MOVIE_INFO_SUCCESS,
         SEARCH_MOVIE_SUCCESS
       } from '../actions';

const initialState = {
  discoverList: [],
  movieInfo: {},
  movieResults: []
}

export const movieReducer = (state=initialState, action) => {
  if (action.type === FETCH_MOVIES_SUCCESS) {
    return Object.assign({}, state, {
      discoverList: action.movies.results
    });
  }

  if (action.type === FETCH_MOVIE_INFO_SUCCESS) {
    return Object.assign({}, state, {
      movieInfo: action.movie
    });
  }

  if (action.type === SEARCH_MOVIE_SUCCESS) {
    console.log(action.movies.results);
    return Object.assign({}, state, {
      movieResults: action.movies.results
    });
  }
  return state;
}

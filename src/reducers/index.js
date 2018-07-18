import { FETCH_MOVIES_SUCCESS,
         FETCH_MOVIE_INFO_REQUEST,
         FETCH_MOVIE_INFO_SUCCESS,
         SEARCH_MOVIE_SUCCESS
       } from '../actions';

const initialState = {
  browseList: [],
  movieInfo: {},
  searchResults: [],
  loading: false
}

export const movieReducer = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return Object.assign({}, state, {
        browseList: action.movies.results
      })

    case FETCH_MOVIE_INFO_REQUEST:
      return Object.assign({}, state, {
        loading: true
      })

    case FETCH_MOVIE_INFO_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        movieInfo: action.movie
      })

    case SEARCH_MOVIE_SUCCESS:
      return Object.assign({}, state, {
        searchResults: action.movies.results
      })

    default:
      return state;
    }
}

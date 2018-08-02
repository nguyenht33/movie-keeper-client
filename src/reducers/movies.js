import { FETCH_MOVIES_REQUEST,
         FETCH_MOVIES_SUCCESS,
         FETCH_MOVIE_INFO_REQUEST,
         FETCH_MOVIE_INFO_SUCCESS,
         SEARCH_MOVIE_REQUEST,
         SEARCH_MOVIE_SUCCESS } from '../actions/movies';
import { BACKDROP_URL, THUMBNAIL_URL} from '../config';

const initialState = {
  browseList: [],
  browsePageNumber: null,
  movieInfo: {},
  searchResults: [],
  totalResults: null,
  resultsPages: null,
  resultsPageNumber: null,
  loading: null
}

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case FETCH_MOVIES_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        browseList: action.movies.results,
        browsePageNumber: action.movies.page
      });
    }

    case FETCH_MOVIE_INFO_REQUEST: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case FETCH_MOVIE_INFO_SUCCESS: {
      let {id, title, backdrop_path, poster_path, release_date, overview, genres} = action.movie;
      let poster, backdrop;
      let year = release_date.slice(0, 4);

      if (backdrop_path) {
        backdrop = `${BACKDROP_URL}${backdrop_path}`;
      } else {
        backdrop = null;
      }

      if (poster_path) {
        poster = `${THUMBNAIL_URL}${poster_path}`;
      } else {
        poster = null;
      }
      return Object.assign({}, state, {
        loading: false,
        movieInfo: {id, title, backdrop, backdrop_path, poster, poster_path, year, overview, genres}
      });
    }

    case SEARCH_MOVIE_REQUEST: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case SEARCH_MOVIE_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        searchResults: action.movies.results,
        totalResults: action.movies.total_results,
        resultsPages: action.movies.total_pages,
        resultsPageNumber: action.movies.page
      });
    }

    default:
      return state;
    }
}

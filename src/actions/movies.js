import { API_KEY, MOVIE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const fetchMovies = (page) => (dispatch, getState) => {
  dispatch(fetchMoviesRequest());
  fetch(`${MOVIE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_video=false&page=${page}`)
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(movies => {
      dispatch(fetchMoviesSuccess(movies));
    })
    .catch(err => {
      dispatch(fetchMoviesError(err));
    })
};

export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const fetchMoviesRequest = () => ({
  type: FETCH_MOVIES_REQUEST,
});

export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const fetchMoviesSuccess = movies => ({
  type: FETCH_MOVIES_SUCCESS,
  movies
});

export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR';
export const fetchMoviesError = error => ({
  type: FETCH_MOVIES_ERROR,
  error
});

export const searchMovie = (query, page) => dispatch => {
  dispatch(searchMovieRequest());
  fetch(`${MOVIE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`)
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(movies => {
      dispatch(searchMovieSuccess(movies));
    })
    .catch(err => {
      dispatch(searchMovieError(err));
    })
}

export const SEARCH_MOVIE_REQUEST = 'SEARCH_MOVIE_REQUEST';
export const searchMovieRequest = () => ({
  type: SEARCH_MOVIE_REQUEST,
})

export const SEARCH_MOVIE_SUCCESS = 'SEARCH_MOVIE_SUCCESS';
export const searchMovieSuccess = movies => ({
  type: SEARCH_MOVIE_SUCCESS,
  movies
})
export const SEARCH_MOVIE_ERROR = 'SEARCH_MOVIE_ERROR';
export const searchMovieError = error => ({
  type: SEARCH_MOVIE_ERROR,
  error
})

export const fetchMovieInfo = movieId => dispatch => {
  dispatch(fetchMovieInfoRequest());
  fetch(`${MOVIE_URL}/movie/${movieId}?api_key=${API_KEY}`)
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(movie => {
      dispatch(fetchMovieInfoSuccess(movie));
    })
    .catch(err => {
      dispatch(fetchMovieInfoError(err));
    });
};

export const FETCH_MOVIE_INFO_REQUEST = 'FETCH_MOVIE_INFO_REQUEST';
export const fetchMovieInfoRequest = () => ({
  type: FETCH_MOVIE_INFO_REQUEST
})

export const FETCH_MOVIE_INFO_SUCCESS = 'FETCH_MOVIE_INFO_SUCCESS';
export const fetchMovieInfoSuccess = movie => ({
  type: FETCH_MOVIE_INFO_SUCCESS,
  movie
});

export const FETCH_MOVIE_INFO_ERROR = 'FETCH_MOVIE_INFO_ERROR';
export const fetchMovieInfoError = error => ({
  type: FETCH_MOVIE_INFO_ERROR,
  error
});

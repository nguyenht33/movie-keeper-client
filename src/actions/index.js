import {API_KEY, MOVIE_URL} from '../config';

export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const fetchMoviesSuccess = movies => ({
  type: FETCH_MOVIES_SUCCESS,
  movies
});

export const FETCH_MOVIE_INFO_SUCCESS = 'FETCH_MOVIE_INFO_SUCCESS';
export const fetchMovieInfoSuccess = movie => ({
  type: FETCH_MOVIE_INFO_SUCCESS,
  movie
});

export const SEARCH_MOVIE_SUCCESS = 'SEARCH_MOVIE_SUCCESS';
export const searchMovieSuccess = movies => ({
  type: SEARCH_MOVIE_SUCCESS,
  movies
})

export const searchMovie = query => dispatch => {
  fetch(`${MOVIE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(movies => {
      dispatch(searchMovieSuccess(movies));
    });
}

export const fetchMovies = () => dispatch => {
 fetch(`${MOVIE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_video=false&page=5`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(movies => {
      dispatch(fetchMoviesSuccess(movies));
    });
};

export const fetchMovieInfo = movieId => dispatch => {
  fetch(`${MOVIE_URL}/movie/${movieId}?api_key=${API_KEY}`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(movie => {
      dispatch(fetchMovieInfoSuccess(movie));
    });
};

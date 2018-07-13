import {API_KEY, MOVIE_URL} from '../config';

export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const fetchMoviesSuccess = movies => ({
  type: FETCH_MOVIES_SUCCESS,
  movies
});

export const fetchMovies = () => dispatch => {
 fetch(`${MOVIE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=5`)
    .then(res => {
      if (!res.ok) {
          return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(movies => {
      console.log(movies);
      dispatch(fetchMoviesSuccess(movies));
    });
};

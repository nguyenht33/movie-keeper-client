import moviesReducer from '../../reducers/movies';
import {fetchMoviesRequest,
        fetchMoviesSuccess,
        fetchMoviesError,
        searchMovieRequest,
        searchMovieSuccess,
        searchMovieError,
        fetchMovieInfoRequest,
        fetchMovieInfoSuccess,
        fetchMovieInfoError
       } from '../../actions/movies';
import { BACKDROP_URL, THUMBNAIL_URL} from '../../config';


describe('moviesReducer', () => {
  it('Should set the initial state when nothing is passed in', () => {
    const state = moviesReducer(undefined, {type: '__UNKNOWN'});
    expect(state).toEqual({
      browseList: [],
      browsePageNumber: null,
      movieInfo: {},
      searchResults: [],
      totalResults: null,
      resultsPages: null,
      resultsPageNumber: null,
      loading: null,
      error: null
    });
  });

  it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = moviesReducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  });

  describe('fetchMoviesRequest', () => {
    it('Show loading', () => {
      let state;
      state = moviesReducer(state, fetchMoviesRequest());
      expect(state.loading).toBe(true);
    });
  });

  describe('fetchMoviesSuccess', () => {
    const movies = {
      results: ['movie1', 'movie2', 'movie3'],
      page: 1
    }
    it('Get popular movies', () => {
      let state;
      state = moviesReducer(state, fetchMoviesSuccess(movies));
      expect(state.loading).toBe(false);
      expect(state.browseList).toEqual(movies.results);
    });
  });

  describe('fetchMoviesError', () => {
    it('Get error', () => {
      let state;
      state = moviesReducer(state, fetchMoviesError('404'));
      expect(state.loading).toBe(false);
      expect(state.error).toEqual('404');
    });
  });

  describe('fetchMovieInfoRequest', () => {
    it('Show loading', () => {
      let state;
      state = moviesReducer(state, fetchMovieInfoRequest());
      expect(state.loading).toBe(true);
    });
  });

  describe('fetchMovieInfoSuccess', () => {
    const movie = {
      id: 8392,
      title: "My Neighbor Totoro",
      backdrop_path: "/backdrop_path.jpg",
      poster_path: "/poster_path.jpg",
      release_date: "1988-04-16",
      overview: "overview",
      genres: "Animation"
    }
    it('Show loading', () => {
      let state;
      state = moviesReducer(state, fetchMovieInfoSuccess(movie));
      expect(state.loading).toBe(false);
      expect(state.movieInfo.id).toEqual(movie.id);
      expect(state.movieInfo.backdrop).toEqual(`${BACKDROP_URL}${movie.backdrop_path}`);
      expect(state.movieInfo.year).toEqual('1988');
    });
  });

  describe('fetchMovieInfoError', () => {
    it('Get error', () => {
      let state;
      state = moviesReducer(state, fetchMovieInfoError('404'));
      expect(state.loading).toBe(false);
      expect(state.error).toEqual('404');
    });
  });

  describe('searchMovieRequest', () => {
    it('Show loading', () => {
      let state;
      state = moviesReducer(state, searchMovieRequest());
      expect(state.loading).toBe(true);
    });
  });

  describe('searchMovieSuccess', () => {
    const movies = {
      results: ['movie1', 'movie2', 'movie3'],
      total_results: 3,
      total_pages: 1,
      page: 1
    }
    it('Show loading', () => {
      let state;
      state = moviesReducer(state, searchMovieSuccess(movies));
      expect(state.loading).toBe(false);
      expect(state.searchResults).toEqual(movies.results);
      expect(state.totalResults).toEqual(movies.total_results);
      expect(state.resultsPages).toEqual(movies.total_pages);
      expect(state.resultsPageNumber).toEqual(movies.page);
    });
  });

  describe('searchMovieError', () => {
    it('Get error', () => {
      let state;
      state = moviesReducer(state, searchMovieError('404'));
      expect(state.loading).toBe(false);
      expect(state.error).toEqual('404');
    });
  });

});

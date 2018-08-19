import { checkWatchedSuccess,
         checkWatchedError,
         checkWatchlistSuccess,
         checkWatchlistError,
         addWatchedRequest,
         addWatchedSuccess,
         addWatchedError,
         removeWatchedSuccess,
         removeWatchedError,
         addWatchlistSuccess,
         addWatchlistError,
         removeWatchlistSuccess,
         removeWatchlistError,
         getWatchedRequest,
         getWatchedSuccess,
         getWatchedError,
         getWatchlistRequest,
         getWatchlistSuccess,
         getWatchlistError,
         updateWatchedSuccess,
         updateWatchedError
       } from '../../actions/lists';
import listsReducer from '../../reducers/lists';

describe('authReducer', () => {
 it('Should set the initial state when nothing is passed in', () => {
   const state = listsReducer(undefined, {type: '__UNKNOWN'});
   expect(state).toEqual({
     watchedCheck: null,
     watchlistCheck: null,
     watchedStatus: null,
     watchlistStatus: null,
     watchedMovieId: null,
     rating: null,
     review: null,
     watchlistMovieId: null,
     moviesWatched: null,
     moviesWatchlist: null,
     moviesWatchedPages: null,
     moviesWatchlistPages: null,
     loading: false,
     error: null
   });
 });

 it('Should return the current state on an unknown action', () => {
   let currentState = {};
   const state = listsReducer(currentState, {type: '__UNKNOWN'});
   expect(state).toBe(currentState);
 });

 describe('checkWatchedSuccess', () => {
   it('Retrieve watched status of a movie', () => {
     const status = {
       id : '12345',
       rating: 5,
       review: 'Great',
       watched: true
     }
     let state;
     state = listsReducer(state, checkWatchedSuccess(status));
     expect(state.loading).toBe(false);
     expect(state.watchedMovieId).toBe('12345');
     expect(state.rating).toBe(5);
     expect(state.review).toBe('Great');
     expect(state.watchedCheck).toBe(true);
   });
 });

 describe('checkWatchedError', () => {
   it('Show error', () => {
     const error = '404'
     let state;
     state = listsReducer(state, checkWatchedError(error));
     expect(state.loading).toBe(false);
     expect(state.error).toBe('404');
   });
 });

 describe('checkWatchlistSuccess', () => {
   it('Retrieve watchlist status of a movie', () => {
     const status = {
       id : '12345',
       watchlist: true
     }
     let state;
     state = listsReducer(state, checkWatchlistSuccess(status));
     expect(state.loading).toBe(false);
     expect(state.watchlistMovieId).toBe('12345');
     expect(state.watchlistCheck).toBe(true);
   });
 });

 describe('checkWatchlistError', () => {
   it('Show error', () => {
     const error = '404'
     let state;
     state = listsReducer(state, checkWatchlistError(error));
     expect(state.loading).toBe(false);
     expect(state.error).toBe('404');
   });
 });

 describe('addWatchedRequest', () => {
   it('Show loading', () => {
     let state;
     state = listsReducer(state, addWatchedRequest());
     expect(state.loading).toBe(true);
   });
 });

 describe('addWatchedSuccess', () => {
   it('Show status message', () => {
     const status = {
       movieId: "12345",
       rating: 4,
       review: 'review',
       status: 201
     }
     let state;
     state = listsReducer(state, addWatchedSuccess(status));
     expect(state.loading).toBe(false);
     expect(state.watchedCheck).toBe(true);
     expect(state.watchedStatus).toBe(201);
     expect(state.watchedMovieId).toBe('12345');
     expect(state.rating).toBe(4);
     expect(state.review).toBe('review');
   });
 });

 describe('addWatchedError', () => {
   it('Show error', () => {
     const error = '404'
     let state;
     state = listsReducer(state, addWatchedError(error));
     expect(state.loading).toBe(false);
     expect(state.error).toBe('404');
   });
 });

 describe('addWatchlistSuccess', () => {
   it('Show status message', () => {
     const status = {
       movieId: "12345",
       status: 201
     }
     let state;
     state = listsReducer(state, addWatchlistSuccess(status));
     expect(state.loading).toBe(false);
     expect(state.watchlistCheck).toBe(true);
     expect(state.watchlistStatus).toBe(201);
     expect(state.watchlistMovieId).toBe('12345');
   });
 });

 describe('addWatchlistError', () => {
   it('Show error', () => {
     const error = '404'
     let state;
     state = listsReducer(state, addWatchlistError(error));
     expect(state.loading).toBe(false);
     expect(state.error).toBe('404');
   });
 });

 describe('removeWatchedSuccess', () => {
   it('Show status message', () => {
     const status = {
       movieId: "12345",
       status: 201
     }
     let state;
     state = listsReducer(state, removeWatchedSuccess(status));
     expect(state.loading).toBe(false);
     expect(state.watchedCheck).toBe(false);
     expect(state.watchedStatus).toBe(status);
     expect(state.rating).toBe(null);
     expect(state.review).toBe(null);
   });
 });

 describe('removeWatchedError', () => {
   it('Show error', () => {
     const error = '404'
     let state;
     state = listsReducer(state, removeWatchedError(error));
     expect(state.loading).toBe(false);
     expect(state.error).toBe('404');
   });
 });

 describe('removeWatchlistSuccess', () => {
   it('Show status message', () => {
     const status = {
       movieId: "12345",
       status: 201
     }
     let state;
     state = listsReducer(state, removeWatchlistSuccess(status));
     expect(state.loading).toBe(false);
     expect(state.watchlistCheck).toBe(false);
     expect(state.watchlistStatus).toBe(status);
   });
 });

 describe('removeWatchlistError', () => {
   it('Show error', () => {
     const error = '404'
     let state;
     state = listsReducer(state, removeWatchlistError(error));
     expect(state.loading).toBe(false);
     expect(state.error).toBe('404');
   });
 });

 describe('getWatchedRequest', () => {
   it('Show loading', () => {
     let state;
     state = listsReducer(state, getWatchedRequest());
     expect(state.loading).toBe(true);
   });
 });

 describe('getWatchedSuccess', () => {
   it('Get movies from watched', () => {
     const json = {
       movies: ["movie1", "movie2", "movie3"],
       pages: 3
     }
     let state;
     state = listsReducer(state, getWatchedSuccess(json));
     expect(state.loading).toBe(false);
     expect(state.moviesWatched).toBe(json.movies);
     expect(state.moviesWatchedPages).toBe(3);
   });
 });

 describe('getWatchedError', () => {
   it('Show error', () => {
     const error = '404'
     let state;
     state = listsReducer(state, getWatchedError(error));
     expect(state.loading).toBe(false);
     expect(state.error).toBe('404');
   });
 });

 describe('getWatchlistRequest', () => {
   it('Show loading', () => {
     let state;
     state = listsReducer(state, getWatchlistRequest());
     expect(state.loading).toBe(true);
   });
 });

 describe('getWatchlistSuccess', () => {
   it('Get movies from watchlist', () => {
     const json = {
       movies: ["movie1", "movie2", "movie3"],
       pages: 3
     }
     let state;
     state = listsReducer(state, getWatchlistSuccess(json));
     expect(state.loading).toBe(false);
     expect(state.moviesWatchlist).toBe(json.movies);
     expect(state.moviesWatchlistPages).toBe(3);
   });
 });

 describe('getWatchlistError', () => {
   it('Show error', () => {
     const error = '404'
     let state;
     state = listsReducer(state, getWatchlistError(error));
     expect(state.loading).toBe(false);
     expect(state.error).toBe('404');
   });
 });

 describe('updateWatchedSuccess', () => {
   it('Get movies from watched', () => {
     const json = {
       rating: 1,
       review: 'Bad'
     }
     let state;
     state = listsReducer(state, updateWatchedSuccess(json));
     expect(state.loading).toBe(false);
     expect(state.rating).toBe(1);
     expect(state.review).toBe('Bad');
   });
 });

 describe('updateWatchedError', () => {
   it('Show error', () => {
     const error = '404'
     let state;
     state = listsReducer(state, updateWatchedError(error));
     expect(state.loading).toBe(false);
     expect(state.error).toBe('404');
   });
 });

});

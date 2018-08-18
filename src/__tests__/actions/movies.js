import {FETCH_MOVIES_REQUEST, fetchMoviesRequest,
        FETCH_MOVIES_SUCCESS, fetchMoviesSuccess,
        FETCH_MOVIES_ERROR, fetchMoviesError,
        SEARCH_MOVIE_REQUEST, searchMovieRequest,
        SEARCH_MOVIE_SUCCESS, searchMovieSuccess,
        SEARCH_MOVIE_ERROR, searchMovieError,
        FETCH_MOVIE_INFO_REQUEST, fetchMovieInfoRequest,
        FETCH_MOVIE_INFO_SUCCESS, fetchMovieInfoSuccess,
        FETCH_MOVIE_INFO_ERROR, fetchMovieInfoError
       } from '../../actions/movies';

describe('fetchMoviesRequest', () => {
    it('Should return the action', () => {
        const action = fetchMoviesRequest();
        expect(action.type).toEqual(FETCH_MOVIES_REQUEST);
    });
});

describe('fetchMoviesSuccess', () => {
    it('Should return the action', () => {
        const action = fetchMoviesSuccess('movies');
        expect(action.type).toEqual(FETCH_MOVIES_SUCCESS);
        expect(action.movies).toEqual('movies');
    });
});

describe('fetchMoviesError', () => {
    it('Should return the action', () => {
        const action = fetchMoviesError('error');
        expect(action.type).toEqual(FETCH_MOVIES_ERROR);
        expect(action.error).toEqual('error');
    });
});

describe('searchMovieRequest', () => {
    it('Should return the action', () => {
        const action = searchMovieRequest();
        expect(action.type).toEqual(SEARCH_MOVIE_REQUEST);
    });
});

describe('searchMovieSuccess', () => {
    it('Should return the action', () => {
        const action = searchMovieSuccess('movie');
        expect(action.type).toEqual(SEARCH_MOVIE_SUCCESS);
        expect(action.movies).toEqual('movie');
    });
});

describe('searchMovieError', () => {
    it('Should return the action', () => {
        const action = searchMovieError('error');
        expect(action.type).toEqual(SEARCH_MOVIE_ERROR);
        expect(action.error).toEqual('error');
    });
});

describe('searchMovieError', () => {
    it('Should return the action', () => {
        const action = searchMovieError('error');
        expect(action.type).toEqual(SEARCH_MOVIE_ERROR);
        expect(action.error).toEqual('error');
    });
});

describe('fetchMovieInfoRequest', () => {
    it('Should return the action', () => {
        const action = fetchMovieInfoRequest();
        expect(action.type).toEqual(FETCH_MOVIE_INFO_REQUEST);
    });
});

describe('fetchMovieInfoSuccess', () => {
    it('Should return the action', () => {
        const action = fetchMovieInfoSuccess('movie');
        expect(action.type).toEqual(FETCH_MOVIE_INFO_SUCCESS);
        expect(action.movie).toEqual('movie');
    });
});

describe('fetchMovieInfoError', () => {
    it('Should return the action', () => {
        const action = fetchMovieInfoError('error');
        expect(action.type).toEqual(FETCH_MOVIE_INFO_ERROR);
        expect(action.error).toEqual('error');
    });
});

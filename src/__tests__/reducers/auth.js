import authReducer from '../../reducers/auth';
import {setAuthToken,
        clearAuth,
        authRequest,
        authSuccess,
        authError
      } from '../../actions/auth';

describe('authReducer', () => {
  it('Should set the initial state when nothing is passed in', () => {
    const state = authReducer(undefined, {type: '__UNKNOWN'});
    expect(state).toEqual({
      authToken: null,
      currentUser: null,
      loading: false,
      error: null
    });
  });

  it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = authReducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  });

  describe('setAuthToken', () => {
    it('Show loading', () => {
      let state;
      state = authReducer(state, setAuthToken('token'));
      expect(state.authToken).toBe('token');
    });
  });

  describe('clearAuth', () => {
    it('Show loading', () => {
      let state;
      state = authReducer(state, clearAuth('token'));
      expect(state.authToken).toBe(null);
      expect(state.currentUser).toBe(null);
    });
  });

  describe('authRequest', () => {
    it('Show loading', () => {
      let state;
      state = authReducer(state, authRequest('token'));
      expect(state.loading).toBe(true);
      expect(state.error).toBe(null);
    });
  });

  describe('authSuccess', () => {
    it('Show loading', () => {
      let state;
      state = authReducer(state, authSuccess('user'));
      expect(state.loading).toBe(false);
      expect(state.currentUser).toBe('user');
    });
  });

  describe('authError', () => {
    it('Show loading', () => {
      let state;
      state = authReducer(state, authError('404'));
      expect(state.loading).toBe(false);
      expect(state.error).toBe('404');
    });
  });
});

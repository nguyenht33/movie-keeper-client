import {createStore, applyMiddleware, combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { loadState, loadAuthToken } from './local-storage';
import authReducer from './reducers/auth';
import moviesReducer from './reducers/movies';
import listsReducer from './reducers/lists';
import {setAuthToken, refreshAuthToken} from './actions/auth';

const persistedState = loadState();

const store = createStore(
  combineReducers({
    form: formReducer,
    auth: authReducer,
    movies: moviesReducer,
    lists: listsReducer
  }),
  persistedState,
  applyMiddleware(thunk)
);

const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;

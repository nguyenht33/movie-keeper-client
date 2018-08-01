import {createStore, applyMiddleware, combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { loadState } from './local-storage';
import moviesReducer from './reducers/movies';
import listsReducer from './reducers/lists';
const persistedState = loadState();

const store = createStore(
  combineReducers({
    form: formReducer,
    movies: moviesReducer,
    lists: listsReducer
  }),
  persistedState,
  applyMiddleware(thunk)
);

export default store;

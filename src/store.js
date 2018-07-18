import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { loadState } from './local-storage';

import {movieReducer} from './reducers';
const persistedState = loadState();

export default createStore(movieReducer, persistedState, applyMiddleware(thunk));

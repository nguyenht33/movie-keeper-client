import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/app';
import store from './store';
import { saveState } from './local-storage';
import throttle from 'lodash/throttle';

store.subscribe(() => {
  saveState({
    movies: store.getState().movies,
    lists: store.getState().lists
  });
});


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

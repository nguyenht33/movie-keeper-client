import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css';
import './index.css';
import App from './components/app';
import store from './store';
import { saveState } from './local-storage';

store.subscribe(() => {
  saveState({
    movies: store.getState().movies
  });
});


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

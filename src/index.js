import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/app';
import store from './store';
import { saveState } from './local-storage';
import throttle from 'lodash/throttle';

store.subscribe(throttle(() => {
  saveState({
    movieResults: store.getState().movieResults,
    browseList: store.getState().browseList,
    movieInfo: store.getState().movieInfo,
    searchResults: store.getState().searchResults
  });
}, 1000));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

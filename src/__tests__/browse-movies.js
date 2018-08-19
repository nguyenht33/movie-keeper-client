import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

const middlewares = [];
const mockStore = configureStore(middlewares);
const initialState = {
  auth: {currentUser: 'user'},
  movies: {browseList: []}
};
const store = mockStore(initialState);

import { BrowseMovies } from '../components/browse-movies';

describe('<BrowseMovies />', () => {
  it('Renders app without crashing', () => {
    const fetchMovies = fetch.mockResponse(JSON.stringify({ testing: true }));
    const location = { location: { search: '?page=1' } }
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <BrowseMovies location={location} fetchMovies={fetchMovies}/>
        </MemoryRouter>
      </Provider>
    )
    expect(fetchMovies).toHaveBeenCalled();
  });
});

import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const middlewares = [];
const mockStore = configureStore(middlewares);
const initialState = {};
const store = mockStore(initialState);

import MovieRatings from '../components/movie-ratings';

describe('<MovieRatings />', () => {
  it('Renders MovieRatings without crashing', () => {
    shallow(<MovieRatings />);
  });

  it('Show correct rating', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MovieRatings rating={4}/>
      </Provider>
    )
    expect(wrapper.find('.full')).toHaveLength(4);
    expect(wrapper.find('.empty')).toHaveLength(1);
  });

  it('Rating button clicks', () => {
    const callback = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <MovieRatings changeRating={callback}/>
      </Provider>
    )
    wrapper.find('input[type="radio"]').last().simulate('click');
    expect(callback).toHaveBeenCalled();
  });
});

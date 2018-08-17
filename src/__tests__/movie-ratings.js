import React from 'react';
import {shallow} from 'enzyme';

import MovieRatings from '../components/movie-ratings';

describe('<MovieRatings />', () => {
  it('Renders MovieRatings without crashing', () => {
    shallow(<MovieRatings />);
  });

});

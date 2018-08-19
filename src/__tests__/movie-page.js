import React from 'react';
import {shallow} from 'enzyme';

import {MoviePage} from '../components/movie-page';

describe('<MoviePage />', () => {
  it('Renders app without crashing', () => {
    const callback = jest.fn();
    const movie = {id: '132', genres:['fantasy'], title: 'Brave', year: '2012'};
    const wrapper = shallow(
      <MoviePage
        fetchMovieInfo={callback}
        movieInfo={movie}
        checkWatched={callback}
        checkWatchlist={callback}
      />);
    expect(wrapper.find('.movie-page')).toHaveLength(1);
    expect(wrapper.text()).toContain('Brave');
    expect(wrapper.text()).toContain('2012');
  });
});

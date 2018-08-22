import React from 'react';
import {shallow,mount} from 'enzyme';

import {SearchResults} from '../components/search-results';
import {NotFound} from '../components/not-found';
import {MemoryRouter} from 'react-router-dom';
import App from '../components/app';

const callback = jest.fn();
const searchResults = [
  {
    id: 455980,
    poster_path: "/eXXpuW2xaq5Aen9N5prFlARVIvr.jpg",
    title: "Tag"
  }
]
const wrapper = shallow(
  <SearchResults
    queries={{q:"tag"}}
    searchResults={searchResults}
    searchMovie={callback}
  />
);

describe('<SearchResults />', () => {
  it('Renders SearchResults without crashing', () => {
    const _wrapper = shallow(<SearchResults queries={{q:''}} searchMovie={callback}/>)
    expect(wrapper.find('.poster')).toHaveLength(1);
  });

  it('Loads NotFound if no queries exists', () => {
    const _wrapper = shallow(<SearchResults queries={{q:''}} searchMovie={callback}/>)
    expect(_wrapper.find(NotFound)).toHaveLength(1);
  });

  // it('Renders SearchResults without crashing', () => {
  //   wrapper.find('.poster').simulate('click');
  // });

});

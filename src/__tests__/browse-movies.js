import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import { BrowseMovies } from '../components/browse-movies';
import ReactPaginate from 'react-paginate';

describe('<BrowseMovies />', () => {
  it('Renders app without crashing', () => {
    const fetchMovies = fetch.mockResponse(JSON.stringify({ testing: true }));
    const location = { location: { search: 'foo' } }
    shallow(<BrowseMovies location={location} fetchMovies={fetchMovies}/>);
  });

  // it('Shows next page of movie lists when page is clicked', () => {
  //   const fetchMovies = fetch.mockResponse(JSON.stringify({ testing: true }));
  //   const wrapper = mount(
  //     <MemoryRouter>
  //       <BrowseMovies location={location} fetchMovies={fetchMovies} pageNumer={1}/>
  //     </MemoryRouter>
  //   );
  //   wrapper.find('.next').simulate('click');
  //   expect(fetchMovies).toHaveBeenCalled();
  // });
});

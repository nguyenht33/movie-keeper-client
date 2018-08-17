import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import {NavBar} from '../../components/header-components/nav-bar';

describe('<NavBar />', () => {
  // const wrapper = shallow(
  //   <MemoryRouter>
  //     <NavBar loggedIn={true}/>
  //   </MemoryRouter>
  // );
  // const instance = wrapper.dive().dive().instance();

  it('Renders search form without crashing', () => {
    shallow(<NavBar />);
  });

  // it('Renders search form when click', () => {
  //   const toggleSearch = jest.fn();
  //   const wrapper = shallow(
  //     <MemoryRouter>
  //       <NavBar toggleSearch={toggleSearch} loggedIn={true} />
  //     </MemoryRouter>
  //   );
  //   // wrapper.find('.toggle-search').simulate('click');
  //   // wrapper.update();
  //   // expect(toggleSearch).toHaveBeenCalledWith(toggleSearchBar)
  // })
});

import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import {NavBar} from '../../components/header-components/nav-bar';

describe('<NavBar />', () => {
  it('Renders search form without crashing', () => {
    shallow(<NavBar />);
  });

  it('Login to be called when click', () => {
    const callback = jest.fn();
    const wrapper = mount(
      <MemoryRouter>
        <NavBar/>
      </MemoryRouter>
    );
    wrapper.find('a[href="/login"]').simulate('click');
    expect(callback).toHaveBeenCalled;
  })

  it('Logout to be called when click', () => {
    const callback = jest.fn();
    const wrapper = mount(
      <MemoryRouter>
        <NavBar loggedIn={true} clearAuth={callback}/>
      </MemoryRouter>
    );
    wrapper.find('.log-out').simulate('click');
    expect(callback).toHaveBeenCalled;
  })

  // it('Searchbar to be called when click', () => {
  //   const callback = jest.fn();
  //   const wrapper = mount(
  //     <MemoryRouter>
  //       <NavBar loggedIn={true} toggleSearchBar={callback}/>
  //     </MemoryRouter>
  //   );
  //   wrapper.find('.icon-search').simulate('click');
  //   expect(callback).toHaveBeenCalled;
  // })

  it('Dashboard to be called when click', () => {
    const callback = jest.fn();
    const wrapper = mount(
      <MemoryRouter>
        <NavBar loggedIn={true} history={{push: callback}}/>
      </MemoryRouter>
    );
    wrapper.find('.icon-bookmark').simulate('click');
    expect(callback).toHaveBeenCalledWith("/dashboard")
  })
});

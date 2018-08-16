import React from 'react';
import { shallow, mount } from 'enzyme';
// import thunk from 'redux-thunk';
// import configureMockStore from 'redux-mock-store' // mock store
//
// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);

import { SearchForm } from '../../components/header-components/search-form';

describe('<SearchForm />', () => {
  it('Renders search form without crashing',  () => {
    const wrapper = shallow(<SearchForm />);
    expect(wrapper.hasClass('search-bar')).toEqual(true);
  });

  // it('Search on submit', () => {
  //   // const fetchSearch = fetch.mockResponse(JSON.stringify({ testing: true }));
  //   const callback = jest.fn();
  //   const wrapper = shallow(<SearchForm searchMovie={callback}/>);
  //   wrapper.setProps({ history: { push: callback } });
  //   wrapper.find('input[type="search"]').value = 'movie';
  //   wrapper.find('.search-button').simulate('submit');
  //   expect(callback).toHaveBeenCalledWith('movie');
  // });

  it('Search on submit', () => {
    const wrapper = mount(<SearchForm />);
    const promise = Promise.resolve({testing: true});
    promise.then(() => {
      wrapper.find('input[type="search"]').simulate('change', {target: {value: 'someThing'}});
      wrapper.find('.search-button').simulate('submit');
    }
    ).then(() => expect(fetch.mock.calls.length).toEqual(1))
  });

});

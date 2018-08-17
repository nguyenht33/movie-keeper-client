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

  it('Search on submit', () => {
    const callback = jest.fn();
    const wrapper = mount(<SearchForm history={{push: callback}} searchMovie={callback}/>);
    const input = wrapper.find('input[type="search"]').instance().value = "foo";
    wrapper.find('.search-button').simulate('submit');
    expect(callback).toHaveBeenCalledWith("foo")
  });

});

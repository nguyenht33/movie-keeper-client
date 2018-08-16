import React from 'react';
import {shallow, mount} from 'enzyme';
import {AddMovie} from '../components/add-movie';

describe('<AddMovie/>', () => {
  it('Renders AddMovie without crashing', () => {
    shallow(<AddMovie />);
  });

  it('Closes add form on click', () => {
    const callback = jest.fn();
    const wrapper = shallow(<AddMovie closeAddForm={callback}/>);
    wrapper.find('.close-btn').simulate('click');
    expect(callback).toHaveBeenCalled();
  });

  it('Submit form on submit', () => {
    const callback = jest.fn();
    const wrapper = mount(<AddMovie handleSubmit={callback} addWatched={callback} addWatchedSubmit={callback}/>);
    wrapper.find('.add-movie-submit').simulate('submit');
    expect(callback).toHaveBeenCalled();
  });

  it('Changes state when textarea is filled', () => {
    const callback = jest.fn();
    const wrapper = shallow(<AddMovie onChange={callback}/>);
    wrapper.find('textarea').simulate("change", { target: { value: "foo" }})
    expect(wrapper.state().review).toEqual("foo");
    expect(wrapper.state().filled).toEqual(true);
  });

  it('Changes state when rating is checked', () => {
    const callback = jest.fn();
    const wrapper = shallow(<AddMovie onChange={callback}/>);
    wrapper.find('#rating-1').simulate("change", { target: { value: 1 }});
    expect(wrapper.state().rating).toEqual(1);
  });


});

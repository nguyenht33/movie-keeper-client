import React from 'react';
import {shallow, mount} from 'enzyme';

import {LoginForm} from '../components/login-form';

describe('<LoginForm />', () => {
  it('Renders LoginForm without crashing', () => {
    const callback = jest.fn();
    shallow(<LoginForm handleSubmit={callback}/>);
  });

  // it('Renders LoginForm without crashing', () => {
  //   const callback = jest.fn();
  //   const wrapper = mount(<LoginForm handleSubmit={callback}/>);
  //   wrapper.find('#username').instance().value = 'user';
  //   wrapper.find('#login-btn').simulate('submit');
  //   expect(callback).toHaveBeenCalled();
  // });
});

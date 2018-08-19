import React from 'react';
import {shallow, mount} from 'enzyme';

import {LoginForm} from '../components/login-form';

describe('<LoginForm />', () => {
  it('Renders LoginForm without crashing', () => {
    const callback = jest.fn();
    shallow(<LoginForm handleSubmit={callback}/>);
  });
});

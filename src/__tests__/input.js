import React from 'react';
import {shallow, mount} from 'enzyme';

import Input from '../components/input';

describe('<Input />', () => {
  it('Renders app without crashing', () => {
    shallow(
      <Input meta={{touch: true}} input={{name: 'username'}}/>
    );
  });

  it('Return error if error props is present', () => {
    const wrapper = shallow(
      <Input
        label={'email'}
        meta={{touched: true, error: 'Invalid email address'}}
        input={{name: 'email', type: 'email'}}
      />
    );
    expect(wrapper.html()).toContain('Invalid email address');
  });

  it('Return warning if warning props is present', () => {
    const wrapper = shallow(
      <Input
        label={'email'}
        meta={{touched: true, warning: 'Warning'}}
        input={{name: 'email', type: 'email'}}
      />
    );
    expect(wrapper.html()).toContain('Warning');
  });
});

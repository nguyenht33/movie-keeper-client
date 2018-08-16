import React from 'react';
import {shallow} from 'enzyme';

import {Dashboard} from '../components/dashboard';

describe('<Dashboard />', () => {
  it('Renders app without crashing', () => {
    const wrapper = shallow(<Dashboard />);
  });
});

import React from 'react';
import {shallow} from 'enzyme';

import {Dashboard} from '../components/dashboard';

describe('<Dashboard />', () => {
  it('Renders dashboard without crashing', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find('.dashboard')).toHaveLength(1);
  });
});

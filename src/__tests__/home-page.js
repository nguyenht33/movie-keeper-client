import React from 'react';
import { shallow } from 'enzyme';

import { HomePage } from '../components/home-page';

describe('<HomePage />', () => {
  it('Renders home page without crashing', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find('.hero')).toHaveLength(1);
  });
});

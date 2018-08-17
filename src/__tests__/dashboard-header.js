import React from 'react';
import {shallow} from 'enzyme';

import {DashboardHeader} from '../components/dashboard-header';

describe('<DashboardHeader />', () => {
  it('Renders DashboardHeader without crashing', () => {
    const wrapper = shallow(<DashboardHeader username={'joe'}/>);
    expect(wrapper.find('.dashboard-header')).toHaveLength(1);
    expect(wrapper.text()).toContain('joe');
  });

  it('Shows inactive link styling if location empty', () => {
    const wrapper = shallow(<DashboardHeader username={'joe'}/>);
    expect(wrapper.find('.inactive')).toHaveLength(2);
  });

  it('Shows active link styling if location is watch or watchlist', () => {
    const wrapper = shallow(<DashboardHeader username={'joe'} location={'watched'}/>);
    expect(wrapper.find('.active')).toHaveLength(1);
  });
});

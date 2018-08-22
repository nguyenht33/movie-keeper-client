import React from 'react';
import {shallow} from 'enzyme';

import {DashboardHeader} from '../components/dashboard-header';

describe('<DashboardHeader />', () => {
  it('Renders DashboardHeader without crashing', () => {
    const wrapper = shallow(<DashboardHeader/>);
    expect(wrapper.find('.dashboard-header')).toHaveLength(1);
  });

  it('Shows inactive link styling if location empty', () => {
    const wrapper = shallow(<DashboardHeader />);
    expect(wrapper.find('.inactive')).toHaveLength(2);
  });

  it('Shows active link styling if location is watch or watchlist', () => {
    const wrapper = shallow(<DashboardHeader location={'watched'}/>);
    expect(wrapper.find('.active')).toHaveLength(1);
  });
});

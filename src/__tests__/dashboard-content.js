import React from 'react';
import {shallow} from 'enzyme';

import {DashboardContent} from '../components/dashboard-content';

describe('<DashboardContent />', () => {
  it('Renders DashboardContent without crashing', () => {
    const callback = jest.fn();
    const wrapper = shallow(<DashboardContent getWatched={callback} getWatchlist={callback}/>);
    expect(wrapper.find('.dashboard-content')).toHaveLength(1);
  });
});

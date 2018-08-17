import React from 'react';
import { shallow } from 'enzyme';

import { StatusMessage } from '../components/status-message';

describe('<StatusMessage />', () => {
  it('Renders StatusMessage without crashing', () => {
    shallow(<StatusMessage />);
  });

  it('Shows added message for 201 code for watched', () => {
    const wrapper = shallow(<StatusMessage showMessage={true} messageFor={'watched'} watchedStatus={201}/>);
    expect(wrapper.text()).toContain('Added', 'Watched')
  });

  it('Shows remove message for 204 code for watched', () => {
    const wrapper = shallow(<StatusMessage showMessage={true} messageFor={'watched'} watchedStatus={204}/>);
    expect(wrapper.text()).toContain('Removed', 'Watched')
  });

  it('Shows added message for 201 code for watchlist', () => {
    const wrapper = shallow(<StatusMessage showMessage={true} messageFor={'watchlist'} watchlistStatus={201}/>);
    expect(wrapper.text()).toContain('Added', 'Watchlist')
  });

  it('Shows remove message for 204 code for watchlist', () => {
    const wrapper = shallow(<StatusMessage showMessage={true} messageFor={'watchlist'} watchlistStatus={204}/>);
    expect(wrapper.text()).toContain('Removed', 'Watchlist')
  });

});

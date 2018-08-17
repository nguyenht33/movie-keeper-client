import React from 'react';
import { shallow } from 'enzyme';

import { WatchButtons } from '../components/watch-buttons';

describe('<WatchButtons />', () => {
  it('Renders WatchButtons without crashing', () => {
    shallow(<WatchButtons />);
  });

  it('Shows add watched button if movie is not watched', () => {
    const wrapper = shallow(<WatchButtons watchedCheck={false} />);
    expect(wrapper.find('#btn-watch').text()).toEqual('Add Watched')
  });

  it('Shows remove watched button if movie watched', () => {
    const wrapper = shallow(<WatchButtons watchedCheck={true} />);
    expect(wrapper.find('#btn-watch').text()).toEqual('Remove Watched')
  });

  it('Callback on button click', () => {
    const callback = jest.fn();
    const wrapper = shallow(<WatchButtons watchedCheck={false} addWatched={callback} />);
    wrapper.find('#btn-watch').simulate('click');
    expect(callback).toHaveBeenCalled();
  });
});

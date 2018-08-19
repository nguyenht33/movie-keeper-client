import React from 'react';
import { shallow } from 'enzyme';

import { BrowseList } from '../components/browse-list';

describe('<BrowseList />', () => {
  it('Renders app without crashing', () => {
    const movie=[{movie: 'movie'}, {movie: 'movie2'}]
    const wrapper = shallow(<BrowseList browseList={movie}/>);
    expect(wrapper.find('.browse-list')).toHaveLength(1);
  });
});

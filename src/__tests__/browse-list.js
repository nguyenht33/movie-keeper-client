import React from 'react';
import { shallow } from 'enzyme';

import { BrowseList } from '../components/browse-list';

describe('<BrowseList />', () => {
  it('Renders app without crashing', () => {
    shallow(<BrowseList />);
  });
});

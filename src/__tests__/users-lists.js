import React from 'react';
import {shallow} from 'enzyme';

import {UsersLists} from '../components/users-lists';

describe('<UsersLists />', () => {
  it('Renders UsersLists without crashing', () => {
    shallow(<UsersLists />);
  });
});

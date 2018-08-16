import React from 'react';
import {shallow} from 'enzyme';

import {Footer} from '../components/footer';

describe('<footer />', () => {
  it('Renders footer without crashing', () => {
    shallow(<Footer />);
  });
});

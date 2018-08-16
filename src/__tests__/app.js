import React from 'react';
import {shallow} from 'enzyme';

import App from '../components/app';

describe('<App />', () => {
  it('Renders app without crashing', () => {
    shallow(<App />);
  });
});

import React from 'react';
import {shallow} from 'enzyme';

import RegistrationForm from '../components/registration-form';

describe('<RegistrationForm />', () => {
  it('Renders RegistrationForm without crashing', () => {
    shallow(<RegistrationForm />);
  });
});

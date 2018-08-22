import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import RegistrationForm from '../components/registration-form';

const middlewares = [];
const mockStore = configureStore(middlewares);
const initialState = {
  form: {
      authToken: null,
      currentUser: null,
      loading: false,
      error: null}
};
const store = mockStore(initialState);

describe('<RegistrationForm />', () => {
  it('Renders RegistrationForm without crashing', () => {
    shallow(<RegistrationForm />);
  });

  it('Renders RegistrationForm without crashing', () => {
    const callback = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <RegistrationForm handleSubmit={callback}/>
      </Provider>
      );
    wrapper.find('button[type="submit"]').simulate('submit');
    expect(callback).toHaveBeenCalled();
  });
});

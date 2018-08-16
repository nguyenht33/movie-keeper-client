import React, { Component } from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Input from './input';
import './registration-form.css'
import {required, nonEmpty, matches, length, isTrimmed, isEmail} from '../validators';
const passwordLength = length({min: 6, max: 72});
const matchesPassword = matches('password');


export class RegistrationForm extends Component {
  onSubmit(values) {
    const {username, password, email, firstName, lastName} = values;
    const user = {username, password, email, firstName, lastName};
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }

    render() {
      return (
      <form
          className="signup-form"
          onSubmit={this.props.handleSubmit(values =>
              this.onSubmit(values)
          )}>
          <h3>Signup</h3>
          <label className="header-label" htmlFor="firstName">First name</label>
          <Field component={Input} type="text" name="firstName" />
          <label className="header-label" htmlFor="lastName">Last name</label>
          <Field component={Input} type="text" name="lastName" />
          <label className="header-label"  htmlFor="email">Email</label>
          <Field
              component={Input}
              type="email"
              name="email"
              validate={[required, nonEmpty, isEmail]}
          />
          <label className="header-label" htmlFor="username">Username</label>
          <Field
              component={Input}
              type="text"
              name="username"
              validate={[required, nonEmpty, isTrimmed]}
          />
          <label className="header-label" htmlFor="password">Password</label>
          <Field
              component={Input}
              type="password"
              name="password"
              validate={[required, passwordLength, isTrimmed]}
          />
          <label className="header-label" htmlFor="passwordConfirm">Confirm password</label>
          <Field
              component={Input}
              type="password"
              name="passwordConfirm"
              validate={[required, nonEmpty, matchesPassword]}
          />
          <div className="button-container">
            <button
                type="submit"
                disabled={this.props.pristine || this.props.submitting}>
                Register
            </button>
          </div>
      </form>
    );
  }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);

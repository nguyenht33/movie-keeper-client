import React, { Component } from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { login } from '../actions/auth';
import { required, nonEmpty } from '../validators';

export class LoginForm extends Component {
    onSubmit(values) {
      return this.props.dispatch(login(values.username, values.password));
    }

    render() {
      let error;
      if (this.props.error) {
        error = (
          <div className="form-error" aria-live="polite">
              {this.props.error}
          </div>
        );
      }
      return (
        <form
            className="login-form"
            onSubmit={this.props.handleSubmit(values =>
                this.onSubmit(values)
            )}>
            <h3>Login</h3>
            <label htmlFor="username">Username</label>
            <Field
              component={Input}
              type="text"
              name="username"
              id="username"
              validate={[required, nonEmpty]}
            />
            <label htmlFor="password">Password</label>
            <Field
              component={Input}
              type="password"
              name="password"
              id="password"
              validate={[required, nonEmpty]}
            />
            {error}
            <div class="demo">
              <p><span>Demo User:</span> movieWatcher | <span>Password:</span> movies</p>
            </div>
            <div className="button-container">
              <button id="login-btn" disabled={this.props.pristine || this.props.submitting}>
                Log in
              </button>
            </div>
        </form>
    );
  }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);

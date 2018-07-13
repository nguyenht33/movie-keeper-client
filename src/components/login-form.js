import React, { Component } from 'react';

class LoginForm extends Component {
  render() {
    return (
      <section>
        <header>
          <h3>Login</h3>
        </header>
        <form class='signup-form'>
          <div>
            <label for="username">Email</label>
            <input type="text" name='username' id='username' />
          </div>
          <div>
            <label for="password">Password</label>
            <input type="password" name='password' id='password' />
          </div>
          <button type='submit'>Login Up</button>
        </form>
      </section>
    )
  }
}
export default LoginForm;

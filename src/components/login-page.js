import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { Link, Redirect } from 'react-router-dom';
import NavBar from './header-components/nav-bar';
import LoginForm from './login-form';

export function LoginPage(props) {
  if (props.loggedIn) {
    return <Redirect to="/browse" />;
  }
  return (
    <div>
      <NavBar />
      <LoginForm />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);

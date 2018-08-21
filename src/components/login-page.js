import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import NavBar from './header-components/nav-bar';
import LoginForm from './login-form';
import './login-page.css';

export function LoginPage(props) {
  if (props.loggedIn) {
    return <Redirect to="/browse" />;
  }
  return (
    <div className="login-page">
      <NavBar />
      <div className="form-container login-container">
        <LoginForm />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);

import React from 'react';
import NavBar from './header-components/nav-bar';
import RegistrationForm from './registration-form';

export function RegistrationPage(props) {
  return (
    <div className="registration-page">
      <NavBar />
      <div className="form-container">
        <RegistrationForm />
      </div>
    </div>
  );
}

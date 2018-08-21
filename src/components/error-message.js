import React from 'react';
import './error-message.css';

export function ErrorMessage(props) {
  return (
    <div className="error-page">
      <h1>Error {props.code}</h1>
      <h3>{props.message}</h3>
    </div>
  );
}

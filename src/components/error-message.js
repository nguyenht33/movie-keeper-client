import React, { Component } from 'react';

export function ErrorMessage(props) {
  return (
    <div className="error-page">
      <h1>{props.code}</h1>
      <h3>{props.message}</h3>
    </div>
  );
}

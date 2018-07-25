import React, { Component } from 'react';

export function StatusMessage(props) {
  let message;
  if (!props.showMessage) {
    return null;
  }

  if (props.messageFor === 'watched') {
    if (props.watchedStatus === 201) {
      message = <p>Added {props.title} to movies you watched!</p>
    }
    if (props.watchedStatus === 204) {
      message = <p>Removed {props.title} from movies you watched!</p>
    }
  }

  if (props.messageFor === 'watchlist') {
    if (props.watchlistStatus === 201) {
      message = <p>Added {props.title} to movies your watchlist!</p>
    }
    if (props.watchlistStatus === 204) {
      message = <p>Removed {props.title} from movies your watchlist!</p>
    }
  }

  return (
  <div className="status-message">
    {message}
  </div>
  );
}

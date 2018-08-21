import React from 'react';
import { Link } from 'react-router-dom';

export function StatusMessage(props) {
  let message;
  if (!props.showMessage) {
    return null;
  }

  if (props.messageFor === 'watched') {
    if (props.watchedStatus === 201) {
      message =
        <p>
          Added <span>{props.title}</span> to movies you <Link to='/watched'> Watched.</Link>
        </p>
    }
    if (props.watchedStatus === 204) {
      message =
        <p>
          Removed <span>{props.title}</span> from movies you <Link to='/watched'>Watched.</Link>
        </p>
    }
  }

  if (props.messageFor === 'watchlist') {
    if (props.watchlistStatus === 201) {
      message =
        <p>
          Added <span>{props.title}</span> to your <Link to='/watchlist'>Watchlist!</Link>
        </p>
    }
    if (props.watchlistStatus === 204) {
      message =
        <p>
          Removed <span>{props.title}</span> from your <Link to='/watchlist'>watchlist</Link>
        </p>
    }
  }

  return (
  <div className="status-message">
    {message}
  </div>
  );
}

import React, { Component } from 'react';

export function WatchButtons(props) {
  return (
    <div className="watch-btns">
      <button
        onClick={!props.watched ?
          props.handleAddWatched
          :
          props.handleRemoveWatched
        }>
        {!props.watched ? 'Add To Watched' : 'Remove From Watched'}
      </button>
      <button
        onClick={!props.watchlist ?
          props.handleAddWatchlist
          :
          props.handleRemoveWatchlist
        }>
        {!props.watchlist ? 'Add To Watchlist' : 'Remove From Watchlist'}
      </button>
    </div>
  );
}

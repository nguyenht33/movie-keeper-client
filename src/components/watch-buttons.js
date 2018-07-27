import React, { Component } from 'react';

export function WatchButtons(props) {
  return (
    <div className="watch-btns">
      <button
        onClick={!props.watched ?
          props.addWatched
          :
          props.removeWatched
        }>
        {!props.watched ? 'Add To Watched' : 'Remove From Watched'}
      </button>
      <button
        onClick={!props.watchlist ?
          props.addWatchlist
          :
          props.removeWatchlist
        }>
        {!props.watchlist ? 'Add To Watchlist' : 'Remove From Watchlist'}
      </button>
    </div>
  );
}

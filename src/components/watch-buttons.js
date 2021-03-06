import React, { Component } from 'react';
import { connect } from 'react-redux';

export class WatchButtons extends Component {
  render() {
    return (
      <div className="watch-btns">
        <button id="btn-watch"
          onClick={!this.props.watchedCheck ?
            this.props.addWatched
            :
            this.props.removeWatched
          }>
          {!this.props.watchedCheck ? 'Add Watched' : 'Remove Watched'}
        </button>
        <button id="btn-watchlist"
          onClick={!this.props.watchlistCheck ?
            this.props.addWatchlist
            :
            this.props.removeWatchlist
          }>
          {!this.props.watchlistCheck ? 'Add Watchlist' : 'Remove Watchlist'}
        </button>
      </div>
    )
  };
}

const mapStateToProps = (state) => {
  return {
    watchedCheck: state.lists.watchedCheck,
    watchlistCheck: state.lists.watchlistCheck,
  }
}

export default connect(mapStateToProps)(WatchButtons);

import React, { Component } from 'react';
import { connect } from 'react-redux';

class WatchButtons extends Component {
  render() {
    return (
      <div className="watch-btns">
        <button
          onClick={!this.props.watchedCheck ?
            this.props.addWatched
            :
            this.props.removeWatched
          }>
          {!this.props.watchedCheck ? 'Add To Watched' : 'Remove From Watched'}
        </button>
        <button
          onClick={!this.props.watchlistCheck ?
            this.props.addWatchlist
            :
            this.props.removeWatchlist
          }>
          {!this.props.watchlistCheck ? 'Add To Watchlist' : 'Remove From Watchlist'}
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

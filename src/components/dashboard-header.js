import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWatched, getWatchlist } from '../actions/lists';
import { TEST_USER } from '../config';

class DashboardHeader extends Component {
  render() {
    const userId = TEST_USER;
    return (
      <div>
        <h1>Username</h1>
        <div>
          <button onClick={() => this.props.showWatched()}>
            Watched
          </button>
          <button onClick={() => this.props.showWatchlist()}>
            Watchlist
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.lists.loading,
  }
}

const mapDispatchToProps = (dispatch) => ({
  getWatched: (userId) => dispatch(getWatched(userId)),
  getWatchlist: (userId) => dispatch(getWatchlist(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardHeader);

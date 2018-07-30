import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getWatched, getWatchlist } from '../actions/lists';
import { TEST_USER } from '../config';

class DashboardHeader extends Component {
  render() {
    const userId = TEST_USER;
    const username = 'username';
    return (
      <div>
        <h1>Username</h1>
        <div>
          <Link to={`/watched`}>
            Watched
          </Link>
          <Link to={`/watchlist`}>
            Watchlist
          </Link>
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

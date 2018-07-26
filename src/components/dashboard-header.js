import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { getWatched, getWatchlist } from '../actions/lists';
import NavBar from './header-components/nav-bar';

class DashboardHeader extends Component {
  render() {
    const userId = '5b50daefc2f89310d0729736';

    return (
      <div>
        <h1>Username</h1>
        <div>
          <button onClick={() => this.props.getWatched(userId)}>
            Watched
          </button>
          <button onClick={() => this.props.getWatchlist(userId)}>
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

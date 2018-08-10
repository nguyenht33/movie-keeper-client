import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getWatched, getWatchlist } from '../actions/lists';
import { TEST_USER } from '../config';
import './dashboard-header.css';

class DashboardHeader extends Component {
  render() {
    return (
      <div className="dashboard-header">
        <h2>{this.props.username}</h2>
        <ul>
          <li><Link to='/watched'>
            Watched
          </Link></li>
          <li><Link to='/watchlist'>
            Watchlist
          </Link></li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.lists.loading,
    username: state.auth.currentUser.username
  }
}

const mapDispatchToProps = (dispatch) => ({
  getWatched: (userId) => dispatch(getWatched(userId)),
  getWatchlist: (userId) => dispatch(getWatchlist(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardHeader);

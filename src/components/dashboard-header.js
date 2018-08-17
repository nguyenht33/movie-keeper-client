import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { getWatched, getWatchlist } from '../actions/lists';
import { TEST_USER } from '../config';
import './dashboard-header.css';

export class DashboardHeader extends Component {
  render() {
    return (
      <div className="dashboard-header">
        <h2>{this.props.username}</h2>
        <ul>
          <li>
            <Link to='/watched' className={this.props.location === 'watched' ? 'active' : 'inactive' }>
              Watched
            </Link>
          </li>
          <li>
            <Link to='/watchlist' className={this.props.location === 'watchlist' ? 'active' : 'inactive' }>
              Watchlist
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    location: ownProps.location.pathname.slice(1),
    loading: state.lists.loading,
    username: state.auth.currentUser.username
  }
}

const mapDispatchToProps = (dispatch) => ({
  getWatched: (userId) => dispatch(getWatched(userId)),
  getWatchlist: (userId) => dispatch(getWatchlist(userId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardHeader));

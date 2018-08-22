import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { getWatched, getWatchlist } from '../actions/lists';
import './dashboard-header.css';

export class DashboardHeader extends Component {
  render() {
    const links = ['watched', 'watchlist'];
    const lists = links.map((link, index) => (
      <li key={index} className={this.props.location === link ? 'active' : 'inactive' }>
        <Link to={`/${link}`}>
          {link}
        </Link>
      </li>
    ))
    
    return (
      <div className="dashboard-header">
        <ul>
          {lists}
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

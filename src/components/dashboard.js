import React, { Component } from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { getWatched, getWatchlist } from '../actions/lists';
import NavBar from './header-components/nav-bar';
import DashboardHeader from './dashboard-header';
import DashboardContent from './dashboard-content';
import { TEST_USER } from '../config';
import { Footer } from './footer';

export class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      showContent: 'watched'
    };
  }

  render() {
    return (
      <div>
        <NavBar />
        <DashboardHeader/>
        <DashboardContent/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.lists.loading,
    moviesWatched: state.lists.moviesWatched,
    moviesWatchlist: state.lists.moviesWatchlist
  }
}

const mapDispatchToProps = (dispatch) => ({
  getWatched: (userId) => dispatch(getWatched(userId)),
  getWatchlist: (userId) => dispatch(getWatchlist(userId)),
});

export default requiresLogin()(connect(mapStateToProps, mapDispatchToProps)(Dashboard));

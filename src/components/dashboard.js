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
      <div className="dashboard">
        <NavBar />
        <DashboardHeader/>
        <DashboardContent/>
      </div>
    )
  }
}

export default requiresLogin()(Dashboard);

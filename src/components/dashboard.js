import React, { Component } from 'react';
import requiresLogin from './requires-login';
import NavBar from './header-components/nav-bar';
import DashboardHeader from './dashboard-header';
import DashboardContent from './dashboard-content';

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

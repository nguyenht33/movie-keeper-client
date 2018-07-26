import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import NavBar from './header-components/nav-bar';
import DashboardHeader from './dashboard-header';
import DashboardContent from './dashboard-content';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <DashboardHeader />
        <DashboardContent />
      </div>
    )
  }
}

export default Dashboard;

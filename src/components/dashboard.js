import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import MainNav from './header-components/main-nav';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <MainNav />
        Dashboard
      </div>
    )
  }
}
export default Dashboard;

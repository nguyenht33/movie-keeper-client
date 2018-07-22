import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import NavBar from './header-components/nav-bar';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <NavBar />
        Dashboard
      </div>
    )
  }
}

export default Dashboard;

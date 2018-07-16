import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomeNav extends Component {
  render() {
    return (
      <nav>
        <div>
          <h1><Link to="/">Movie Keeper</Link></h1>
          <p><Link to="/login">Login</Link></p>
        </div>
      </nav>
    )
  }
}

export default HomeNav;

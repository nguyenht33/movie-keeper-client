import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchForm from './search-form';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <div>
          <h1><Link to="/">Movie Keeper</Link></h1>
        </div>
        <SearchForm />
        <div>
          <a href="">Dashboard</a>
          <a href="">Log Out</a>
        </div>
      </nav>
    )
  }
}

export default NavBar;

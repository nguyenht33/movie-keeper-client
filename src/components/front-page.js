import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import MainNav from './header-components/main-nav';
import DiscoverMovies from './discover-movies';

class FrontPage extends Component {
  render() {
    return (
      <div>
        <MainNav />
        <DiscoverMovies />
      </div>
    )
  }
}
export default FrontPage;

import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import MainNav from './header-components/main-nav';
import BrowseMovies from './browse-movies';

class FrontPage extends Component {
  render() {
    return (
      <div>
        <MainNav />
        <BrowseMovies />
      </div>
    )
  }
}
export default FrontPage;

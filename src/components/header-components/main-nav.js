import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class MainNav extends Component {
  render() {
    return (
      <nav role="navigation">
        <div>
          <h1><Link to="/">Movie Keeper</Link></h1>
        </div>
        <div>
          <form id="search">
            <fieldset>
              <input type="text" />
              <input type="submit" />
            </fieldset>
          </form>
        </div>
        <div>
          <a href="">Dashboard</a>
          <a href="">Log Out</a>
        </div>
      </nav>
    )
  }
}

export default MainNav;

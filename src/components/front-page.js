import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import NavBar from './header-components/nav-bar';
import { Spinner } from './spinner';
import BrowseMovies from './browse-movies';

class FrontPage extends Component {
  render() {
    // if(this.props.loading) {
    //   return (
    //     <div>
    //       <NavBar />
    //       <Spinner />
    //     </div>
    //   )
    // }
    return (
      <div>
        <NavBar />
        <BrowseMovies />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading
})

export default connect(mapStateToProps)(FrontPage);

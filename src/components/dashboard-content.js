import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import NavBar from './header-components/nav-bar';

class DashboardContent extends Component {
  render() {
    // console.log(this.props.moviesWatched)
    // const movieList = this.props.moviesWatched.map((movie, index) => (
    //   <li key={movie.id}>
    //     <Link to={`/movie/${movie.id}`}>
    //       <img
    //         src={movie.poster_path ? `${THUMBNAIL_URL}${movie.poster_path}` : 'missing-thumbnail'}
    //         alt={movie.poster_path ? `${movie.title}-thumbnail` : 'missing-thumbnail'}
    //       />
    //     </Link>
    //   </li>
    // ))

    return (
      <div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.lists.loading,
    moviesWatched: state.lists.moviesWatched,
    moviesWatchlist: state.lists.moviesWatchlist
  }
}


export default connect(mapStateToProps)(DashboardContent);

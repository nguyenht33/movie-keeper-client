import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWatched, getWatchlist } from '../actions/lists';
import { Route, Link } from 'react-router-dom';
import NavBar from './header-components/nav-bar';
import { Spinner } from './spinner';
import { THUMBNAIL_URL, TEST_USER} from '../config';

class DashboardContent extends Component {
  componentDidMount() {
    if (this.props.content === 'watched') {
      this.props.getWatched(TEST_USER)
    }
    if (this.props.content === 'watchlist') {
      this.props.getWatchlist(TEST_USER)
    }
  }

  render() {
    if (this.props.loading) {
      return (
        <div>
          <NavBar />
          <Spinner />
        </div>
      )
    }

    let movieList;
    if(this.props.content === 'watched') {
      movieList = this.props.moviesWatched;
    }
    if(this.props.content === 'watchlist') {
      movieList = this.props.moviesWatchlist;
    }

    let movies;
    if (this.props.moviesWatched === '' || this.props.moviesWatchlist === '') {
      movies = null;
    } else {
      movies = this.props.moviesWatched.map((movie, index) => (
        <li key={movie.movieId}>
          <Link to={`/movie/${movie.movieId}`}>
            <h3> {movie.title} </h3>
            <img
              src={movie.poster_path ? `${THUMBNAIL_URL}${movie.poster_path}` : 'missing-thumbnail'}
              alt={movie.poster_path ? `${movie.title}-thumbnail` : 'missing-thumbnail'}
            />
          </Link>
        </li>
      ))
    }

    return (
      <div>
        <ul>
          {movies}
        </ul>
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

const mapDispatchToProps = (dispatch) => ({
  getWatched: (userId) => dispatch(getWatched(userId)),
  getWatchlist: (userId) => dispatch(getWatchlist(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContent);

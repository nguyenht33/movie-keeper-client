import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWatched, getWatchlist } from '../actions/lists';
import { Route, Link } from 'react-router-dom';
import NavBar from './header-components/nav-bar';
import { Spinner } from './spinner';
import { THUMBNAIL_URL, TEST_USER} from '../config';
import './dashboard-content.css';

/// update this with recent activities for each list
class DashboardContent extends Component {
  componentDidMount() {
    this.props.getWatched(1, 6)
    this.props.getWatchlist(1, 6)
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

    let moviesWatched;
    if (this.props.moviesWatched) {
      moviesWatched = this.props.moviesWatched.map((movie, index) => (
        <li key={movie.movieId}>
          <Link to={`/movie/${movie.movieId}`}>
            <img
              src={movie.poster_path ? `${THUMBNAIL_URL}${movie.poster_path}` : 'missing-thumbnail'}
              alt={movie.poster_path ? `${movie.title}-thumbnail` : 'missing-thumbnail'}
            />
          </Link>
        </li>
      ))
    } else {
      moviesWatched = null;
    }

    let moviesWatchlist;
    if (this.props.moviesWatchlist) {
      moviesWatchlist = this.props.moviesWatchlist.map((movie, index) => (
        <li key={movie.movieId}>
          <Link to={`/movie/${movie.movieId}`}>
            <img
              src={movie.poster_path ? `${THUMBNAIL_URL}${movie.poster_path}` : 'missing-thumbnail'}
              alt={movie.poster_path ? `${movie.title}-thumbnail` : 'missing-thumbnail'}
            />
          </Link>
        </li>
      ))
    } else {
      moviesWatchlist = null;
    }

    return (
      <div>
        <div>
          <h2>Recently added to Watched:</h2>
          <ul className="dashboard-list">
            {moviesWatched}
          </ul>
          <button><Link to={'/watched'}>See More</Link></button>
        </div>
        <div>
          <h2>Recently added to Watchlist:</h2>
          <ul className="dashboard-list">
            {moviesWatchlist}
          </ul>
          <button><Link to={'/watchlist'}>See More</Link></button>
        </div>
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
  getWatched: (page, perPage) => dispatch(getWatched(page, perPage)),
  getWatchlist: (page, perPage) => dispatch(getWatchlist(page, perPage))
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContent);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWatched, getWatchlist } from '../actions/lists';
import { Link } from 'react-router-dom';
import NavBar from './header-components/nav-bar';
import { Spinner } from './spinner';
import { THUMBNAIL_URL } from '../config';
import './dashboard-content.css';

export class DashboardContent extends Component {
  componentDidMount() {
    this.props.getWatched(1, 8)
    this.props.getWatchlist(1, 8)
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
        <li key={movie.movieId} className="poster">
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
        <li key={movie.movieId} className="poster">
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
      <div className="dashboard-content">
        <div>
          <h2>Recently added to Watched:</h2>
          <ul className="dashboard-list">
            {moviesWatched}
          </ul>
          <button className="see-watched"><Link to={'/watched'}>See More >></Link></button>
        </div>
        <div>
          <h2>Recently added to Watchlist:</h2>
          <ul className="dashboard-list">
            {moviesWatchlist}
          </ul>
          <button className="see-watchlist"><Link to={'/watchlist'}>See More >></Link></button>
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

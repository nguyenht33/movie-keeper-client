import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWatched, getWatchlist } from '../actions/lists';
import { Link } from 'react-router-dom';
import NavBar from './header-components/nav-bar';
import { Spinner } from './spinner';
import { ErrorMessage } from './error-message';
import DashboardHeader from './dashboard-header';
import { THUMBNAIL_URL, TEST_USER } from '../config';

class UsersLists extends Component {
  componentDidMount() {
    this.requestAPI(this.props.listType);
  }

  requestAPI(listType) {
    if (listType === 'watched') {
      this.props.getWatched(TEST_USER)
    }
    if (listType === 'watchlist') {
      this.props.getWatchlist(TEST_USER)
    }
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.listType !== this.props.listType) {
      this.requestAPI(nextProps.listType);
    }
  }

  render() {
    const {loading, error} = this.props;
    if (loading) {
      return (
        <div>
          <NavBar />
          <Spinner />
        </div>
      )
    }
    if (error) {
      return (
        <div>
          <NavBar />
          <ErrorMessage code={error.code} message={error.message}/>
        </div>
      )
    }


    const listType = this.props.listType;
    let moviesList;
    if (listType === 'watched' && this.props.moviesWatched) {
      moviesList = this.props.moviesWatched
    }
    else if (listType === 'watchlist' && this.props.moviesWatchlist) {
      moviesList = this.props.moviesWatchlist
    } else {
      moviesList = null;
    }

    let movies;
    if (moviesList) {
      movies = moviesList.map((movie, index) => (
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
        <NavBar />
        <DashboardHeader />
        <ul>
          {movies}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.lists.loading,
    error: state.lists.error,
    listType: ownProps.match.path.slice(1),
    moviesWatched: state.lists.moviesWatched,
    moviesWatchlist: state.lists.moviesWatchlist
  }
}

const mapDispatchToProps = (dispatch) => ({
  getWatched: (userId) => dispatch(getWatched(userId)),
  getWatchlist: (userId) => dispatch(getWatchlist(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersLists);

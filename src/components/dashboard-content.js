import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWatched, getWatchlist } from '../actions/lists';
import { Link } from 'react-router-dom';
import NavBar from './header-components/nav-bar';
import { Spinner } from './spinner';
import { ErrorMessage } from './error-message';
import { THUMBNAIL_URL } from '../config';
import './dashboard-content.css';

export class DashboardContent extends Component {
  componentDidMount() {
    this.props.getWatched(1, 8)
    this.props.getWatchlist(1, 8)
  }

  createList(listType) {
    let list;
    if (listType === 'watched') {list = this.props.moviesWatched}
    if (listType === 'watchlist') {list = this.props.moviesWatchlist}

    if (list) {
      const content = list.map((movie, index) => (
        <li key={movie.movieId} className="poster">
          <Link to={`/movie/${movie.movieId}`}>
            <img
              src={movie.poster_path ? `${THUMBNAIL_URL}${movie.poster_path}` : 'missing-thumbnail'}
              alt={movie.poster_path ? `${movie.title}-thumbnail` : 'missing-thumbnail'}
            />
          </Link>
        </li>))
        return content;
    } else {
      return null;
    }
  }

  createDiv(list, listType) {
    if (!list || !list.length) {
      return (
        <div>
          <h2>Recently added to {listType}:</h2>
          <h3>No movies added yet.</h3>
        </div>
      )
    } else {
      return (
        <div>
          <h2>Recently added to {listType}:</h2>
          <ul className="dashboard-list">
            {list}
          </ul>
          <div className={`see-${listType}`}><Link to={`/${listType}`}>See More >></Link></div>
        </div>
      )
    }
  }

  render() {
    const { loading, error } = this.props;

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
          <ErrorMessage
            code={error.code}
            message={error.message}
          />
        </div>
      )
    }

    const watchedContent = this.createList('watched');
    const watchlistContent = this.createList('watchlist');
    const watched = this.createDiv(watchedContent, 'watched');
    const watchlist = this.createDiv(watchlistContent, 'watchlist');

    return (
      <div className="dashboard-content">
        {watched}
        {watchlist}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.lists.error,
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

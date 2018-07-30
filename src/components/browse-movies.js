import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMovies } from '../actions/movies';
import { THUMBNAIL_URL} from '../config';
import { Spinner } from './spinner';

class BrowseMovies extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    const movieList = this.props.browseList.map((movie, index) => (
      <li key={movie.id}>
        <Link to={`/movie/${movie.id}`}>
          <h3> {movie.title} </h3>
          <img
            src={movie.poster_path ? `${THUMBNAIL_URL}${movie.poster_path}` : 'missing-thumbnail'}
            alt={movie.poster_path ? `${movie.title}-thumbnail` : 'missing-thumbnail'}
          />
        </Link>
      </li>
    ))

    return (
      <div>
        <ul className="browse-list">
          {movieList}
        </ul>
      </div>
    )
  };
};

const mapStateToProps = state => ({
  browseList: state.movies.browseList,
  loading: state.movies.loading
});

const mapDispatchToProps = dispatch => ({
  fetchMovies: () => dispatch(fetchMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(BrowseMovies);

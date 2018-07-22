import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from './header-components/nav-bar'
import { Spinner } from './spinner';
import { THUMBNAIL_URL} from '../config';

class SearchResults extends Component {
  render() {
    if (this.props.loading) {
      return (
        <div>
          <NavBar />
          <Spinner />
        </div>
      )
    }

    const results = this.props.searchResults;
    const query = this.props.match.params.movieName.replace(/-/g, ' ');
    const movieList = results.map(movie => (
      <li key={movie.id}>
        <Link to={`/movie/${movie.id}`}>
          <h3>
            {movie.title}
            <span> ({movie.release_date.slice(0, 4)})</span>
          </h3>
          <img
            src={movie.poster_path ? `${THUMBNAIL_URL}${movie.poster_path}` : 'missing-thumbnail'}
            alt={movie.poster_path ? `${movie.title}-thumbnail` : 'missing-thumbnail'}
          />
        </Link>
      </li>
    ))

    return (
      <div>
        <NavBar />
        <h2>
          Found {results.length} titles for '{query}'
        </h2>
        <ul>
          {movieList}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  searchResults: state.movies.searchResults,
  loading: state.movies.loading
});

export default connect(mapStateToProps)(SearchResults);

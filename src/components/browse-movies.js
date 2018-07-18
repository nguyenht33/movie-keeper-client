import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { fetchMovies } from '../actions';
import { THUMBNAIL_URL} from '../config';

class BrowseMovies extends Component {
  componentDidMount() {
    this.props.dispatch(fetchMovies());
  }

  render() {
    const movieList = this.props.browseList.map((movie, index) => (
      <li key={movie.id}>
        <Link to={`/movie/${movie.id}`}>
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
  }
}

const mapStateToProps = state => ({
  browseList: state.browseList
})

export default connect(mapStateToProps)(BrowseMovies);

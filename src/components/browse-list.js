import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { THUMBNAIL_URL} from '../config';

class BrowseList extends Component {
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
      <ul className="browse-list">
        {movieList}
      </ul>
    )
  };
};

const mapStateToProps = state => ({
  browseList: state.movies.browseList,
});

export default connect(mapStateToProps)(BrowseList);

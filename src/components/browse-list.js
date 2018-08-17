import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { THUMBNAIL_URL} from '../config';
import './browse-list.css';

export class BrowseList extends Component {
  render() {
    const movieList = this.props.browseList.map((movie, index) => (
      <li key={movie.id}>
        <Link to={`/movie/${movie.id}`}>
          <img
            className="movie-poster"
            src={movie.poster_path ? `${THUMBNAIL_URL}${movie.poster_path}` : 'missing-thumbnail'}
            alt={movie.poster_path ? `${movie.title}-thumbnail` : 'missing-thumbnail'}
          />
        </Link>
      </li>
    ))

    return (
      <div className="browse-container">
        <h3>Explore movies and add it to your <Link to={'/watched'}>collection...</Link>
        </h3>
        <ul className="browse-list">
          {movieList}
        </ul>
      </div>
    )
  };
};

const mapStateToProps = state => ({
  browseList: state.movies.browseList,
});

export default connect(mapStateToProps)(BrowseList);

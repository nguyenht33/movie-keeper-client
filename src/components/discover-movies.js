import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Route, Link } from 'react-router-dom';
import { fetchMovies } from '../actions';

class DiscoverMovies extends Component {
  componentDidMount() {
    this.props.dispatch(fetchMovies());
  }

  render() {
    const movieList = this.props.discoverList.map((movie, index) => (
      <li key={movie.id}>
        <Link to={`/movie/${movie.id}`}><img src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}/></Link>
      </li>
    ))

    return (
      <div>
        {movieList}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  discoverList: state.discoverList
})

export default connect(mapStateToProps)(DiscoverMovies);

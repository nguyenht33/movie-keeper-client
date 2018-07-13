import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Route, Link } from 'react-router-dom';
import { fetchMovies } from '../actions';

class DiscoverMovies extends Component {
  componentDidMount() {
    this.props.dispatch(fetchMovies());
  }

  render() {
    const movieList = this.props.data.map((movie, index) => (
      <li key={movie.id}>
        <img src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}/>
      </li>
    ))

    console.log(this.props);

    return (
      <div>
      <p>not working</p>
        {movieList}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  data: state.data
})

export default connect(mapStateToProps)(DiscoverMovies);

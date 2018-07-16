import React, { Component } from 'react';
import {connect} from 'react-redux';

import { Route, Link } from 'react-router-dom';
import { fetchMovieInfo } from '../actions';


class MovieInfo extends Component {
  componentDidMount() {
    this.props.dispatch(fetchMovieInfo(this.props.movieId));
  }

  render() {
    console.log(this.props.match.params
)
    return (
      <div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    movieId: ownProps.match.params.movieId,
    movieInfo: state.movieInfo,
    movieTitle: state.movieInfo.title
  }
}

export default connect(mapStateToProps)(MovieInfo);

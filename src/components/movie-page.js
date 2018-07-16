import React, { Component } from 'react';
import {connect} from 'react-redux';

import { Route, Link } from 'react-router-dom';
import MainNav from './header-components/main-nav';
import { fetchMovieInfo } from '../actions';
import { BACKDROP_URL, THUMBNAIL_URL} from '../config';


class MoviePage extends Component {
  componentDidMount() {
    const movieId = this.props.match.params.movieId;
    this.props.dispatch(fetchMovieInfo(movieId));
  }

  render() {
    return (
      <div>
        <MainNav />
        <div>
          <img src={this.props.backdrop}
               alt={`${this.props.title}-movie-backdrop`} />
          <div>
            <h1>
              {this.props.title}
              <span> ({this.props.year})</span>
            </h1>
            <img src={this.props.poster}
                 alt={`${this.props.title}-movie-poster`}/>
          </div>
          <div>
            <button>Watched</button>
            <button>Watch-List</button>
          </div>
          <div>
            <h2>Overview</h2>
            <p>{this.props.overview}</p>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const movieInfo = state.movieInfo;
  return {
    movieId: ownProps.match.params.movieId,
    movieInfo: movieInfo,
    title: movieInfo.title,
    backdrop: `${BACKDROP_URL}${movieInfo.backdrop_path}`,
    poster: `${THUMBNAIL_URL}${movieInfo.poster_path}`,
    year: movieInfo.release_date,
    overview: movieInfo.overview
  }
}

export default connect(mapStateToProps)(MoviePage);

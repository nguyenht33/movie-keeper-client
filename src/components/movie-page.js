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
    const isLoading = this.props.loading,
          movieInfo = this.props.movieInfo,
          title = movieInfo.title,
          backdrop = `${BACKDROP_URL}${movieInfo.backdrop_path}`,
          poster = `${THUMBNAIL_URL}${movieInfo.poster_path}`,
          year = movieInfo.release_date,
          overview = movieInfo.overview;

    return (
      <div>
        <MainNav />
        <div>
          <img src={isLoading ? '' : backdrop}
               alt={`${title}-movie-backdrop`} />
          <div>
            <h1>
              {title}
              <span>({year.slice(0, 4)})</span>
            </h1>
            <img src={isLoading ? '' : poster}
                 alt={`${title}-movie-poster`}/>
          </div>
          <div>
            <button>Watched</button>
            <button>Watch-List</button>
          </div>
          <div>
            <h2>Overview</h2>
            <p>{overview}</p>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.loading,
    movieInfo: state.movieInfo,
  }
}

export default connect(mapStateToProps)(MoviePage);

import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Route, Link } from 'react-router-dom';
import './movie-page.css'
import NavBar from './header-components/nav-bar';
import { Spinner } from './spinner';
import { fetchMovieInfo } from '../actions/movies';
import AddMovie from './add-movie';
import { BACKDROP_URL, THUMBNAIL_URL} from '../config';

class MoviePage extends Component {
  constructor() {
    super();
    this.state = {
      showForm: false,
      message: ''
    };
  }

  componentDidMount() {
    const movieId = this.props.match.params.movieId;
    this.props.fetchMovieInfo(movieId);
  }

  toggleAddForm() {
    this.setState({
      showForm: !this.state.showForm
    });
  }

  showStatus(status) {
    console.log(status)
    this.setState({
      message: status
    });
  }

  render() {
    if (this.props.loading) {
      return (
        <div>
          <NavBar />
          <Spinner />
        </div>
      )
    }

    const loading = this.props.loading,
          movie = this.props.movieInfo;

    return (
      <div>
        <NavBar />
        <div>
          <img src={loading || !movie.backdrop ? movie.poster : movie.backdrop}
               alt={`${movie.title}-movie-backdrop`} />
          <div>
            <h1>
              {movie.title}
              <span>({movie.year})</span>
            </h1>
            <img src={loading ? '' : movie.poster}
                 alt={`${movie.title}-movie-poster`}/>
          </div>
          <div>
            <button onClick={this.toggleAddForm.bind(this)}>Watched</button>
            <button>Watch-List</button>
            {this.state.message.length > 0 &&
               <p>{this.state.message}</p>
             }
          </div>
          <div>
            <h2>Overview</h2>
            <p>{!movie.overview ?
                'No overview available for this title': movie.overview}
            </p>
          </div>
        </div>
        {this.state.showForm ?
          <AddMovie
            movieId={this.props.match.params.movieId}
            title={movie.title}
            poster={movie.poster}
            poster_path={movie.poster_path}
            year={movie.year}
            showStatus={this.showStatus.bind(this)}
            closeAddForm={this.toggleAddForm.bind(this)}
          />
          : null
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.movies.loading,
    movieInfo: state.movies.movieInfo,
    watchedStatus: state.lists.watchedStatus
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchMovieInfo: (movieId) => dispatch(fetchMovieInfo(movieId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);

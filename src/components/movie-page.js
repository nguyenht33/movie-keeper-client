import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Route, Link } from 'react-router-dom';
import './movie-page.css'
import NavBar from './header-components/nav-bar';
import { Spinner } from './spinner';
import { fetchMovieInfo } from '../actions/movies';
import AddMovie from './add-movie';
import { BACKDROP_URL, THUMBNAIL_URL} from '../config';
import { API_BASE_URL } from '../config';


class MoviePage extends Component {
  constructor() {
    super();
    this.state = {
      showForm: false,
      message: '',
      watched: '',
      watchlist: ''
    };
  }

  componentDidMount() {
    const movieId = this.props.match.params.movieId;
    this.props.fetchMovieInfo(movieId);
    this.checkUsersWatched();
  }

  checkUsersWatched() {
    const movieId = this.props.match.params.movieId;
    const userId = '5b50daefc2f89310d0729736';
    fetch(`${API_BASE_URL}/watched/${userId}/${movieId}`)
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json();
      })
      .then(status => {
        this.setState({
          watched: status.watched
        });
      });
  }

  toggleAddForm() {
    this.setState({
      showForm: !this.state.showForm
    });
  }

  showStatus(status) {
    this.setState({
      message: status
    });
  }

  removeWatched() {
    console.log('removing movie')
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
          movie = this.props.movieInfo,
          watched = this.state.watched;
          console.log(watched)

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
            <button
              onClick={!watched ? (
                this.toggleAddForm.bind(this)
              ) : (
                this.removeWatched.bind(this)
              )}
            >
              {!watched ? 'Watched' : 'Unwatch'}
            </button>
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

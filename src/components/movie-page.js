import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Route, Link } from 'react-router-dom';
import './movie-page.css'
import NavBar from './header-components/nav-bar';
import { Spinner } from './spinner';
import { fetchMovieInfo } from '../actions/movies';
import { addWatchlist, removeWatched, removeWatchlist } from '../actions/lists';
import { StatusMessage } from './status-message';
import AddMovie from './add-movie';
import { BACKDROP_URL, THUMBNAIL_URL} from '../config';
import { API_BASE_URL } from '../config';

class MoviePage extends Component {
  constructor() {
    super();
    this.state = {
      showForm: false,
      showMessage: false,
      messageFor: '',
      watched: '',
      watchlist: ''
    };
  }

  componentDidMount() {
    const movieId = this.props.movieInfo.id;
    this.props.fetchMovieInfo(movieId);
    this.checkUsersWatched();
    this.checkUsersWatchlist();
  }

  checkUsersWatched() {
    const movieId = this.props.movieInfo.id;
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

  checkUsersWatchlist() {
    const movieId = this.props.movieInfo.id;
    const userId = '5b50daefc2f89310d0729736';
    fetch(`${API_BASE_URL}/watchlist/${userId}/${movieId}`)
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json();
      })
      .then(status => {
        this.setState({
          watchlist: status.watchlist
        });
      });
  }

  toggleAddForm() {
    this.setState({
      showForm: !this.state.showForm
    });
  }

  addWatchedSubmit() {
    this.toggleAddForm();
    this.toggleWatchedStatus();
    this.showMessage('watched');
  }

  handleRemoveWatched() {
    const movieId = this.props.match.params.movieId;
    const userId = '5b50daefc2f89310d0729736';
    this.props.removeWatched(userId, movieId);
    this.toggleWatchedStatus();
    this.showMessage('watched');
  }

  toggleWatchedStatus() {
    this.setState({
      watched: !this.state.watched
    });
  }

  toggleWatchlistStatus() {
    console.log('toggling button')
    this.setState({
      watchlist: !this.state.watchlist
    });
  }

  showMessage(list) {
    this.setState({
      showMessage: true,
      messageFor: list
    });
  }

  handleAddWatchlist() {
    const userId = '5b50daefc2f89310d0729736';
    const reqBody = this.retrieveMovieInfo();
    this.props.addWatchlist(userId, reqBody);
    this.toggleWatchlistStatus();
    this.showMessage('watchlist');
  }

  retrieveMovieInfo() {
    let today = new Date();
    return {
      movieId: this.props.movieInfo.id,
      title: this.props.movieInfo.title,
      year: this.props.movieInfo.year,
      poster_path: this.props.movieInfo.poster_path,
      date: today.toISOString()
    }
  }

  removeWatchlist() {
    const movieId = this.props.movieInfo.id;
    const userId = '5b50daefc2f89310d0729736';
    this.props.removeWatchlist(userId, movieId);
    this.toggleWatchlistStatus();
    this.showMessage('watchlist');
  }

  render() {
    const loading = this.props.loading,
          movie = this.props.movieInfo;
    const { watched, watchlist, message } = this.state;

    if (this.props.loading) {
      return (
        <div>
          <NavBar />
          <Spinner />
        </div>
      )
    }

    return (
      <div>
        <NavBar />
        <div>
          <img src={loading || !movie.backdrop ? movie.poster : movie.backdrop}
               alt={`${movie.title}-movie-backdrop`} />
          <div>
            <h1>{movie.title}<span> ({movie.year})</span></h1>
            <img src={loading ? '' : movie.poster}
                 alt={`${movie.title}-movie-poster`}/>
          </div>
          <div className="watch-btns">
            <button
              onClick={!watched ?
                this.toggleAddForm.bind(this)
                :
                this.handleRemoveWatched.bind(this)
              }>
              {!watched ? 'Add To Watched' : 'Remove From Watched'}
            </button>
            <button
              onClick={!watchlist ?
                this.handleAddWatchlist.bind(this)
                :
                this.removeWatchlist.bind(this)
              }>
              {!watchlist ? 'Add To Watchlist' : 'Remove From Watchlist'}
            </button>
          </div>
          <StatusMessage className="status-message"
            showMessage={this.state.showMessage}
            messageFor={this.state.messageFor}
            watchedStatus={this.props.watchedStatus}
            watchlistStatus={this.props.watchlistStatus}
            title={movie.title}
          />
          <div className="overview">
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
            addWatchedSubmit={this.addWatchedSubmit.bind(this)}
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
    watchedStatus: state.lists.watchedStatus,
    watchlistStatus: state.lists.watchlistStatus
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchMovieInfo: (movieId) => dispatch(fetchMovieInfo(movieId)),
  removeWatched: (userId, movieId) => dispatch(removeWatched(userId, movieId)),
  addWatchlist: (userId, movieId) => dispatch(addWatchlist(userId, movieId)),
  removeWatchlist: (userId, movieId) => dispatch(removeWatchlist(userId, movieId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);

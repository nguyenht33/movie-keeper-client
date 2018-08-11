import React, { Component } from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { Route, Link } from 'react-router-dom';
import './movie-page.css'
import { fetchMovieInfo } from '../actions/movies';
import { checkWatched, checkWatchlist, addWatchlist, removeWatched, removeWatchlist, updateWatched } from '../actions/lists';
import NavBar from './header-components/nav-bar';
import { Spinner } from './spinner';
import { StatusMessage } from './status-message';
import WatchButtons from './watch-buttons';
import MovieRatings from './movie-ratings';
import AddMovie from './add-movie';
import { API_BASE_URL } from '../config';

class MoviePage extends Component {
  constructor() {
    super();
    this.state = {
      showForm: false,
      showMessage: false,
      messageFor: '',
      rating: ''
    };
  }

  componentDidMount() {
    this.props.fetchMovieInfo(this.props.movieId);
    this.checkUsersLists();
  }

  checkUsersLists() {
    this.props.checkWatched(this.props.movieId);
    this.props.checkWatchlist(this.props.movieId);
  }

  toggleAddForm() {
    this.setState({
      showForm: !this.state.showForm
    });
  }

  addWatchedSubmit() {
    this.toggleAddForm();
    this.showMessage('watched');
  }

  addWatchlistClick() {
    const movieId = this.props.movieInfo.id;
    const reqBody = this.retrieveMovieInfo();
    this.props.addWatchlist(reqBody);
    this.showMessage('watchlist');
    this.props.checkWatchlist(movieId);
  }

  removeWatched() {
    const movieId = this.props.watchedMovieId;
    this.props.removeWatched(movieId);
    this.showMessage('watched');
    this.props.checkWatched(this.props.match.params.movieId);
  }

  removeWatchlist() {
    const movieId = this.props.watchlistMovieId;
    this.props.removeWatchlist(movieId);
    this.showMessage('watchlist');
  }

  showMessage(list) {
    this.setState({
      showMessage: true,
      messageFor: list
    });
  }

  changeRating(e) {
    const rating = e.currentTarget.value;
    const movieId = this.props.watchedMovieId;
    const review = this.props.review;

    if (this.props.watchedCheck) {
      const reqBody = {rating, review};
      this.props.updateWatched(movieId, reqBody);
    } else {
      this.setState({
        rating: parseInt(rating)
      })
      this.toggleAddForm();
    }
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

  render() {
    const loading = this.props.loading,
          movie = this.props.movieInfo;
    if (!movie.id) {
      return (
        <div>
          <NavBar />
          <Spinner />
        </div>
      )
    }

    const genres = movie.genres.map(genre => (
      <li key={genre.id}>
        {genre.name}
      </li>
    ))

    console.log(this.props.rating)

    return (
      <div>
        <NavBar />
        <div className="movie-page">
          <div className="backdrop">
            <img
              src={loading || !movie.backdrop ? null : movie.backdrop}
              alt={`${movie.title}-movie-backdrop`}
            />
          </div>
          <div>
            <h1>{movie.title}<span> ({movie.year})</span></h1>
            <img src={loading ? '' : movie.poster}
                 alt={`${movie.title}-movie-poster`}/>
          </div>
          <div className="watch-container">
            <MovieRatings className="movie-rating"
              changeRating={e => this.changeRating(e)}
              rating={this.props.rating || ''}
            />
            <WatchButtons className="watch-btns"
              addWatched={this.toggleAddForm.bind(this)}
              removeWatched={this.removeWatched.bind(this)}
              addWatchlist={this.addWatchlistClick.bind(this)}
              removeWatchlist={this.removeWatchlist.bind(this)}
            />
            <StatusMessage className="status-message"
              showMessage={this.state.showMessage}
              messageFor={this.state.messageFor}
              watchedStatus={this.props.watchedStatus}
              watchlistStatus={this.props.watchlistStatus}
              title={movie.title}
            />
          </div>

          <div className="overview">
            <h3>Overview:</h3>
            <p>{!movie.overview ?
                'No overview available for this title': movie.overview}
            </p>
          </div>

          <div className="genres">
            <h3>Genres:</h3>
            <ul>
              {genres}
            </ul>
          </div>
        </div>
        {this.state.showForm ?
          <AddMovie
            movieId={this.props.match.params.movieId}
            rating={this.state.rating}
            title={movie.title}
            poster={movie.poster}
            poster_path={movie.poster_path}
            year={movie.year}
            closeAddForm={this.toggleAddForm.bind(this)}
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
    movieId: ownProps.match.params.movieId,
    loading: state.movies.loading,
    movieInfo: state.movies.movieInfo,
    watchedCheck: state.lists.watchedCheck,
    watchedStatus: state.lists.watchedStatus,
    watchedMovieId: state.lists.watchedMovieId,
    rating: state.lists.rating,
    review: state.lists.review,
    watchlistCheck: state.lists.watchlistCheck,
    watchlistStatus: state.lists.watchlistStatus,
    watchlistMovieId: state.lists.watchlistMovieId
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchMovieInfo: (movieId) => dispatch(fetchMovieInfo(movieId)),
  checkWatched: (movieId) => dispatch(checkWatched(movieId)),
  checkWatchlist: (movieId) => dispatch(checkWatchlist(movieId)),
  removeWatched: (movieId) => dispatch(removeWatched(movieId)),
  addWatchlist: (movieId) => dispatch(addWatchlist(movieId)),
  removeWatchlist: (movieId) => dispatch(removeWatchlist(movieId)),
  updateWatched: (movieId, reqBody) => dispatch(updateWatched(movieId, reqBody))
});

export default requiresLogin()(connect(mapStateToProps, mapDispatchToProps)(MoviePage));

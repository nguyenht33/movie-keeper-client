import React, { Component } from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import './movie-page.css'
import { fetchMovieInfo } from '../actions/movies';
import { checkWatched, checkWatchlist, addWatchlist, removeWatched, removeWatchlist, updateWatched } from '../actions/lists';
import NavBar from './header-components/nav-bar';
import { Spinner } from './spinner';
import { ErrorMessage } from './error-message';
import { StatusMessage } from './status-message';
import WatchButtons from './watch-buttons';
import MovieRatings from './movie-ratings';
import AddMovie from './add-movie';

export class MoviePage extends Component {
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
    const reqBody = this.retrieveMovieInfo();
    this.props.addWatchlist(reqBody);
    this.showMessage('watchlist');
  }

  removeWatched() {
    const dbId = this.props.watchedMovieId;
    const movieId = this.props.movieId;
    this.props.removeWatched(dbId, movieId);
    this.showMessage('watched');
  }

  removeWatchlist() {
    const dbId = this.props.watchlistMovieId;
    const movieId = this.props.movieId;
    this.props.removeWatchlist(dbId, movieId);
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
        rating: parseInt(rating, 10)
      })
      this.toggleAddForm();
    }
  }

  closeAddForm() {
    this.toggleAddForm();
    this.setState({rating: ''});
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
    const { loading, movieError, error } = this.props;
    const movie = this.props.movieInfo;

    if (movieError && !movie.length) {
      return (
        <ErrorMessage
          code={this.props.movieError.status_code}
          message={this.props.movieError.status_message}
        />
      )
    }

    if (error) {
      return (
        <ErrorMessage
          code={this.props.error.code}
          message={this.props.error.message}
        />
      )
    }

    if (!movie.id) {
      return (
        <div>
          <NavBar />
          <Spinner />
        </div>
      )
    }

    const genres = movie.genres.map((genre, index) => (
      <li key={index}>
        {genre.name}
      </li>
    ))

    return (
      <div>
        {this.state.showForm ?
          <div className="lightbox">
            <div className="add-movie-container">
              <AddMovie
                movieId={this.props.match.params.movieId}
                rating={this.state.rating}
                title={movie.title}
                poster={movie.poster}
                poster_path={movie.poster_path}
                year={movie.year}
                closeAddForm={this.closeAddForm.bind(this)}
                addWatchedSubmit={this.addWatchedSubmit.bind(this)}
              />
            </div>
          </div> : null
        }
        <NavBar />
        <div className="movie-page">
          <div className="backdrop">
            <img
              src={loading || !movie.backdrop ? null : movie.backdrop}
              alt={!movie.backdrop ? null : `${movie.title}-movie-backdrop`}
            />
          </div>
          <div>
            <h1>{movie.title}<span> ({movie.year})</span></h1>
            <img
              className="poster"
              src={loading ? '' : movie.poster}
              alt={!movie.poster ? null: `${movie.title}-movie-poster`}/>
          </div>
          <div className="watch-container">
            <MovieRatings className="movie-rating"
              changeRating={this.changeRating.bind(this)}
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
          {!this.props.review ? null:
            <div className="review">
              <h3>Your Review:</h3>
              <p>"{this.props.review}"</p>
            </div>
          }
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
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    movieId: ownProps.match.params.movieId,
    loading: state.movies.loading,
    error: state.lists.error,
    movieError: state.movies.error,
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
  removeWatched: (dbId, movieId) => dispatch(removeWatched(dbId, movieId)),
  addWatchlist: (movieId) => dispatch(addWatchlist(movieId)),
  removeWatchlist: (dbId, movieId) => dispatch(removeWatchlist(dbId, movieId)),
  updateWatched: (movieId, reqBody) => dispatch(updateWatched(movieId, reqBody))
});

export default requiresLogin()(connect(mapStateToProps, mapDispatchToProps)(MoviePage));

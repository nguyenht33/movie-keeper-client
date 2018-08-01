import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import './movie-page.css'
import { fetchMovieInfo } from '../actions/movies';
import { checkWatched, checkWatchlist, addWatchlist, removeWatched, removeWatchlist } from '../actions/lists';
import NavBar from './header-components/nav-bar';
import { Spinner } from './spinner';
import { StatusMessage } from './status-message';
import { WatchButtons } from './watch-buttons';
import MovieRatings from './movie-ratings';
import AddMovie from './add-movie';
import { TEST_USER } from '../config';
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
    const movieId = this.props.match.params.movieId;
    this.props.fetchMovieInfo(movieId);
    this.checkUsersLists();
  }

  checkUsersLists() {
    const movieId = this.props.match.params.movieId;
    const userId = TEST_USER;
    this.props.checkWatched(userId, movieId);
    this.props.checkWatchlist(userId, movieId);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.watchedCheck !== this.props.watchedCheck) {
      this.setState({ watched: nextProps.watchedCheck });
    }
    if (nextProps.watchlistCheck !== this.props.watchlistCheck) {
      this.setState({ watchlist: nextProps.watchlistCheck });
    }
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

  addWatchlistClick() {
    const userId = TEST_USER;
    const reqBody = this.retrieveMovieInfo();
    this.props.addWatchlist(userId, reqBody);
    this.toggleWatchlistStatus();
    this.showMessage('watchlist');
  }

  removeWatched() {
    const movieId = this.props.watchedMovieId;
    const userId = TEST_USER;
    this.props.removeWatched(userId, movieId);
    this.toggleWatchedStatus();
    this.showMessage('watched');
    this.checkUsersLists();
  }

  removeWatchlist() {
    const movieId = this.props.watchlistMovieId;
    const userId = TEST_USER;
    this.props.removeWatchlist(userId, movieId);
    this.toggleWatchlistStatus();
    this.showMessage('watchlist');
  }

  toggleWatchedStatus() {
    this.setState({
      watched: !this.state.watched
    });
  }

  toggleWatchlistStatus() {
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

  changeRating(rating) {
    if (this.props.watchedCheck) {
     console.log(this.props.watchedCheck)
   } else {
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
    console.log(this.props.watchedCheck)

    const loading = this.props.loading,
          movie = this.props.movieInfo;

    if (loading) {
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

          <WatchButtons className="watch-btns"
            watched={this.state.watched}
            watchlist={this.state.watchlist}
            addWatched={this.toggleAddForm.bind(this)}
            removeWatched={this.removeWatched.bind(this)}
            addWatchlist={this.addWatchlistClick.bind(this)}
            removeWatchlist={this.removeWatchlist.bind(this)}
          />

          <MovieRatings className="movie-rating"
            changeRating={this.changeRating.bind(this)}
          />

          <StatusMessage className="status-message"
            showMessage={this.state.showMessage}
            messageFor={this.state.messageFor}
            watchedStatus={this.props.watchedStatus}
            watchlistStatus={this.props.watchlistStatus}
            title={movie.title}
          />

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
  checkWatched: (userId, movieId) => dispatch(checkWatched(userId, movieId)),
  checkWatchlist: (userId, movieId) => dispatch(checkWatchlist(userId, movieId)),
  removeWatched: (userId, movieId) => dispatch(removeWatched(userId, movieId)),
  addWatchlist: (userId, movieId) => dispatch(addWatchlist(userId, movieId)),
  removeWatchlist: (userId, movieId) => dispatch(removeWatchlist(userId, movieId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);

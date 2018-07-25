import React, { Component } from 'react';
import { connect } from 'react-redux';
import { API_BASE_URL } from '../config';
import { addWatched } from '../actions/lists';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      filled: false,
      rating: '',
      review: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const userId = '5b50daefc2f89310d0729736';
    const reqBody = this.retrieveMovieInfo();
    this.props.addWatched(userId, reqBody);
    this.props.addWatchedSubmit();
  }

  retrieveMovieInfo() {
    let today = new Date();
    return {
      movieId: this.props.movieId,
      title: this.props.title,
      year: this.props.year,
      poster_path: this.props.poster_path,
      rating: this.state.rating,
      review: this.state.review,
      date: today.toISOString()
    }
  }

  changeRating(e) {
    this.setState({ rating: e.target.value });
  }

  changeReview(e) {
    if (e.target.value) {
      this.setState({ review: e.target.value, filled: true });
    };
  }

  render() {
    return (
      <div>
        <h2>I Watched</h2>
        <h3>
          {this.props.title} <span>({this.props.year}) </span>
        </h3>
        <img
          src={this.props.poster}
          alt={`${this.props.title}-movie-poster`}
        />
        <form className="add-movie-form" onSubmit={e => this.handleSubmit(e)}>
          <fieldset>
            <div className="rating-button">
              <input type="radio" name="rating" value="1" id="rating-1"
                onChange={e => this.changeRating(e)}
              />
              <input type="radio" name="rating" value="2" id="rating-2"
                onChange={e => this.changeRating(e)}
              />
              <input type="radio" name="rating" value="3" id="rating-3"
                onChange={e => this.changeRating(e)}
              />
              <input type="radio" name="rating" value="4" id="rating-4"
                onChange={e => this.changeRating(e)}
              />
              <input type="radio" name="rating" value="5" id="rating-5"
                onChange={e => this.changeRating(e)}
              />
            </div>
            <div>
              <textarea placeholder="Write a review"
                onChange={e => this.changeReview(e)} />
            </div>
            <input type="submit" />
          </fieldset>
        </form>
        <button onClick={this.props.closeAddForm}>X</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading,
  watchedStatus: state.lists.watchedStatus
});

const mapDispatchToProps = dispatch => ({
  addWatched: (userId, reqBody) => dispatch(addWatched(userId, reqBody))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddMovie);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addWatched } from '../actions/lists';
import './add-movie.css';

export class AddMovie extends Component {
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
    const reqBody = this.retrieveMovieInfo();
    this.props.addWatched(reqBody);
    this.props.addWatchedSubmit();
  }

  retrieveMovieInfo() {
    let today = new Date();
    return {
      movieId: this.props.movieId,
      title: this.props.title,
      year: this.props.year,
      poster_path: this.props.poster_path,
      rating: this.props.rating || this.state.rating,
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
    const ratingNumbers = [1, 2, 3, 4, 5];
    const ratingForm = ratingNumbers.map(rating => (
      <div key={rating} className="rating-btn">
        <input
          id={`rating-${rating}`}
          className="radio-item"
          name="rating"
          component="input"
          type="radio"
          value={rating}
          defaultChecked={this.props.rating ? this.props.rating === rating : null}
          onChange={e => this.changeRating(e)}
        />
        <label htmlFor={`rating-${rating}`}
          className={this.props.rating >= rating && !this.state.rating ?
             "full label-item"
             : (rating > this.state.rating ?
                "empty label-item": "full label-item"
             )
          }
        />
      </div>
    ))

    return (
      <div className="add-movie">
        <div className="add-container">
          <div className="add-left">
            <img
              src={this.props.poster}
              alt={`${this.props.title}-movie-poster`}
            />
          </div>
          <div className="add-right">
          <h2>
            <em>Adding to watched...</em>
          </h2>
            <h2>{this.props.title}</h2>
            <form className="add-movie-form" onSubmit={e => this.handleSubmit(e)}>
                <div className="rating-form">
                  {ratingForm}
                </div>
                <div>
                  <textarea placeholder="Write a review"
                    onChange={e => this.changeReview(e)} />
                </div>
                <input type="submit" className="add-movie-submit" value="add"/>
            </form>
          </div>
        </div>
        <button
          className="close-btn"
          onClick={this.props.closeAddForm}
        >
          <i className="icon-cross"></i>
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading,
  watchedStatus: state.lists.watchedStatus
});

const mapDispatchToProps = dispatch => ({
  addWatched: (reqBody) => dispatch(addWatched(reqBody))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddMovie);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TEST_USER } from '../config';
import { addWatched } from '../actions/lists';
import './add-movie.css';

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
      <div className="add-movie">
        <h2>
          <em>I watched...</em>
        </h2>
        <div className="add-container">
          <div className="add-left">
            <img
              src={this.props.poster}
              alt={`${this.props.title}-movie-poster`}
            />
          </div>
          <div className="add-right">
            <h2>{this.props.title}</h2>
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
                <input type="submit" className="add-movie-submit"/>
              </fieldset>
            </form>
          </div>
        </div>
        <button
          className="close-btn"
          onClick={this.props.closeAddForm}>
          X
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

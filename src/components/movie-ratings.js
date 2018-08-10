import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import './movie-rating.css';

class MovieRatings extends Component {
  changeRating(e) {
    this.props.changeRating(e);
  }

  render() {
    const ratingNumbers = [1, 2, 3, 4, 5];
    const ratingForm = ratingNumbers.map(rating => (
      <div key={rating} className="rating-btn">
        <label htmlFor={`rating-${rating}`}>{rating}</label>
        <Field name="rating"
          component="input"
          type="radio"
          value={rating}
          checked={this.props.rating === {rating}}
          onClick={e => this.changeRating(e)}
        />
      </div>
    ))
    return (
      <form>
        {ratingForm}
      </form>
    )
  };
}

// const mapStateToProps = (state) => {
//   return {
//     rating: state.lists.rating
//   }
// }

MovieRatings = reduxForm({
  form: 'rating'
})(MovieRatings)

export default MovieRatings;

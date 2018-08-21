import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import './movie-rating.css';

export class MovieRatings extends Component {
  render() {
    const ratingNumbers = [1, 2, 3, 4, 5];
    const ratingForm = ratingNumbers.map(rating => (
      <div key={rating} className="rating-btn">
        <Field
          id={`rating-${rating}`}
          className="radio-item"
          name="rating"
          component="input"
          type="radio"
          value={rating}
          checked={this.props.rating ? this.props.rating === rating : 0}
          onClick={e => {
            this.props.changeRating(e)
          }}
        />
        <label htmlFor={`rating-${rating}`}
           className={!this.props.rating ?
             "empty label-item"
             :
             (rating > this.props.rating ? "empty label-item" : "full label-item")
           }
        />
      </div>
    ))
    return (
      <form className="rating-form">
        {ratingForm}
      </form>
    )
  };
}

MovieRatings = reduxForm({
  form: 'rating'
})(MovieRatings)

export default MovieRatings;

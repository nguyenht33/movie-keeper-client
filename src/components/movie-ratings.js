import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import './movie-rating.css';

export class MovieRatings extends Component {
  constructor() {
    super();
    this.state = {
      hover: false,
      rating: null
    };
  }

  onMouseEnter(e) {
    this.setState({
      hover: true,
      rating: e.currentTarget.value
    })
  }

  onMouseLeave(e) {
    this.setState({
      hover: false,
      rating: null
    })
  }
  render() {
    const ratingNumbers = [1, 2, 3, 4, 5];
    const ratingForm = ratingNumbers.map(rating => (
      <div key={rating} className="rating-btn">
        <Field
          onMouseEnter={e => this.onMouseEnter(e)}
          onMouseLeave={e => this.onMouseLeave(e)}
          id={`rating-${rating}`}
          className="radio-item"
          name="rating"
          component="input"
          type="radio"
          value={rating}
          checked={this.state.hover ? 0 :
            (this.props.rating ? this.props.rating === rating : 0)
          }
          onClick={e => {
            this.props.changeRating(e)
          }}
        />
        <label htmlFor={`rating-${rating}`}
           className={this.state.hover ?
               (rating > this.state.rating ? "empty-hover label-item" : "full-hover label-item")
               :
               (this.props.rating ?
                 (rating > this.props.rating ? "empty label-item" : "full label-item") : "empty label-item"
               )
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

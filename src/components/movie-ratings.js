import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import './movie-rating.css';

class MovieRatings extends Component {
  render() {
    const ratingNumbers = [1, 2, 3, 4, 5];
    const ratingForm = ratingNumbers.map(rating => (
      <div key={rating} className="rating-btn">
        <label htmlFor={`rating-${rating}`}>
           {!this.props.rating ?
             <i className="icon-star-empty"></i>
             : (rating > this.props.rating ?
                <i className="icon-star-empty"></i>
                :
                <i className="icon-star-full"></i>
            )
          }
        </label>
        <Field name="rating"
          component="input"
          type="radio"
          value={rating}
          checked={this.props.rating ? this.props.rating === rating : 0}
          onClick={e => this.props.changeRating(e)}
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

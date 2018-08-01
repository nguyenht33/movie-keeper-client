import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';

class MovieRatings extends Component {
  changeRating(e) {
    this.props.changeRating(e.currentTarget.value);
  }

  render() {
    return (
      <form>
          <div>
            <label htmlFor="rating-1">1</label>
            <Field name="rating"
              component="input"
              type="radio" value="1"
              checked={this.props.rating === 1}
              onChange={e => this.changeRating(e)}
            />
          </div>
          <div>
            <label htmlFor="rating-2">2</label>
            <Field name="rating"
              component="input"
              type="radio" value="2"
              checked={this.props.rating === 2}
              onChange={e => this.changeRating(e)}
            />
          </div>
          <div>
            <label htmlFor="rating-3">3</label>
            <Field name="rating"
              component="input"
              type="radio" value="3"
              checked={this.props.rating === 3}
              onChange={e => this.changeRating(e)}
            />
          </div>
          <div>
            <label htmlFor="rating-4">4</label>
            <Field name="rating"
              component="input"
              type="radio" value="4"
              checked={this.props.rating === 4}
              onChange={e => this.changeRating(e)}
            />
          </div>
          <div>
            <label htmlFor="rating-5">5</label>
            <Field name="rating"
              component="input"
              type="radio" value="5"
              checked={this.props.rating === 5}
              onChange={e => this.changeRating(e)}
            />
          </div>
      </form>
    )
  };
}

const mapStateToProps = (state) => {
  return {
    rating: state.lists.rating
  }
}

MovieRatings = reduxForm({
  form: 'rating'
})(MovieRatings)

export default connect(mapStateToProps)(MovieRatings)

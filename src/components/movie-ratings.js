import React, { Component } from 'react';
import {connect} from 'react-redux';

class MovieRatings extends Component {
  changeRating(e) {
    console.log(e);
  }

  render() {
    console.log(this.props.currentRating)
    return (
      <form>
        <div className="rating-button">
          <input type="radio" name="rating" value="1" id="rating-1"
            onChange={e => this.changeRating(e)}
            checked={this.props.rating === 2}
          />
          <input type="radio" name="rating" value="2" id="rating-2"
            onChange={e => this.changeRating(e)}
            checked={this.props.rating === 2}
          />
          <input type="radio" name="rating" value="3" id="rating-3"
            onChange={e => this.changeRating(e)}
            checked={this.props.rating === 3}
          />
          <input type="radio" name="rating" value="4" id="rating-4"
            onChange={e => this.changeRating(e)}
            checked={this.props.rating === 4}
          />
          <input type="radio" name="rating" value="5" id="rating-5"
            onChange={e => this.changeRating(e)}
            checked={this.props.rating === 5}
          />
        </div>
      </form>
    )
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    rating: state.lists.rating,
  }
}

export default connect(mapStateToProps)(MovieRatings);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';

import { searchMovie } from '../../actions';

class SearchForm extends Component {
  handleSubmit(event) {
    event.preventDefault();
    const query = this.textInput.value.trim();
    this.props.dispatch(searchMovie(query));
    this.props.history.push({
      pathname:'/search-results',
      state:{
        results: this.props.movieResults
      }
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <fieldset>
            <input
              type="search"
              id="search"
              name="search"
              placeholder="search movie"
              ref={input => this.textInput = input}
            />
            <input type="submit"/>
          </fieldset>
        </form>
        {}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movieResults: state.movieResults
})

export default connect(mapStateToProps)(SearchForm);

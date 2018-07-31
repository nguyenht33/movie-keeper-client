import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { searchMovie } from '../../actions/movies';

class SearchForm extends Component {
  slugifiy(query) {
    return query
      .toLowerCase()
      .replace(/ /g,'-')
      .replace(/[^\w-]+/g,'');
  }

  handleSubmit(event) {
    event.preventDefault();
    const query = this.textInput.value.trim();
    const slug = this.slugifiy(query);
    if (query) {
      this.props.searchMovie(query);
      this.props.history.push(`/results/?q=${slug}`);
      this.textInput.value = ''
    }
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
      </div>
    )
  };
};

const mapStateToProps = state => ({
  searchResults: state.movies.searchResults
});

const mapDispatchToProps = (dispatch) => ({
  searchMovie: (query, page) => dispatch(searchMovie(query, page))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchForm));

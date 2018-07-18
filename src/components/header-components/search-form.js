import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { searchMovie } from '../../actions';

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
    this.props.dispatch(searchMovie(query));
    this.props.history.push({
      pathname:`/results/${slug}`
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
      </div>
    )
  }
}

const mapStateToProps = state => ({
  searchResults: state.searchResults
})

export default withRouter(connect(mapStateToProps)(SearchForm));

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { searchMovie } from '../../actions/movies';

export class SearchForm extends Component {
  slugify(query) {
    return query
      .toLowerCase()
      .replace(/ /g,'-')
      .replace(/[^\w-]+/g,'');
  }

  handleSubmit(event) {
    event.preventDefault();
    const query = this.textInput.value.trim();
    const slug = this.slugify(query);

    if (query) {
      this.props.history.push(`/results/?q=${slug}`);
      this.textInput.value = ''
    }
  }

  render() {
    return (
      <div className="search-bar">
        {this.props.isMobile ?
          <button className="close-search" onClick={this.props.closeSearch}>
            <i className="icon-arrow-left2"></i>
          </button> : null
        }
        <form id="movie-search-form" onSubmit={e => this.handleSubmit(e)}>
            <input
              type="search"
              id="search"
              name="search"
              placeholder="search movie"
              ref={input => this.textInput = input}
            />
            <button type="submit" className="search-button">
              <i className="icon-search"></i>
            </button>
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

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { searchMovie } from '../actions/movies';
import NavBar from './header-components/nav-bar'
import { Spinner } from './spinner';
import { THUMBNAIL_URL} from '../config';
import { ErrorMessage } from './error-message';
import { NotFound } from './not-found';
import ReactPaginate from 'react-paginate';
import './search-results.css';
const qs = require('qs');

export class SearchResults extends Component {
  componentDidMount() {
    if (this.props.queries.q) {
      const queries = this.props.queries;
      const query = queries.q.replace(/-/g, ' ');
      const page = queries.page || 1;
      this.props.searchMovie(query, page)
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.queries.q !== this.props.queries.q ) {
      const queries = this.props.queries;
      const query = queries.q.replace(/-/g, ' ');
      const page = queries.page || 1;
      this.props.searchMovie(query, page)
    }
  }

  handlePageClick(data) {
    const parsed = qs.parse(this.props.location.search.slice(1));
    const query = parsed.q.replace(/-/g, ' ');
    const page = data.selected + 1;
    this.props.searchMovie(query, page);
    this.props.history.push(`/results?q=${query}&page=${page}`)
  }

  render() {
    const { error, searchResults, totalResults, loading } = this.props;
    const queries = this.props.queries;
    let query;

    if (!queries.q) {
      return <NotFound />
    } else {
      query = queries.q.replace(/-/g, ' ');
    }

    if (loading && !searchResults.length) {
      return (
        <div>
          <NavBar />
          <Spinner />
        </div>
      )
    }

    if (error && !searchResults.length) {
      return (
        <div>
          <ErrorMessage
            code={error.status_code}
            message={error.status_message}
          />
        </div>
      )
    }

    const movieList = searchResults.map(movie => (
      <li key={movie.id} className="poster">
        <Link to={`/movie/${movie.id}`}>
          <img
            src={movie.poster_path ? `${THUMBNAIL_URL}${movie.poster_path}` : 'missing-thumbnail'}
            alt={movie.poster_path ? `${movie.title}-thumbnail` : 'missing-thumbnail'}
          />
        </Link>
      </li>
    ))

    return (
      <div className="results-container">
        <NavBar />
        <h2>
          Found {totalResults} titles for "{query}"
        </h2>
        <ul className="search-results">
          {movieList}
        </ul>
        {movieList.length ?
          <div className="paginate-container">
            <ReactPaginate
              previousLabel={'<'}
              nextLabel={'>'}
              breakLabel={<a href="">...</a>}
              breakClassName={'break-me'}
              pageCount={this.props.resultsPages}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={this.handlePageClick.bind(this)}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
              forcePage={this.props.pageNumber}
            />
          </div>
          : null
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  searchResults: state.movies.searchResults,
  totalResults: state.movies.totalResults,
  resultsPages: state.movies.resultsPages,
  pageNumber: state.movies.resultsPageNumber - 1,
  loading: state.movies.loading,
  error: state.movies.error,
  queries: qs.parse(ownProps.location.search.slice(1))
});

const mapDispatchToProps = (dispatch) => ({
  searchMovie: (query, page) => dispatch(searchMovie(query, page))
});

export default requiresLogin()(connect(mapStateToProps, mapDispatchToProps)(SearchResults));

import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchMovie } from '../actions/movies';
import queryString from 'query-string';
import NavBar from './header-components/nav-bar'
import { Spinner } from './spinner';
import { THUMBNAIL_URL} from '../config';
import { NotFound } from '../not-found';
import ReactPaginate from 'react-paginate';

class SearchResults extends Component {
  componentDidMount() {
    const parsed = queryString.parse(this.props.location.search);
    const query = parsed.q.replace(/-/g, ' ');
    const page = parsed.page;
    if (query) {
      this.props.searchMovie(query, page);
    } else {
      <Route render={()=> <NotFound/>} />
    }
  }

  handlePageClick(data) {
    const parsed = queryString.parse(this.props.location.search);
    const query = parsed.q.replace(/-/g, ' ');
    const page = data.selected + 1;
    this.props.searchMovie(query, page);
    this.props.history.push(`/results/?search=${query}?page=${page}`)
  }


  render() {
    const {searchResults, totalResults, resultsPages, loading} = this.props;
    const parsed = queryString.parse(this.props.location.search);
    const query = parsed.q.replace(/-/g, ' ');

    if (loading) {
      return (
        <div>
          <NavBar />
          <Spinner />
        </div>
      )
    }

    const movieList = searchResults.map(movie => (
      <li key={movie.id}>
        <Link to={`/movie/${movie.id}`}>
          <h3>
            {movie.title}
            <span> ({movie.release_date.slice(0, 4)})</span>
          </h3>
          <img
            src={movie.poster_path ? `${THUMBNAIL_URL}${movie.poster_path}` : 'missing-thumbnail'}
            alt={movie.poster_path ? `${movie.title}-thumbnail` : 'missing-thumbnail'}
          />
        </Link>
      </li>
    ))

    return (
      <div>
        <NavBar />
        <h2>
          Found {totalResults} titles for '{query}'
        </h2>
        <ul>
          {movieList}
        </ul>
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={<a href="">...</a>}
          breakClassName={'break-me'}
          pageCount={200}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick.bind(this)}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          forcePage={this.props.pageNumber}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  searchResults: state.movies.searchResults,
  totalResults: state.movies.totalResults,
  resultsPages: state.movies.resultsPages,
  loading: state.movies.loading
});

const mapDispatchToProps = (dispatch) => ({
  searchMovie: (query, page) => dispatch(searchMovie(query, page))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);

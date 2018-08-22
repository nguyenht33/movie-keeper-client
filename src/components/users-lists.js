import React, { Component } from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { getWatched, getWatchlist } from '../actions/lists';
import { Link } from 'react-router-dom';
import NavBar from './header-components/nav-bar';
import { Spinner } from './spinner';
import { ErrorMessage } from './error-message';
import DashboardHeader from './dashboard-header';
import { THUMBNAIL_URL } from '../config';
import ReactPaginate from 'react-paginate';
import './users-lists.css';
const qs = require('qs');

export class UsersLists extends Component {
  componentDidMount() {
    const page = this.props.queries.page || 1;
    this.requestAPI(this.props.listType, page);
  }

  componentDidUpdate(prevProps){
    if (prevProps.listType !== this.props.listType) {
      this.requestAPI(this.props.listType, this.props.pageNumber + 1);
    }
    if (prevProps.pageNumber !== this.props.pageNumber) {
      this.requestAPI(this.props.listType, this.props.pageNumber + 1);
    }
  }

  requestAPI(listType, page) {
    if (listType === 'watched') {
      this.props.getWatched(page, 20)
    }
    if (listType === 'watchlist') {
      this.props.getWatchlist(page, 20)
    }
  }

  handlePageClick(data) {
    const page = data.selected + 1;
    const perPage = 20;
    if (this.props.listType === 'watched') {
      this.props.getWatched(page, perPage)
      this.props.history.push(`/watched?page=${page}`)
    }
    if (this.props.listType === 'watchlist') {
      this.props.getWatchlist(page, perPage)
      this.props.history.push(`/watched?page=${page}`)
    }
  }

  render() {
    const {loading, error} = this.props;
    if (loading) {
      return (
        <div>
          <NavBar />
          <Spinner />
        </div>
      )
    }
    if (error) {
      return (
        <div>
          <NavBar />
          <ErrorMessage code={error.code} message={error.message}/>
        </div>
      )
    }

    const listType = this.props.listType;
    let moviesList;
    if (listType === 'watched' && this.props.moviesWatched) {
      moviesList = this.props.moviesWatched
    } else if (listType === 'watchlist' && this.props.moviesWatchlist) {
      moviesList = this.props.moviesWatchlist
    } else {
      moviesList = null;
    }

    let movies;
    if (moviesList) {
      movies = moviesList.map((movie, index) => (
        <li key={index}>
          <Link to={`/movie/${movie.movieId}`}>
            <img
              src={movie.poster_path ? `${THUMBNAIL_URL}${movie.poster_path}` : 'missing-thumbnail'}
              alt={movie.poster_path ? `${movie.title}-thumbnail` : 'missing-thumbnail'}
            />
          </Link>
        </li>
      ))
    }

    let pages;
    if (listType === 'watched' && this.props.moviesWatchedPages) {
      pages = this.props.moviesWatchedPages;
    }
    if (listType === 'watchlist' && this.props.moviesWatchlistPages) {
      pages = this.props.moviesWatchlistPages
    }

    return (
      <div>
        <NavBar />
        <DashboardHeader />
        {this.props.count === 0 ?
          <div className="no-content">
            <h2>You have not added any movies to your {listType}</h2>
            <p><Link to={'/browse'}>Go back to browsing...</Link></p>
          </div> :
          <ul className="users-lists">
            {movies}
          </ul>
        }
        {pages ?
          <div className="paginate-container">
            <ReactPaginate
              previousLabel={'<'}
              nextLabel={'>'}
              breakLabel={<a href="">...</a>}
              breakClassName={'break-me'}
              pageCount={pages}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={this.handlePageClick.bind(this)}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
              forcePage={this.props.pageNumber}
            />
          </div>: null
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const queries = qs.parse(ownProps.location.search.slice(1));
  const pageNumber = (parseInt(queries.page, 10) - 1) || 0;
  return {
    loading: state.lists.loading,
    error: state.lists.error,
    listType: ownProps.match.path.slice(1),
    moviesWatched: state.lists.moviesWatched,
    moviesWatchlist: state.lists.moviesWatchlist,
    moviesWatchedPages: state.lists.moviesWatchedPages,
    moviesWatchlistPages: state.lists.moviesWatchlistPages,
    count: state.lists.count,
    queries,
    pageNumber
  }
}

const mapDispatchToProps = (dispatch) => ({
  getWatched: (page, perPage) => dispatch(getWatched(page, perPage)),
  getWatchlist: (page, perPage) => dispatch(getWatchlist(page, perPage))
});

export default requiresLogin()(connect(mapStateToProps, mapDispatchToProps)(UsersLists));

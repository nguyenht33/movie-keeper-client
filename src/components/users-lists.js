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

export class UsersLists extends Component {
  componentDidMount() {
    this.requestAPI(this.props.listType);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.listType !== this.props.listType) {
      this.requestAPI(nextProps.listType);
    }
  }

  requestAPI(listType, page) {
    if (listType === 'watched') {
      this.props.getWatched(1, 20)
    }
    if (listType === 'watchlist') {
      this.props.getWatchlist(1, 20)
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
    }
    else if (listType === 'watchlist' && this.props.moviesWatchlist) {
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
    if (this.props.listType === 'watched' && this.props.moviesWatchedPages) {
      pages = this.props.moviesWatchedPages;
    }
    if (this.props.listType === 'watchlist' && this.props.moviesWatchlistPages) {
      pages = this.props.moviesWatchlistPages
    }

    return (
      <div>
        <NavBar />
        <DashboardHeader />
        <ul className="users-lists">
          {movies}
        </ul>
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
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.lists.loading,
    error: state.lists.error,
    listType: ownProps.match.path.slice(1),
    moviesWatched: state.lists.moviesWatched,
    moviesWatchlist: state.lists.moviesWatchlist,
    moviesWatchedPages: state.lists.moviesWatchedPages,
    moviesWatchlistPages: state.lists.moviesWatchlistPages
  }
}

const mapDispatchToProps = (dispatch) => ({
  getWatched: (page, perPage) => dispatch(getWatched(page, perPage)),
  getWatchlist: (page, perPage) => dispatch(getWatchlist(page, perPage))
});

export default requiresLogin()(connect(mapStateToProps, mapDispatchToProps)(UsersLists));

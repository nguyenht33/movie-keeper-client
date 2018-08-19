import React, { Component } from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import queryString from 'query-string';
import NavBar from './header-components/nav-bar';
import BrowseList from './browse-list';
import ReactPaginate from 'react-paginate';
import { fetchMovies } from '../actions/movies';
import { THUMBNAIL_URL} from '../config';
import { Spinner } from './spinner';
import { ErrorMessage } from './error-message';

export class BrowseMovies extends Component {
  componentDidMount() {
    const parsed = queryString.parse(this.props.location.search);
    const page = parsed.page;
    page ? this.props.fetchMovies(page) : this.props.fetchMovies(1);
  }

  handlePageClick(data) {
    console.log('click')
    const page = data.selected + 1;
    this.props.fetchMovies(page);
    this.props.history.push(`/browse?page=${page}`);
  }

  render() {
    const { loading, error, browseList } = this.props;
    if(loading) {
      return (
        <div>
          <NavBar />
          <Spinner />
        </div>
      )
    }
    if (error && !browseList.length) {
      return (
        <div>
          <ErrorMessage
            code={this.props.error.status_code}
            message={this.props.error.status_message}
          />
        </div>
      )
    }

    return (
      <div>
        <NavBar />
        <BrowseList />
        <div className="paginate-container">
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            pageCount={200}
            breakClassName={"break-label"}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            onPageChange={this.handlePageClick.bind(this)}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
            forcePage={this.props.pageNumber}
          />
        </div>
      </div>
    )
  };
};

const mapStateToProps = state => ({
  error: state.movies.error,
  browseList: state.movies.browseList,
  pageNumber: state.movies.browsePageNumber - 1,
  loading: state.movies.loading
});

const mapDispatchToProps = dispatch => ({
  fetchMovies: (page) => dispatch(fetchMovies(page))
});

export default requiresLogin()(withRouter(connect(mapStateToProps, mapDispatchToProps)(BrowseMovies)));

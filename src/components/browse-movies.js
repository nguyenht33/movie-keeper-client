import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBar from './header-components/nav-bar';
import BrowseList from './browse-list';
import ReactPaginate from 'react-paginate';
import { fetchMovies } from '../actions/movies';
import { THUMBNAIL_URL} from '../config';
import { Spinner } from './spinner';

class BrowseMovies extends Component {
  constructor() {
    super();
    this.state = {
      pageCount: 200,
    };
  }

  componentDidMount() {
    this.props.fetchMovies(1);
  }

  handlePageClick(data) {
    const page = data.selected + 1;
    this.props.fetchMovies(page)
  }

  render() {
    const {loading} = this.props;
    if(loading) {
      return (
        <div>
          <NavBar />
          <Spinner />
        </div>
      )
    }

    return (
      <div>
        <NavBar />
        <BrowseList />
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={<a href="">...</a>}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
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
  };
};

const mapStateToProps = state => ({
  browseList: state.movies.browseList,
  pageNumber: state.movies.browsePageNumber - 1,
  loading: state.movies.loading
});

const mapDispatchToProps = dispatch => ({
  fetchMovies: (page) => dispatch(fetchMovies(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(BrowseMovies);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWatched, getWatchlist } from '../actions/lists';
import NavBar from './header-components/nav-bar';
import DashboardHeader from './dashboard-header';
import DashboardContent from './dashboard-content';
import { TEST_USER } from '../config';


class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      showContent: 'watched'
    };
  }

  showWatched() {
    this.setState({
      showContent: 'watched'
    });
  }

  showWatchlist() {
    this.setState({
      showContent: 'watchlist'
    });
  }

  render() {
    console.log('this is dashboard -', this.state.showContent)
    return (
      <div>
        <NavBar />
        <DashboardHeader
          showWatched={this.showWatched.bind(this)}
          showWatchlist={this.showWatchlist.bind(this)}
        />
        <DashboardContent
          content={this.state.showContent}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.lists.loading,
    moviesWatched: state.lists.moviesWatched,
    moviesWatchlist: state.lists.moviesWatchlist
  }
}

const mapDispatchToProps = (dispatch) => ({
  getWatched: (userId) => dispatch(getWatched(userId)),
  getWatchlist: (userId) => dispatch(getWatchlist(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './nav-bar.css'
import { Link } from 'react-router-dom';
import SearchForm from './search-form';
import { clearAuth } from '../../actions/auth';
import { clearAuthToken } from '../../local-storage';

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      searchBar: false
    };
  }

  logOut() {
    this.props.clearAuth();
    clearAuthToken();
  }

  toggleSearchBar() {
    this.setState({
      searchBar: !this.state.searchBar
    });
  }

  render() {
    let userContent;
    if (this.props.loggedIn) {
      userContent =
        <div>
          {!this.state.searchBar ?
            <button onClick={() => this.toggleSearchBar()}>Search</button> : null
          }
          {!this.state.searchBar ?
            <button><Link to='/dashboard'>Dashboard</Link></button> : null
          }
          {!this.state.searchBar ?
            <button onClick={() => this.logOut()}>Log Out</button> : null
          }
        </div>
    } else {
      userContent = <button><Link to="/login">Login</Link></button>
    }

    return (
      <nav>
        <div>
            <Link to={this.props.loggedIn ? '/browse' : '/'}>
              {!this.state.searchBar ?
                <img src={require('../../images/logo.svg')} /> :
                null
              }
            </Link>
        </div>
        {this.state.searchBar ? <SearchForm closeSearch={this.toggleSearchBar.bind(this)}/> : null}
        {userContent}
      </nav>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  currentUser: state.auth.currentUser
});

const mapDispatchToProps = dispatch => ({
  clearAuth: () => dispatch(clearAuth())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchForm from './search-form';
import { clearAuth } from '../../actions/auth';
import { clearAuthToken } from '../../local-storage';

class NavBar extends Component {
  logOut() {
    this.props.clearAuth();
    clearAuthToken();
  }

  render() {
    let userContent;
    if (this.props.loggedIn) {
      userContent =
        <div>
          <button><Link to='/dashboard'>Dashboard</Link></button>
          <button onClick={() => this.logOut()}>Log Out</button>
        </div>
    } else {
      userContent = <p><Link to="/login">Login</Link></p>
    }

    return (
      <nav>
        <div>
          <h1>
            <Link to={this.props.loggedIn ? '/browse' : '/'}>
              Movie Keeper
            </Link>
          </h1>
        </div>
        {this.props.loggedIn ? <SearchForm /> : null}
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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './nav-bar.css'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import SearchForm from './search-form';
import { clearAuth } from '../../actions/auth';
import { clearAuthToken } from '../../local-storage';

export class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      searchBar: false,
      isMobile: false
    };
    this.changeScreenSize = this.changeScreenSize.bind(this);
  }

  componentDidMount() {
    this.changeScreenSize();
    window.addEventListener("resize", this.changeScreenSize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.changeScreenSize);
  }

  changeScreenSize() {
    this.setState({
      isMobile: window.innerWidth < 640
    });
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
    let navButtons;
    if (this.props.loggedIn) {
      navButtons =
        <div className="nav-buttons">
          {!this.state.searchBar ?
            <button className="toggle-search" onClick={() => this.toggleSearchBar()}>
              <i className="icon-search"></i>
            </button> : null
          }
          {!this.state.searchBar || !this.state.isMobile ?
            <button onClick={() => this.props.history.push('/dashboard')}>
              <i className="icon-bookmark"></i>
            </button> : null
          }
          {!this.state.searchBar || !this.state.isMobile ?
            <button className="log-out" onClick={() => this.logOut()}>
              <i className="icon-exit"></i>
            </button> : null
          }
        </div>
    } else {
      navButtons = <button><Link to="/login">Login</Link></button>
    }

    return (
      <nav>
        <div>
            <Link to={this.props.loggedIn ? '/browse' : '/'}>
              {!this.state.searchBar || !this.state.isMobile ?
                <img src={require('../../images/logo.svg')} alt="movie-keeper-logo"/> :
                null
              }
            </Link>
        </div>
        {this.state.searchBar ?
          <SearchForm
            closeSearch={this.toggleSearchBar.bind(this)}
            isMobile={this.state.isMobile}
          />
            : null}
        {navButtons}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));

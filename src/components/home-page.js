import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import NavBar from './header-components/nav-bar';
import { About } from './about';
import './home-page.css';

export class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      email: ''
    };
  }

  handleClick(e) {
    this.props.history.push('/registration');
  }

  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/browse"/>
    }
    return (
      <div>
        <NavBar />
        <section role="banner">
          <div className="hero">
            <div className="header-container">
              <h1>Movie Keeper</h1>
            </div>
            <div className="get-started">
              <button  type="click" onClick={this.handleClick.bind(this)}>
                Get Started — Register Today!
              </button>
            </div>
          </div>
        </section>
          <About />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HomePage);

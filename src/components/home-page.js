import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import NavBar from './header-components/nav-bar';
import RegistrationForm from './registration-form';
import { API_BASE_URL, API_KEY, MOVIE_URL } from '../config';
import './home-page.css';

export class HomePage extends Component {
  render() {
    console.log(API_BASE_URL, API_KEY, MOVIE_URL, process.env)
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
          </div>
        </section>
        <div className="sections-container">
          <section className="about">
            <header>
              <h3>Keep a record of your movie collection</h3>
            </header>
              <p>[<em>placeholder for screenshot of user add movie interface</em>]</p>
              <p>Make a collection of the movies you watched. Add reviews and ratings for each new addition to your collection.</p>
          </section>
          <section className="form-container">
            <RegistrationForm />
          </section>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HomePage);

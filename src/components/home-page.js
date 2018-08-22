import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import NavBar from './header-components/nav-bar';
import RegistrationForm from './registration-form';
import './home-page.css';

export class HomePage extends Component {
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
          </div>
        </section>
          <section className="about">
            <div className="about-container">
              <header>
                <h2>Keep a record of your movie collection today!</h2>
                <p className="description">Movie keeper is an app that lets you keep track of the movies you watched and movies you want to watch.</p>
              </header>
              <ul>
                <li>
                  <img src={require('../images/screen-1.png')} alt="movie-keeper-screen-1"/>
                  <p>Browse movies or search movies</p>
                </li>
                <li>
                  <img src={require('../images/screen-4.png')} alt="movie-keeper-screen-2"/>
                  <p>View movie info</p>
                </li>
                <li>
                  <img src={require('../images/screen-2.png')} alt="movie-keeper-screen-2"/>
                  <p>Add movies to collection</p>
                </li>
                <li>
                  <img src={require('../images/screen-3.png')} alt="movie-keeper-screen-3"/>
                  <p>View your collections</p>
                </li>
              </ul>
            </div>
          </section>
          <section className="form-container">
            <RegistrationForm />
          </section>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HomePage);

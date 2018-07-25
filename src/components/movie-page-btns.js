import React, { Component } from 'react';
import NavBar from './header-components/nav-bar';
import { API_BASE_URL } from '../config';

class MoviePageBtns extends Component {
  render() {
    return (
      <div>
        <button
          onClick={!this.props.watched ? (
            this.props.toggleAddForm
          ) : (
            this.props.removeWatched
          )}
        >
          {!this.props.watched ? 'Watched' : 'Unwatch'}
        </button>
        <button>Watch-List</button>
      </div>
    )
  }
}


export default MoviePageBtns;

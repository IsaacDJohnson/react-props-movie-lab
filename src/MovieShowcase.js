import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

const mData = movieData

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return (
        mData.map(title => <li>{this.props.title}</li>)
    );
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}

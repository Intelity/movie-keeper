import React, { PropTypes } from 'react';
import Flexbox from 'flexbox-react';

import MovieListItem from './movieListItem';

const renderNoMovies = () =>
  <div key='loading'>
    <em>No movies in collection, please add.</em>
  </div>;

const MovieList = ({ title, movies }) =>
  <Flexbox flexGrow={1} flexDirection="row">
    <Flexbox className="App-menu" flexDirection="column">
      <Flexbox className="menu-item selected headings">
        <span>{title}</span>
        <i className="material-icons menu-icon">chevron_right</i>
      </Flexbox>
    </Flexbox>
    <Flexbox flexGrow={1} className="App-content" flexDirection="column">
      <Flexbox>
        <h2 className="headings">{title}</h2>
      </Flexbox>
      <Flexbox className="App-content-movies" flexDirection="row" flexWrap="wrap">
        { movies.length
          ? movies.map(movie => <MovieListItem key={movie.movieId} {...movie} />)
          : renderNoMovies() }
      </Flexbox>
    </Flexbox>
  </Flexbox>;

MovieList.protoTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired
};

export default MovieList;


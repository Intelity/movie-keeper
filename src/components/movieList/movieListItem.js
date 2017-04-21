import React, { PropTypes } from 'react';
import Flexbox from 'flexbox-react';

const MovieListItem  = ({ movieId, rating, title, year, director }) =>
  <Flexbox className="movie" flexDirection="column">
    <div className="movie-rating">{rating}</div>
    <Flexbox className="movie-poster" />
    <Flexbox className="movie-title" flexDirection="row">{title}</Flexbox>
    <Flexbox>Year: {year}</Flexbox>
    <Flexbox className="movie-info" flexDirection="row">
      <em>Directed by: {director}</em>
    </Flexbox>
  </Flexbox>;

MovieListItem.propTypes = {
  movieId: PropTypes.number.isRequired,
  rating: PropTypes.number,
  title: PropTypes.string.isRequired,
  year: PropTypes.string,
  director: PropTypes.string
};

export default MovieListItem;
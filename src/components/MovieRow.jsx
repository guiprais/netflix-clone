import React from 'react';
import PropTypes from 'prop-types';
import './MovieRow.css';

const MovieRow = ({ title, items }) => (
  <div>
    <h2>{title}</h2>
    <div className="movieRow--listarea">
      {items.results.length > 0 && items.results
        .map(({ original_title: originalTitle, poster_path: posterPath }) => (
          <img src={`https://image.tmdb.org/t/p/w300${posterPath}`} alt={originalTitle} />
        ))}
    </div>
  </div>
);

MovieRow.propTypes = {
  title: PropTypes.string,
}.isRequired;

export default MovieRow;

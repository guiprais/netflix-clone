import React from 'react';
import './MovieRow.css';
import PropTypes from 'prop-types';

const MovieRow = ({ title, items }) => (
  <div className="movieRow">
    <h2>{title}</h2>
    <div className="movieRow--listarea">
      <div className="movieRow--list">
        {items.results.length > 0 && items.results
          .map(({ original_title: originalTitle, poster_path: posterPath }) => (
            <div key={originalTitle} className="movieRow--item">
              <img src={`https://image.tmdb.org/t/p/w300${posterPath}`} alt={originalTitle} />
            </div>
          ))}
      </div>

    </div>
  </div>
);

MovieRow.propTypes = {
  title: PropTypes.string,
}.isRequired;

export default MovieRow;
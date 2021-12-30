import React, { useState } from 'react';
import './MovieRow.css';
import PropTypes from 'prop-types';

import { NavigateBefore, NavigateNext } from '@material-ui/icons';

const MovieRow = ({ title, items }) => {
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);

    if (x > 0) {
      x = 0;
    }

    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    const listW = items.results.length * 150;

    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }

    setScrollX(x);
  };

  return (
    <div className="movieRow">
      <h2>{title}</h2>

      <button type="button" className="movieRow--left" onClick={handleLeftArrow}>
        <NavigateBefore style={{ fontSize: 50 }} />
      </button>

      <button type="button" className="movieRow--right" onClick={handleRightArrow}>
        <NavigateNext style={{ fontSize: 50 }} />
      </button>

      <div className="movieRow--listarea">
        <div className="movieRow--list" style={{ marginLeft: scrollX, width: items.results.length * 150 }}>
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
};
MovieRow.propTypes = {
  title: PropTypes.string,
}.isRequired;

export default MovieRow;

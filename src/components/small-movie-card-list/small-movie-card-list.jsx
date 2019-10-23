import React from 'react';
import PropTypes from 'prop-types';

import {SmallMovieCard} from '../small-movie-card/small-movie-card.jsx';

export const SmallMovieCardList = (props) => {

  const {films, onMovieOver} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((it) => <SmallMovieCard
        key={it.id}
        movie={it}
        onMovie={onMovieOver}
      />)}
    </div>
  );
};


SmallMovieCardList.propTypes = {
  films: PropTypes.array.isRequired,
  onMovieOver: PropTypes.func,
};

import React from 'react';
import PropTypes from 'prop-types';

export const SmallMovieCard = (props) => {

  const {movie, onMovie} = props;
  const {name, posterImage} = movie;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={() => onMovie(movie)}
    >
      <div className="small-movie-card__image">
        <img src={posterImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="movie-page.html"
        >
          {name}
        </a>
      </h3>
    </article>
  );
};


SmallMovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  onMovie: PropTypes.func,
};

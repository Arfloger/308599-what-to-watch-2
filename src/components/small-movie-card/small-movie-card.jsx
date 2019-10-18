import React from 'react';
import PropTypes from 'prop-types';

const onMovieTitleClick = (e) => {
  e.preventDefault();
  // console.log(`Click`);
};

export const SmallMovieCard = (props) => {
  const {title} = props;

  return <article className="small-movie-card catalog__movies-card">
    <div className="small-movie-card__image">
      <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="{title}" width="280" height="175" />
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="movie-page.html" onClick={onMovieTitleClick}>{title}</a>
    </h3>
  </article>;
};


SmallMovieCard.propTypes = {
  title: PropTypes.string.isRequired,
};

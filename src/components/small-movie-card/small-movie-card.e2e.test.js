import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {SmallMovieCard} from "./small-movie-card.jsx";
import {films} from "../../mocks/film";

Enzyme.configure({adapter: new Adapter()});

it(`SmallMovieCard is correctly`, () => {
  const film = films[0];
  const mouseHoverHandler = jest.fn();
  const smallMovieCard = shallow(<SmallMovieCard
    movie={film}
    onMovie={mouseHoverHandler}
  />);

  const movieCard = smallMovieCard.find(`.small-movie-card`);
  movieCard.simulate(`mouseOver`);

  expect(mouseHoverHandler).toHaveBeenCalledTimes(1);
  expect(mouseHoverHandler).toHaveBeenCalledWith(film);
});

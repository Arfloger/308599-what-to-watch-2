import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {SmallMovieCard} from "./small-movie-card.jsx";
import {films} from "../../mocks/film";

Enzyme.configure({adapter: new Adapter()});

it(`SmallMovieCard is correctly`, () => {
  const film = films[0];
  const mouseOverHandler = jest.fn();
  const smallMovieCard = shallow(<SmallMovieCard
    movie={film}
    onMovie={mouseOverHandler}
  />);

  const movieCard = smallMovieCard.find(`.small-movie-card`);
  movieCard.simulate(`mouseOver`);

  expect(mouseOverHandler).toHaveBeenCalledTimes(1);
  expect(mouseOverHandler).toHaveBeenCalledWith(film);
});

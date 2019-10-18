import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {SmallMovieCard} from "./small-movie-card.jsx";

Enzyme.configure({adapter: new Adapter()});

it(`SmallMovieCard is correctly`, () => {
  const preventDefault = jest.fn();
  const clickHandler = jest.fn();
  const smallMovieCard = shallow(<SmallMovieCard
    title = {``}
    onClick = {clickHandler}
  />);

  const movieLink = smallMovieCard.find(`.small-movie-card__link`);
  movieLink.simulate(`click`, {preventDefault});

  expect(preventDefault).toHaveBeenCalledTimes(1);
});

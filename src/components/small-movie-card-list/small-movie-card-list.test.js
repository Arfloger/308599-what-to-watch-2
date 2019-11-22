import React from "react";
import renderer from "react-test-renderer";

import {SmallMovieCardList} from "./small-movie-card-list";

it(`GenresList correctly renders after relaunch`, () => {
  const tree = renderer
    .create(
        <SmallMovieCardList
          films={[]}
          loadFilms={() => {}}
        />).toJSON();

  expect(tree).toMatchSnapshot();
});

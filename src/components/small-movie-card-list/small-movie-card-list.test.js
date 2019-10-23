import React from "react";
import renderer from "react-test-renderer";

import {SmallMovieCardList} from "./small-movie-card-list.jsx";

it(`SmallMovieCardList correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<SmallMovieCardList
      films={[]}
      onMovieOver={() => {}}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

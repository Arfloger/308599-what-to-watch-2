import React from "react";
import renderer from "react-test-renderer";

import {SmallMovieCard} from "./small-movie-card.jsx";

it(`SmallMovieCard correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<SmallMovieCard
      title = {`Fantastic Beasts`}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

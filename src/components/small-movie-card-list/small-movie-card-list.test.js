import React from "react";
import renderer from "react-test-renderer";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from "../../reduser/reducer";

import SmallMovieCardList from "./small-movie-card-list.jsx";

it(`SmallMovieCardList correctly renders after relaunch`, () => {
  const store = createStore(reducer);
  const tree = renderer.create(<Provider store={store}>
    <SmallMovieCardList films={[]}/></Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});

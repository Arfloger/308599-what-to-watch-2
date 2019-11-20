import React from "react";
import renderer from "react-test-renderer";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from "../../reduser/reducer";

import App from "./app.jsx";

it(`App correctly renders after relaunch`, () => {
  const store = createStore(reducer);
  const tree = renderer
    .create(<Provider store={store}><App
      cards={[]}
    /></Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});

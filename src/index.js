import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './components/app/app.jsx';
import {movieTitles} from './mock';

const init = () => {
  ReactDOM.render(
      <App
        movieTitles = {movieTitles}
      />,
      document.querySelector(`#root`)
  );
};

init();

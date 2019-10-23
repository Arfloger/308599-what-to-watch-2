import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';
import {films} from './mocks/film';

const init = () => {
  ReactDOM.render(
      <App
        cards={films}
      />,
      document.querySelector(`#root`)
  );
};

init();

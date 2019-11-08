import {createStore} from 'redux';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';
import {reducer} from './reducer';
import {films} from './mocks/film';

const init = () => {
  const store = createStore(reducer);

  ReactDOM.render(
      <Provider store={store}>
        <App
          cards={films}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();

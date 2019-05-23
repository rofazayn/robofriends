import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';

// Redux reducer
import { search } from './reducers';

import * as serviceWorker from './serviceWorker';

// Initiate the logger
const logger = createLogger();

// Initialize the store
const store = createStore(search, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

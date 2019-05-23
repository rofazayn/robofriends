import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

// Redux
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

// Redux reducer
import { search, requestRobots } from './reducers';

import * as serviceWorker from './serviceWorker';

// Initiate the logger
const logger = createLogger();

// Combine the reducers
const rootReducer = combineReducers({ search, requestRobots });

// Initialize the store
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

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

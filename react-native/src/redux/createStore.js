import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { composeWithDevTools } from 'remote-redux-devtools';

import { middleware as navigationMiddleware } from '../modules/Navigation/Navigation.container';

import rootReducer from './reducers';

const middleware = [thunk, promiseMiddleware(), navigationMiddleware];

const composeEnhancers = composeWithDevTools({
  realtime: true,
  name: 'lol',
});

const enhancers = composeEnhancers(applyMiddleware(...middleware));

export default (initialValue = {}) => {
  const store = createStore(rootReducer, initialValue, composeEnhancers(...enhancers));

  return { store };
};

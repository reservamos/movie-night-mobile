/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';

function createAndConfigureStore (preloadedState = {}) {
  const middlewares = [thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === undefined) {
    return createStore(rootReducer, preloadedState, middlewareEnhancer);
  }
  return createStore(
    rootReducer,
    preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(middlewareEnhancer),
  );
}

export default createAndConfigureStore();

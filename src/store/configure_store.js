import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';

import createReducer from './reducer';

function configureStore(preloadState) {
  const store = createStore(
    createReducer(),
    preloadState,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ),
  );

  return store;
}

export default configureStore;

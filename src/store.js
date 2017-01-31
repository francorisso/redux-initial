/* global window */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import reducers from './reducers';

const devToolsExtension = window && window.devToolsExtension && window.devToolsExtension();
const enhancers = [
  applyMiddleware(thunk),
  devToolsExtension,
].filter(func => !!func);

const store = createStore(
  combineReducers({
    ...reducers,
    form: formReducer,
    routing: routerReducer,
  }),
  {},
  compose(...enhancers)
);

export default store;

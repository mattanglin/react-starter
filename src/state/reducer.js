// Root Redux Reducer
import { combineReducers } from 'redux';

import app from './app';
import people from './swapi/people';

export default (reducers) => combineReducers({
  ...reducers,
  // Other Reducers here
  app,
  swapi: combineReducers({
    people,
  }),
});

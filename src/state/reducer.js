// Root Redux Reducer
import { combineReducers } from 'redux';

import app from './app';

export default reducers => combineReducers({
  ...reducers,
  // Other Reducers here
  app,
});

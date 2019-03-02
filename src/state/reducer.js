// Root Redux Reducer
import { combineReducers } from 'redux';

export default reducers => combineReducers({
  ...reducers,
  // Other Reducers here
});

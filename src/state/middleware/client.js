export default (client) => (({ dispatch, getState }) => (next) => (action) => {
  // Handle regular thunks
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }

  // Extract client thunk params
  const { thunk, types, ...rest } = action;

  if (!thunk) {
    return next(action);
  }

  // Get client action types
  const [REQUEST, SUCCESS, FAILURE] = types;

  next({ ...rest, type: REQUEST });

  // Fire and handle thunk
  return thunk(client, dispatch, getState)
    .then(
      (result) => next({ ...rest, payload: result.data, type: SUCCESS }),
      (error) => next({ ...rest, error, type: FAILURE })
    ).catch((error) => {
      console.error('CLIENT MIDDLEWARE ERROR:', error);
      next({ ...rest, error, type: FAILURE });
    });
});

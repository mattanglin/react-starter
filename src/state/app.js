// CONSTANTS
export const SOMETHING_ASYNC_REQUEST = 'app/SOMETHING_ASYNC_REQUEST';
export const SOMETHING_ASYNC_SUCCESS = 'app/SOMETHING_ASYNC_SUCCESS';

// ACTION CREATORS

export const fetchSomethingAsync = () => (dispatch) => {
  dispatch({ type: SOMETHING_ASYNC_REQUEST });
  const timeout = 2500;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(timeout);
      dispatch({
        type: SOMETHING_ASYNC_SUCCESS,
        payload: timeout,
      });
    }, timeout);
  });
};

// REDUCER
export const initialState = {
  loading: false,
  value: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SOMETHING_ASYNC_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SOMETHING_ASYNC_SUCCESS:
      return {
        ...state,
        loading: false,
        value: action.payload,
      };
    default:
      return state;
  }
};

// SELECTORS
export const getLoading = state => state.app.loading;
export const getValue = state => state.app.value;

export default reducer;

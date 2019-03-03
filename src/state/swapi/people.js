// Example reducer for external api data
import { createSelector } from 'reselect';

// CONSTANTS
export const FETCH_REQUEST = 'swapi/people/FETCH_REQUEST';
export const FETCH_SUCCESS = 'swapi/people/FETCH_SUCCESS';
export const FETCH_FAILURE = 'swapi/people/FETCH_FAILURE';

// ACTIONS
export const fetchPeople = () => ({
  types: [FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE],
  thunk: (client) => client.get('/people', { api: 'swapi' }),
});

// REDUCER
const initialState = {
  fetching: false,
  people: {},
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        people: action.payload.results,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        fetching: false,
      };
    default:
      return state;
  }
};

// SELECTORS
const getFetching = (state) => state.swapi.people.fetching;
const getPeopleObject = (state) => state.swapi.people.people;
const getPeople = createSelector(
  getPeopleObject,
  (people) => Object.values(people)
);

// EXPORT
export const actions = {
  fetchPeople,
};
export const selectors = {
  getFetching,
  getPeopleObject,
  getPeople,
};

export default reducer;
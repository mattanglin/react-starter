// routesMap
import { fetchSomethingAsync } from 'state/app';
import { fetchPeople } from 'state/swapi/people';

const routes = {
  HOME: {
    path: '/',
  },
  PAGE_2: {
    path: '/page2',
  },
  PAGE_3: {
    path: '/page3',
    thunk: fetchSomethingAsync(),
  },
  SWAPI_PEOPLE: {
    path: '/star-wars/people',
    thunk: (dispatch) => dispatch(fetchPeople()),
  },
};

// Route Actions
export const home = () => ({ type: 'HOME' });
export const page2 = () => ({ type: 'PAGE_2' });
export const page3 = () => ({ type: 'PAGE_3' });
export const swapiPeople = () => ({ type: 'SWAPI_PEOPLE' });

export default routes;

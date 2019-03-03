import {
  createStore as _createStore,
  applyMiddleware,
  compose,
} from 'redux';
import { connectRoutes } from 'redux-first-router';
import restoreScroll from 'redux-first-router-restore-scroll';
import routes from 'pages/routes';
import thunk from 'redux-thunk';
import clientMiddleware from './middleware/client';
import reducer from './reducer';

const createStore = (data, client, initialEntries) => {
  const {
    enhancer: routeEnhancer,
    middleware: routerMiddleware,
    reducer: location,
    thunk: routeThunk,
  } = connectRoutes(routes, { restoreScroll: restoreScroll(), initialEntries });

  const middleware = [
    routerMiddleware,
    clientMiddleware(client),
    thunk,
  ];
  let enhancers;

  if (__DEVELOPMENT__ && __CLIENT__ && __DEVTOOLS__) {
    const emptyFn = fn => fn;

    if (!window.__REDUX_DEVTOOLS_EXTENSION__) {
      console.debug('Download the Redux DevTools for a better development experience: https://goo.gl/q064GV');
    }

    enhancers = compose(
      routeEnhancer,
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : emptyFn,
    );
  } else {
    enhancers = compose(
      routeEnhancer,
      applyMiddleware(...middleware)
    );
  }

  const store = _createStore(reducer({ location }), data, enhancers);

  if (__DEVELOPMENT__ && module.hot) {
    module.hot.accept('./reducer', () => {
      // eslint-disable-next-line
      const UpdatedReducers = require('./reducer').default;

      store.replaceReducer(UpdatedReducers({ location }));
    });
  }

  return {
    store,
    thunk: routeThunk,
  }
};

export default createStore;

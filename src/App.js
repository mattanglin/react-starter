import React from 'react';
import { hot } from 'react-hot-loader/root';
import { NOT_FOUND } from 'redux-first-router';

// Routing
import { NavBar, RouteSwitch } from 'components';
import Home from 'pages/Home/Home';
import Page2 from 'pages/Page2/Page2';
import Page3 from 'pages/Page3/Page3';

const App = () => (
  <div>
    <NavBar />
    <RouteSwitch
      routes={{
        HOME: Home,
        PAGE_2: Page2,
        PAGE_3: Page3,
        [NOT_FOUND]: 'Not Found! 404\'d!',
      }}
    />
  </div>
);

export default hot(App);

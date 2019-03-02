import React from 'react';
import { hot } from 'react-hot-loader/root';
import { NOT_FOUND } from 'redux-first-router';
import { ThemeProvider } from 'emotion-theming';

// Routing
import { NavBar, RouteSwitch } from 'components';
import Home from 'pages/Home/Home';
import Page2 from 'pages/Page2/Page2';
import Page3 from 'pages/Page3/Page3';
import NotFound from 'pages/NotFound/NotFound';

const theme = {
  palette: {
    primary: 'DodgerBlue',
    primaryOffset: '#fff',
  },
};

const App = () => (
  <ThemeProvider theme={theme}>
    <div>
      <NavBar />
      <RouteSwitch
        routes={{
          HOME: Home,
          PAGE_2: Page2,
          PAGE_3: Page3,
          [NOT_FOUND]: NotFound,
        }}
      />
    </div>
  </ThemeProvider>
);

export default hot(App);

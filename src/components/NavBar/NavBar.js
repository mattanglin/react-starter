import React from 'react';
import { NavLink } from 'redux-first-router-link';
import { home, page2, page3, swapiPeople } from 'pages/routes';

const NavBar = () => (
  <div>
    <div>
      React Starter
    </div>
    <div>
      <NavLink to={home()} data-testid="home">Home</NavLink>
      <NavLink to={page2()} data-testid="page2">Page 2</NavLink>
      <NavLink to={page3()} data-testid="page3">Page 3</NavLink>
      <NavLink to={swapiPeople()} data-testid="starWars">StarWars People</NavLink>
    </div>
  </div>
);

export default NavBar;

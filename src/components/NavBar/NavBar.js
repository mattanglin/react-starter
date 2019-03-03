import React from 'react';
import { NavLink } from 'redux-first-router-link';
import { home, page2, page3, swapiPeople } from 'pages/routes';

const NavBar = () => (
  <div>
    <div>
      React Starter
    </div>
    <div>
      <NavLink to={home()}>Home</NavLink>
      <NavLink to={page2()}>Page 2</NavLink>
      <NavLink to={page3()}>Page 3</NavLink>
      <NavLink to={swapiPeople()}>StarWars People</NavLink>
    </div>
  </div>
);

export default NavBar;

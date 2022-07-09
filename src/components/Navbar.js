import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <div>
    <h2>Bookstore CMS</h2>
    <ul>
      <li>
        <NavLink to="/">Books</NavLink>
      </li>
      <li>
        <NavLink to="/categories">Categories</NavLink>
      </li>
    </ul>
  </div>

);

export default NavBar;

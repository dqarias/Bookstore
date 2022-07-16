import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';

const NavBar = () => (
  <div className="navbar">
    <div className="navbar__navigation">
      <h2 className="navbar__logo">Bookstore CMS</h2>
      <ul className="navbar__container">
        <li>
          <NavLink to="/">Books</NavLink>
        </li>
        <li>
          <NavLink to="/categories">Categories</NavLink>
        </li>
      </ul>
    </div>
    <div className="navbar__profile">
      <BsPersonCircle style={{ color: '#0290ff', fontSize: '20px', marginTop: '2px' }} />
    </div>

  </div>

);

export default NavBar;

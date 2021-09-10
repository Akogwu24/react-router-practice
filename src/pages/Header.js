import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h1>React Router Tutoral</h1>
      <ul>
        <li>
          <NavLink activeStyle={{ textDecoration: 'none' }} to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink to='/profile'>Profile</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.sass';

const Nav = () => (
  <div className="nav">
    <Link to="/">Home</Link>
    <Link to="/form">Form</Link>
    <Link to="/admin">Admin Page</Link>
  </div>
);

export default Nav;

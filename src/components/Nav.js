import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div>
    <Link to="/" style={{ marginRight: '1em' }}>
      Home
    </Link>
    <Link to="/profile/2" style={{ marginRight: '1em' }}>
      Profile 2
    </Link>
    <Link to="/admin">Admin Page</Link>
  </div>
);

export default Nav;

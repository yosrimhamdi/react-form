import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div>
    <Link to="/" style={{ marginRight: '1em' }}>
      Home
    </Link>
    <Link to="/admin" style={{ marginRight: '1em' }}>
      Admin Page
    </Link>
    <Link to="/admin">Profile 2</Link>
  </div>
);

export default Nav;

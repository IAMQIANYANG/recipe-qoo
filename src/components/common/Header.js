import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="signup">Sign Up/Log In</Link>
      {" | "}
      <Link to="/recipes/new"> Add New </Link>
    </nav>
  )
};

export default Header
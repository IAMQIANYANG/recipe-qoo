import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav className="nav navbar">
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="signup">Sign Up/Log In</Link>
      {" | "}
      <Link to="/recipes/new"> Add New </Link>
      {" | "}
      <Link to="/recipes/new"> My Account </Link>
    </nav>
  )
};

export default Header
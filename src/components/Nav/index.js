import React from "react";
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Home

        {/* Andy's Project List
        <Link to="/about"></Link>
        <li>About</li>
        <Link to="https://justinmarchi.github.io/SHOWS-and-Tell.github.io/"></Link>
        <li>Shows-n-Tell</li>
        <li></li> */}
      </a>

      <a href="/About">About</a>
    </nav>
  );
}

export default Nav;

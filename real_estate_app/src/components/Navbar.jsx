import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <h1>Property</h1>
        <h3>Pulse</h3>
      </div>
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/dispprop">Property</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Signup</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

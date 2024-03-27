import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const activeStyle = {
    color: "red",
  };

  return (
    <div>
      <header>
        <NavLink className="site-logo" to="/">
          #VanLife
        </NavLink>
        <nav>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            to="/host"
          >
            Host
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            to="/vans"
          >
            Vans
          </NavLink>
        </nav>
      </header>
    </div>
  );
}

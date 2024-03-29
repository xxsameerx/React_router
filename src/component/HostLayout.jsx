import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function HostLayout() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "blue",
  };
  return (
    <>
      <header>
        <nav>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            to="/host"
            end
          >
            Dashboard
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            to="income"
            end
          >
            Income
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            to="hostvan"
          >
            Vans
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            to="reviews"
          >
            Reviews
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

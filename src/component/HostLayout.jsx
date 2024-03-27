import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function HostLayout() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/host">Dashboard</NavLink>
          <NavLink to="/host/income">Income</NavLink>
          <NavLink to="/host/reviews">Reviews</NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

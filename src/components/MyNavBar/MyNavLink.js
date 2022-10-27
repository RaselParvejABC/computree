import React from "react";
import { NavLink } from "react-router-dom";

const MyNavLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "outline-1 outline-gray-900" : undefined
      }
    >
      {children}
    </NavLink>
  );
};

export default MyNavLink;

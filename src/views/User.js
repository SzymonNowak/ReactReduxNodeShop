import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../routes/index";

const User = () => {
  return (
    <div>
      <NavLink to={routes.register}> Register </NavLink>
      <NavLink to={routes.login}> Login </NavLink>
    </div>
  );
};

export default User;

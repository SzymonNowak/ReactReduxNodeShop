import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../routes/index";

const Admin = () => {
  return (
    <div>
      <NavLink to={routes.addNewProduct}> Add New Product </NavLink>
    </div>
  );
};

export default Admin;

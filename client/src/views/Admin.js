import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../routes/index";

const Admin = () => {
  return (
    <div>
      <p>
        <NavLink to={routes.addNewProduct}> Add New Product </NavLink>
      </p>
      <p>
        <NavLink to={routes.editProduct}> Edit Product </NavLink>
      </p>
    </div>
  );
};

export default Admin;

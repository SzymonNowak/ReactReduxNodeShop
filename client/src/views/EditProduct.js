import React from "react";
import styled from "styled-components";
import { compose } from "redux";
import { connect } from "react-redux";
import ColumnBody from "../components/atoms/ColumnBody/ColumnBody";
import ColumnHeader from "../components/atoms/ColumnHeader/ColumnHeader";
import { NavLink } from "react-router-dom";
import { routes } from "../routes/index";
const MainWrapper = styled.div``;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const EditProduct = ({ burgers, tortillas, addons, beverages, match }) => {};

export default EditProduct;

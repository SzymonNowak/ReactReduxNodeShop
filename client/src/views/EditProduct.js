import React from "react";
import styled from "styled-components";
import { compose } from "redux";
import { connect } from "react-redux";
import ColumnBody from "../components/atoms/ColumnBody/ColumnBody";
import ColumnHeader from "../components/atoms/ColumnHeader/ColumnHeader";
import LongButton from "../components/atoms/LongButton/LongButton";
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
const StyledLongButton = styled(LongButton)`
  color: orange;
  border-color: orange;
  margin-top: 15px;
  margin-bottom: 20px;
`;

const EditProduct = ({ burgers, tortillas, addons, beverages, match }) => {
  return (
    <MainWrapper>
      <Wrapper>
        <ColumnHeader>product name:</ColumnHeader>
        <ColumnHeader>product price:</ColumnHeader>
        <ColumnHeader>sauce :</ColumnHeader>
        <ColumnHeader>edit :</ColumnHeader>
      </Wrapper>
      <h3>Burgers:</h3>
      {burgers.map((item, index) => (
        <Wrapper key={item.id}>
          <ColumnBody>
            <h4>{item.productName}</h4>
          </ColumnBody>
          <ColumnBody>
            <h4>{item.productPrice}</h4>
          </ColumnBody>
          <ColumnBody>
            <h4>{item.sauce}</h4>
          </ColumnBody>
          <ColumnBody>
            <NavLink to={""}>
              <StyledLongButton>Edit</StyledLongButton>
            </NavLink>
          </ColumnBody>
        </Wrapper>
      ))}
      <h3>Tortillas:</h3>
      {tortillas.map((item, index) => (
        <Wrapper key={item.id}>
          <ColumnBody>
            <h4>{item.productName}</h4>
          </ColumnBody>
          <ColumnBody>
            <h4>{item.productPrice}</h4>
          </ColumnBody>
          <ColumnBody>
            <h4>{item.sauce}</h4>
          </ColumnBody>
          <ColumnBody>
            <NavLink to={""}>
              <StyledLongButton>Edit</StyledLongButton>
            </NavLink>
          </ColumnBody>
        </Wrapper>
      ))}
      <h3>Addons:</h3>
      {addons.map((item, index) => (
        <Wrapper key={item.id}>
          <ColumnBody>
            <h4>{item.productName}</h4>
          </ColumnBody>
          <ColumnBody>
            <h4>{item.productPrice}</h4>
          </ColumnBody>
          <ColumnBody>
            <h4>{item.sauce}</h4>
          </ColumnBody>
          <ColumnBody>
            <NavLink to={""}>
              <StyledLongButton>Edit</StyledLongButton>
            </NavLink>
          </ColumnBody>
        </Wrapper>
      ))}
      <h3>beverages:</h3>
      {beverages.map((item, index) => (
        <Wrapper key={item.id}>
          <ColumnBody>
            <h4>{item.productName}</h4>
          </ColumnBody>
          <ColumnBody>
            <h4>{item.productPrice}</h4>
          </ColumnBody>
          <ColumnBody>
            <h4>{item.sauce}</h4>
          </ColumnBody>
          <ColumnBody>
            <NavLink to={""}>
              <StyledLongButton>Edit</StyledLongButton>
            </NavLink>
          </ColumnBody>
        </Wrapper>
      ))}
    </MainWrapper>
  );
};

export default EditProduct;

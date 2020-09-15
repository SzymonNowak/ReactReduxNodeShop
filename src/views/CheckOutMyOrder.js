import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { routes } from "../routes/index";
import LongButton from "../components/atoms/LongButton/LongButton";
const StyledLink = styled(NavLink)`
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  position: relative;
  color: black !important;
  &:visited {
    color: black;
  }
  &:hover {
    color: #fd79a8 !important;
  }
  &.active {
    color: ${({ theme }) => theme.orange};
  }
`;
const CheckOutMyOrder = ({ productsInCart }) => {
  return (
    <div>
      <p>your order:</p>
      {productsInCart.map((item) => (
        <>
          <h2>burger:</h2>
          <p>{item.tittle}</p>
          <p>{item.price}</p>
        </>
      ))}
      <LongButton>
        <StyledLink to={routes.addresForm}>Go next</StyledLink>
      </LongButton>
    </div>
  );
};

const mapeStateToProps = ({ ShopingCartReducer }) => {
  return {
    productsInCart: ShopingCartReducer.productsInCart,
  };
};

export default connect(mapeStateToProps)(CheckOutMyOrder);

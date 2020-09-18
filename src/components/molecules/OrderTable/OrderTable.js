import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import LongButton from "../../atoms/LongButton/LongButton";
import { routes } from "../../../routes/index";
import StyledLink from "../../atoms/StyledLink/StyledLink";
import ColumnBody from "../../atoms/ColumnBody/ColumnBody";
import ColumnHeader from "../../atoms/ColumnHeader/ColumnHeader";
import { removeItemFromCart as removeItemFromCartAction } from "../../../actions/removeItemFromCart";

const MainWrapper = styled.div``;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const DeliveryInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 40px;
`;

const StyledLongButton = styled(LongButton)`
  display: block;
`;

const OrderTable = ({ productsInCart, removeItemFromCart }) => {
  console.log(productsInCart);
  const [currentPrice, setCurrentPrice] = useState(0);
  let currentValue = 0;
  const total = () => {
    productsInCart.map((item) => {
      return (currentValue = currentValue + Number(item.price));
    });
    setCurrentPrice(currentValue + 6);
  };

  useEffect(() => {
    total();
  });

  return (
    <MainWrapper>
      <Wrapper>
        <ColumnHeader>product name:</ColumnHeader>
        <ColumnHeader>product price:</ColumnHeader>
        <ColumnHeader>descrption :</ColumnHeader>
        <ColumnHeader>edit :</ColumnHeader>
      </Wrapper>
      <Wrapper>
        <ColumnBody>
          {productsInCart.map((item) => (
            <>
              <h4>{item.tittle}</h4>
            </>
          ))}
        </ColumnBody>
        <ColumnBody>
          {productsInCart.map((item) => (
            <>
              <h4>{item.price}</h4>
            </>
          ))}
        </ColumnBody>
        <ColumnBody>
          {productsInCart.map((item) => (
            <>
              <h4>{item.sauce}</h4>
            </>
          ))}
        </ColumnBody>
        <ColumnBody>
          {productsInCart.map((item) => (
            <>
              <LongButton onClick={() => removeItemFromCart(item.id)}>
                DELETE
              </LongButton>
            </>
          ))}
        </ColumnBody>
      </Wrapper>
      <DeliveryInfoWrapper>
        <h3>delivery cost : 6zl</h3>
        <h3>Total cost : {currentPrice}</h3>
        <StyledLink to={routes.addresForm}>
          <StyledLongButton>Next step</StyledLongButton>
        </StyledLink>
      </DeliveryInfoWrapper>
    </MainWrapper>
  );
};

const mapeStateToProps = ({ ShopingCartReducer }) => {
  return {
    productsInCart: ShopingCartReducer.productsInCart,
  };
};
const mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (item) => dispatch(removeItemFromCartAction(item)),
});

export default connect(mapeStateToProps, mapDispatchToProps)(OrderTable);

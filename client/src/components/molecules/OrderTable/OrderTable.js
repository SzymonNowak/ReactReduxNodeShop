import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

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

const OrderTable = ({ productsInCart, removeItemFromCart }) => {
  const shipingPrice = 6;
  const [currentPrice, setCurrentPrice] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const total = () => {
    const totalPrice = productsInCart.reduce((prev, current) => {
      return prev + current.price;
    }, shipingPrice);
    setCurrentPrice(totalPrice);
  };

  useEffect(() => {
    total();

    // console.log(
    //   productsInCart.flatMap((product) => [
    //     {
    //       productId: product.id,
    //       products: productsInCart.filter(
    //         (productt) => productt.id == product.id
    //       ),
    //     },
    //   ]),
    //  {})
  });

  //   return (
  //     <MainWrapper>
  //       <Wrapper>
  //         <ColumnHeader>product name:</ColumnHeader>
  //         <ColumnHeader>product price:</ColumnHeader>
  //         <ColumnHeader>sauce :</ColumnHeader>
  //         <ColumnHeader>edit :</ColumnHeader>
  //       </Wrapper>
  //       {productsInCart.map((item, index) => (
  //         <Wrapper>
  //           <ColumnBody>
  //             <h4>{item.name}</h4>
  //           </ColumnBody>
  //           <ColumnBody>
  //             <h4>{item.price}</h4>
  //           </ColumnBody>
  //           <ColumnBody>
  //             <h4>{item.sauce}</h4>
  //           </ColumnBody>
  //           <ColumnBody>
  //             <StyledLongButton onClick={() => removeItemFromCart(index)}>
  //               REMOVE
  //             </StyledLongButton>
  //           </ColumnBody>
  //         </Wrapper>
  //       ))}
  //       <DeliveryInfoWrapper>
  //         <h3>delivery cost : 6zl</h3>
  //         <h3>Total cost : {currentPrice}zl</h3>
  //         <StyledLink to={routes.addresForm}>
  //           <StyledOrderLongButton>Next Step</StyledOrderLongButton>
  //         </StyledLink>
  //       </DeliveryInfoWrapper>
  //     </MainWrapper>
  //   );
  // };
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

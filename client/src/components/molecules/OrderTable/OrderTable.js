import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector, connect } from "react-redux";
import { routes } from "../../../routes/index";
import { removeItemFromCart as removeItemFromCartAction } from "../../../actions/removeItemFromCart";
import { FaTrash } from "react-icons/fa";
const OrderTable = ({ productsInCart, removeItemFromCart }) => {
  const shipingPrice = 6;
  const [currentPrice, setCurrentPrice] = useState(0);
  const cart = useSelector((state) => state.ShopingCartReducer.productsInCart);
  const dispatch = useDispatch();

  const total = () => {
    const totalPrice = cart.reduce((prev, current) => {
      return prev + current.price;
    }, shipingPrice);
    setCurrentPrice(totalPrice);
  };

  useEffect(() => {
    total();
    console.log(cart);
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
  const TableWrapper = styled.div`
    justify-content: space-between;
    margin-top: 60px;
    margin-bottom: 40px;
    margin-left: 100px;
    width: 80%;
  `;
  const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 20px;
    border-bottom: 1px solid black;
  `;
  const Head = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 70px;
  `;
  const Photo = styled.img`
    width: 120px;
    margin-top: 10px;
    margin-bottom: 10px;
  `;

  return (
    <>
      {cart.length > 0 && (
        <TableWrapper>
          <Head>
            <h3>Photo</h3>
            <h3>Name</h3>
            <h3>Price</h3>
            <h3>Remove</h3>
          </Head>
          {cart &&
            cart.map((item, index) => (
              <Row active key={index}>
                <Photo src={item.photo} />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>
                  <FaTrash
                    onClick={() => dispatch(removeItemFromCartAction(index))}
                  />
                </p>
              </Row>
            ))}
        </TableWrapper>
      )}
      {cart.length == 0 && <p>add sth</p>}
    </>
  );
};

export default OrderTable;

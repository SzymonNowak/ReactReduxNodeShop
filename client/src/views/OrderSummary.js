/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
/* eslint-disable no-use-before-define */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../components/atoms/Header/Header";
import { NavLink } from "react-router-dom";
import { routes } from "../routes/index";

const OrderSummary = () => {
  const cart = useSelector((state) => state.ShopingCartReducer.productsInCart);
  const delivery = useSelector((state) => state.DeliverReducer.deliveryInfo);
  const order = {
    products: cart,
    deliveryInfo: delivery,
  };
  console.log(order);

  return (
    <>
      <h1>your adress :</h1>
      <p>Name: {delivery.Name}</p>
      <p>surname: {delivery.SurName}</p>
      <p>phone number: {delivery.PhoneNumber}</p>
      <h1>your cart:</h1>
      {cart.map((item) => (
        <>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </>
      ))}
      <button>Make Order</button>
    </>
  );
};

export default OrderSummary;

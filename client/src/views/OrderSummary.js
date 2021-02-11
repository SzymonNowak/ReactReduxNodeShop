/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
/* eslint-disable no-use-before-define */

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import io from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { makeOrder, saveOrderToRedux } from "../actions/makeOrder";
import { apiRoutes } from "../routes/index";
const OrderSummary = () => {
  const filterByTypeAndCreateIdArray = (tabToFilter) => {
    const idArray = [];
    tabToFilter.map((item) => {
      idArray.push(item.id);
    });
    return idArray;
  };

  let clientId = [];
  let history = useHistory();
  const cart = useSelector((state) => state.ShopingCartReducer.productsInCart);
  const meals = cart.filter((item) => item.type == "meals");
  const addons = cart.filter((item) => item.type == "addons");
  const sauces = cart.filter((item) => item.type == "sauces");
  const beverages = cart.filter((item) => item.type == "beverages");
  const socket = io.connect(apiRoutes.socketConnection);
  const dispatch = useDispatch();
  const mealsIdArray = filterByTypeAndCreateIdArray(meals);
  const addonsIdArray = filterByTypeAndCreateIdArray(addons);
  const saucesIdArray = filterByTypeAndCreateIdArray(sauces);
  const beveragesIdArray = filterByTypeAndCreateIdArray(beverages);
  const delivery = useSelector((state) => state.DeliverReducer.deliveryInfo);

  socket.on("connect", () => {
    console.log("id po connekcie", socket.id);
    clientId.push(socket.id);
  });
  socket.on("saveOrder", (order) => {
    if (order) {
      dispatch(saveOrderToRedux(order));
    }
  });
  socket.on("orderStatus", (data) => {
    console.log(data);
  });

  const order = {
    meals: mealsIdArray,
    addons: addonsIdArray,
    sauces: saucesIdArray,
    beverages: beveragesIdArray,
    deliveryInfo: delivery,
    clientId: clientId,
  };
  const handleClick = () => {
    dispatch(makeOrder(order, socket));
    // history.push("/contact");
  };
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
      <button onClick={handleClick}>Make Order</button>
    </>
  );
};

export default OrderSummary;

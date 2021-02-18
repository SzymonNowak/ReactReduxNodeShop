/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
/* eslint-disable no-use-before-define */

import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { makeOrder, saveOrderToRedux } from "../actions/makeOrder";
import { apiRoutes } from "../routes/index";

const OrderSummary = () => {
  let socket = io.connect(apiRoutes.socketConnection);
  useEffect(() => {
    socket.on("connect", () => {
      clientId.push(socket.id);
    });
  }, [socket]);

  socket.on("saveOrder", (order) => {
    if (order) {
      dispatch(saveOrderToRedux(order));
    }
  });
  socket.on("orderStatus", (data) => {
    setOrderStatus(data);
    changeActivStatus(true);
  });

  const filterByTypeAndCreateIdArray = (tabToFilter) => {
    const idArray = [];
    tabToFilter.map((item) => {
      idArray.push(item.id);
    });
    return idArray;
  };

  let clientId = [];

  const [orderStatus, setOrderStatus] = useState({});
  const [isActive, changeActivStatus] = useState(false);
  const cart = useSelector((state) => state.ShopingCartReducer.productsInCart);
  const meals = cart.filter((item) => item.type == "meals");
  const addons = cart.filter((item) => item.type == "addons");
  const sauces = cart.filter((item) => item.type == "sauces");
  const beverages = cart.filter((item) => item.type == "beverages");
  const dispatch = useDispatch();
  const mealsIdArray = filterByTypeAndCreateIdArray(meals);
  const addonsIdArray = filterByTypeAndCreateIdArray(addons);
  const saucesIdArray = filterByTypeAndCreateIdArray(sauces);
  const beveragesIdArray = filterByTypeAndCreateIdArray(beverages);
  const delivery = useSelector((state) => state.DeliverReducer.deliveryInfo);

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
      {!isActive && (
        <>
          <button onClick={() => handleClick(socket)}>Make Order</button>
        </>
      )}
      {isActive && (
        <>
          <p>time: {orderStatus.time}</p>
          <p>status: {orderStatus.status}</p>
        </>
      )}
    </>
  );
};

export default OrderSummary;

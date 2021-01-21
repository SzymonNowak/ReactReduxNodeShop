/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
/* eslint-disable no-use-before-define */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeOrder } from "../actions/makeOrder";
const OrderSummary = () => {
  const cart = useSelector((state) => state.ShopingCartReducer.productsInCart);
  const meals = cart.filter((item) => item.type == "meals");
  const addons = cart.filter((item) => item.type == "addons");
  const sauces = cart.filter((item) => item.type == "sauces");
  const beverages = cart.filter((item) => item.type == "beverages");
  const filterByTypeAndCreateIdArray = (tabToFilter) => {
    const idArray = [];
    tabToFilter.map((item) => {
      idArray.push(item.id);
    });
    return idArray;
  };
  const mealsIdArray = filterByTypeAndCreateIdArray(meals);
  const addonsIdArray = filterByTypeAndCreateIdArray(addons);
  const saucesIdArray = filterByTypeAndCreateIdArray(sauces);
  const beveragesIdArray = filterByTypeAndCreateIdArray(beverages);
  const delivery = useSelector((state) => state.DeliverReducer.deliveryInfo);
  const dispatch = useDispatch();

  const order = {
    meals: mealsIdArray,
    addons: addonsIdArray,
    sauces: saucesIdArray,
    beverages: beveragesIdArray,
    deliveryInfo: delivery,
  };
  const handleClick = () => {
    dispatch(makeOrder(order));
    console.log(order);
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

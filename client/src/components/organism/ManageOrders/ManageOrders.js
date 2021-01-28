import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getAllNotFinishedOrders } from "../../../actions/makeOrder";

const ManageOrders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.OrderReducer);
  useEffect(() => {
    dispatch(getAllNotFinishedOrders());
  }, [dispatch]);
  return <p>manageOrders</p>;
};

export default ManageOrders;

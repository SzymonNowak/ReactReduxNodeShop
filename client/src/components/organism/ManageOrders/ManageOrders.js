import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import { apiRoutes } from "../../../routes/index";

import {
  getAllNotFinishedOrders,
  finishOrder,
} from "../../../actions/makeOrder";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
  margin-bottom: 20px;
  margin-top: 10px;
`;
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const ManageOrders = () => {
  const [time, setTime] = useState("45");
  const [orderStatus, setOrderStatus] = useState("accept");
  const [clientId, setClientId] = useState("");
  console.log(clientId);

  const dispatch = useDispatch();
  const orders = useSelector((state) => state.OrderReducer);
  const socket = io.connect(apiRoutes.socketConnection);
  const handleSubmit = (e, socketId) => {
    e.preventDefault();
    socket.emit("updateOrderStatus", {
      time,
      orderStatus,
      socketId,
    });
  };

  useEffect(() => {
    dispatch(getAllNotFinishedOrders());
  }, [dispatch]);

  const handleFinishOrder = async (id) => {
    await dispatch(finishOrder(id));
    await dispatch(getAllNotFinishedOrders());
  };

  return (
    <>
      {orders.AllNotFinishedOrders &&
        orders.AllNotFinishedOrders.map((orderArray) =>
          orderArray.map((singleOrder) => {
            return (
              <Wrapper key={singleOrder._id}>
                <p>client id: {singleOrder.clientId[clientId.length - 1]}</p>
                <p>order id:{singleOrder._id} </p>
                <p>socket id:</p>
                <p>
                  adress:{" "}
                  {`${singleOrder.delivery.Street} ${singleOrder.delivery.StreetNumber}`}
                </p>

                <p>pay method:{singleOrder.delivery.payMethod}</p>
                <FormWrapper
                  onSubmit={(e) => handleSubmit(e, singleOrder.clientId[0])}
                >
                  <label for="cars">Choose a delivery time:</label>
                  <select
                    name="deliveryTime"
                    id="deliveryTime"
                    onChange={(e) => setTime(e.target.value)}
                  >
                    <option value="45">45</option>
                    <option value="60">60</option>
                    <option value="75">75</option>
                    <option value="90">90</option>
                    <option value="105">105</option>
                    <option value="120">120</option>
                  </select>
                  <label for="cars">Choose a order status:</label>

                  <select
                    name="deliveryStatus"
                    id="deliveryStatus"
                    onChange={(e) => setOrderStatus(e.target.value)}
                  >
                    <option value="accept">accept</option>
                    <option value="in progress">in progress</option>
                    <option value="in the process of delivery">
                      in the process of delivery
                    </option>
                  </select>
                  <button>accept the order</button>
                </FormWrapper>
                <button onClick={() => handleFinishOrder(singleOrder._id)}>
                  finish the order
                </button>
              </Wrapper>
            );
          })
        )}
    </>
  );
};

export default ManageOrders;

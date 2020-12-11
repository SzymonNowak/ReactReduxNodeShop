import React, { useState, useEffect } from "react";
import styled from "styled-components";
import OrderTable from "../components/molecules/OrderTable/OrderTable";
import ProgressBar from "../components/molecules/ProgressBar/ProgressBar";
import { Header } from "../components/atoms/Header/Header";

const ProgressBarWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  padding-top: 50px;
`;
const StyledHeader = styled(Header)`
  color: ${({ theme }) => theme.colors.black};
  margin-left: ${({ theme }) => theme.margin.l};
  margin-top: ${({ theme }) => theme.margin.l};
`;
const CheckOutMyOrder = () => {
  return (
    <>
      <ProgressBarWrapper>
        <ProgressBar name={"cart"} active />
        <ProgressBar name={"adress"} />
        <ProgressBar name={"Order"} />
      </ProgressBarWrapper>
      <OrderTable />
      {/* {podsumowanie} */}
    </>
  );
};

export default CheckOutMyOrder;

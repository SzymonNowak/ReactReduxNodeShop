import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Header } from "../../atoms/Header/Header";
const StyledHeader = styled(Header)`
  color: ${({ theme }) => theme.colors.lightGrey};

  text-transform: uppercase;
  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.colors.lightBlue};
    `}
`;

const BottomBar = styled.div`
  width: 200px;
  border-bottom: 5px solid ${({ theme }) => theme.colors.lightGrey};
  ${({ active }) =>
    active &&
    css`
      border-bottom: 5px solid ${({ theme }) => theme.colors.lightBlue};
    `}
`;

const ProgressBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100px;
  align-items: center;
`;

const ProgressBar = ({ active, name }) => {
  return (
    <ProgressBarWrapper>
      <StyledHeader active={active}>{name}</StyledHeader>
      <BottomBar active={active}></BottomBar>
    </ProgressBarWrapper>
  );
};

export default ProgressBar;

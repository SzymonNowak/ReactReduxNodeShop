import React from "react";
import styled from "styled-components";

const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const MainGridTemaplate = ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>;
};

export default MainGridTemaplate;

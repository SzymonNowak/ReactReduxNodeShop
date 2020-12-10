import React from "react";
import styled from "styled-components";

const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
`;

const MainGridTemaplate = ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>;
};

export default MainGridTemaplate;

import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const NewProductGridTemplate = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default NewProductGridTemplate;

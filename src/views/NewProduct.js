import React from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { routes } from "../routes/index";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
const Container = styled.div`
  width: 500px;
  height: 200px;
  text-align: center;
`;

const NewProduct = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <NavLink to={routes.newBurger}>
            <p>burgers</p>
          </NavLink>
        </Container>
        <Container>
          <NavLink to={routes.newTortilla}>
            <p>tortilas</p>
          </NavLink>
        </Container>
      </Wrapper>
      <Wrapper>
        <Container>
          <NavLink to={routes.newAddons}>
            <p>addons</p>
          </NavLink>
        </Container>
        <Container>
          <NavLink to={routes.newBeverages}>
            <p>beverages</p>
          </NavLink>
        </Container>
      </Wrapper>
    </>
  );
};

export default NewProduct;

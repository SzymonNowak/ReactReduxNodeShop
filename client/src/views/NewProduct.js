import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { routes } from "../routes/index";
import burgerBackground from "../assets/burgerBackground.jpg";
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  /* flex-direction: column; */
`;
const Container = styled.div`
  width: 500px;
  height: 200px;
  text-align: center;
`;

const StyledImg = styled.img`
  width: 100%;
`;

const NewProduct = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <NavLink to={routes.newMeal}>
            <p>meals</p>
          </NavLink>
        </Container>
        <Container>
          <NavLink to={routes.newSauces}>
            <p>sauces</p>
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

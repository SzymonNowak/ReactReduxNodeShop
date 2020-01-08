import React from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { routes } from "../../../routes/index";

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  justify-content: space-around;
  display: flex;
  box-shadow: 0px 0px 10px #e1e1e1;
  letter-spacing: 1px;
  background-color: white;
  font-size: 17px;
`;

const ListItem = styled.li`
  list-style: none;
  margin-left: 30px;
`;

const StyledLink = styled(NavLink)`
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  position: relative;

  &:visited {
    color: black;
  }
  &:hover {
    color: purple;
  }
  &.active {
    color: blue;
  }
/* 
  ${({ button }) =>
    button &&
    css`
      color: white;
      border: 1px solid #343a40;
      background-color: purple;
      border-radius: 10px;
      width: 180px;
      height: 60px;
      font-size: 10px;
      text-align: center;
      vertical-align: middle;
    `} */
`;

const ListOfNavItem = styled.ul`
  width: 50%;
  height: 95px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
`;

const NavBar = () => {
  return (
    <Nav>
      <UserBoxWrapper>
        <StyledLink to={routes.main}>IDK WH I AM DOING</StyledLink>
      </UserBoxWrapper>
      <ListOfNavItem>
        <ListItem>
          <StyledLink to={routes.cos1}> cos1</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to={routes.cos1}> cos2</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to={routes.cos1}> cos3</StyledLink>
        </ListItem>
      </ListOfNavItem>
    </Nav>
  );
};

export default NavBar;

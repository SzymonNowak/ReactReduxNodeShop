import React from "react";
import styled from "styled-components";
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
        <p>IDK WH I AM DOING</p>
      </UserBoxWrapper>
      <ListOfNavItem>
        <ListItem>
          <StyledLink to={routes.main}> cos1</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to={routes.main}> cos2</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to={routes.main}> cos3</StyledLink>
        </ListItem>
      </ListOfNavItem>
    </Nav>
  );
};

export default NavBar;

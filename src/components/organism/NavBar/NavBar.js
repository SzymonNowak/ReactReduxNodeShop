import React from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { routes } from "../../../routes/index";
import Button from '../../atoms/Button/Button';
import { connect } from "react-redux";
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
  font-size:${({theme}) => theme.fontSize.xxs};
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
    color: #fd79a8;
  }
  &.active {
    color: ${({ theme }) => theme.orange};
  }
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

const NavBar = ({ productsInCart }) => {
  
  console.log(productsInCart);
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
          <StyledLink to={routes.cos2}> cos2</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to={routes.cos3}> cos3</StyledLink>
        </ListItem>
        <ListItem>
          <Button> Rejestracja</Button>
        </ListItem>
        <ListItem>
          <Button>Zaloguj</Button>
        </ListItem>
        <ListItem>
          {/* <p>{productsInCart.lenght}</p> */}
        </ListItem>
      </ListOfNavItem>
    </Nav>
  );
};


const mapeStateToProps = ({ productsInCart }) => ({ productsInCart });

export default connect(mapeStateToProps)(NavBar);

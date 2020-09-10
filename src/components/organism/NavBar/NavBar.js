import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
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
  font-size: ${({ theme }) => theme.fontSize.xxs};
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
        <StyledLink to={routes.main}> Burgermania </StyledLink>
      </UserBoxWrapper>
      <ListOfNavItem>
        <ListItem>
          <StyledLink to={routes.orders}> Order List</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to={routes.admin}> Admin</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to={routes.user}>User</StyledLink>
        </ListItem>

        <ListItem>
          <p>{productsInCart.length}</p>
        </ListItem>
      </ListOfNavItem>
    </Nav>
  );
};

const mapeStateToProps = ({ ShopingCartReducer }) => ({
  productsInCart: ShopingCartReducer.productsInCart,
});

export default connect(mapeStateToProps)(NavBar);

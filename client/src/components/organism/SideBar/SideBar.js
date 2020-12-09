import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { routes } from "../../../routes/index";
import { FaHome } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";

const MainWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 300px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const UserCircle = styled.div`
  width: 210px;
  height: 210px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Header = styled.p`
  margin-top: ${({ theme }) => theme.margin.s};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.l};
`;
const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.margin.xxl};
`;

const StyledSpan = styled.span`
  margin-left: 20px;
`;
const Options = styled.p`
  font-size: 12px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 10px;
  margin-left: 12px;
`;
const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-decoration: none;
  margin-top: 20px;
  font-size: 24px;

  &.active {
    color: ${({ theme }) => theme.colors.lightBlue};
  }
`;

const SideBar = () => {
  return (
    <MainWrapper>
      <UserWrapper>
        <UserCircle />
        <Header>User name</Header>
      </UserWrapper>
      <NavMenu>
        <StyledLink to={routes.main}>
          <FaHome /> <StyledSpan>Home</StyledSpan>
        </StyledLink>

        <StyledLink to={routes.checkOutmyOrder}>
          <FaShoppingCart /> <StyledSpan>Cart</StyledSpan>
        </StyledLink>

        <StyledLink to={routes.contact}>
          <FaPhoneAlt /> <StyledSpan>Contact</StyledSpan>
        </StyledLink>

        <StyledLink to={routes.admin}>
          <FaUserEdit />
          <StyledSpan>Admin</StyledSpan>
        </StyledLink>
        <StyledLink to={routes.addNewProduct}>
          <Options>add products</Options>
        </StyledLink>
        <StyledLink to={routes.editProduct}>
          <Options>edit products</Options>
        </StyledLink>
      </NavMenu>
    </MainWrapper>
  );
};

export default SideBar;

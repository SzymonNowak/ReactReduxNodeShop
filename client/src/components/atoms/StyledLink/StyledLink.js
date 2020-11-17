import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledLink = styled(NavLink)`
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  position: relative;
  color: black !important;
  &:visited {
    color: black;
  }
  &:hover {
    color: #fd79a8 !important;
  }
  &.active {
    color: ${({ theme }) => theme.orange};
  }
`;

export default StyledLink;

import React from "react";
import PropTypes from "prop-types";
import SideBar from "../components/organism/SideBar/SideBar";
import styled from "styled-components";

const Test = styled.div`
  padding-left: 330px;
`;
const MainUserTemaplte = ({ children }) => {
  return (
    <>
      <SideBar />
      <Test>{children}</Test>
    </>
  );
};

MainUserTemaplte.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainUserTemaplte;

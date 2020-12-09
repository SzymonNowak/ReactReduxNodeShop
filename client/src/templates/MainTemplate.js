import React from "react";
import PropTypes from "prop-types";
import SideBar from "../components/organism/SideBar/SideBar";
const MainUserTemaplte = ({ children }) => {
  return (
    <>
      <SideBar />
      {children}
    </>
  );
};

MainUserTemaplte.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainUserTemaplte;

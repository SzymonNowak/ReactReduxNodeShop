import React, { Component } from "react";
import NavBar from "../components/organism/NavBar/NavBar";
import PropTypes from "prop-types";


const MainUserTemaplte = ({children}) => {
  return(
    <>
          <NavBar />
          {children}
      </>
   ) 
}

MainUserTemaplte.propTypes = {
  children: PropTypes.element.isRequired
};


export default MainUserTemaplte;

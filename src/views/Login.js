import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { googleAuth } from "../services/firebase";

const Login = () => {
  useEffect(() => {
    console.log("login");
  }, []);
  return <button onClick={googleAuth}>Login</button>;
};

export default Login;

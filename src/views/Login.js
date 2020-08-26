import React, { useEffect } from "react";

import { googleAuth } from "../services/firebase";

const Login = () => {
  useEffect(() => {
    console.log("login");
  }, []);
  return <button onClick={googleAuth}>Login</button>;
};

export default Login;

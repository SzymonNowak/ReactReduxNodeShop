import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

const Contact = () => {
  const ENDPOINT = "http://localhost:5000";
  const socket = io.connect(ENDPOINT);

  return <p> tel number</p>;
};

export default Contact;

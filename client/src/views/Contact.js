import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

const Contact = () => {
  const [data, setData] = useState("");
  const ENDPOINT = "http://localhost:5000";
  const socket = io.connect(ENDPOINT);
  const handleClick = (e) => {
    e.preventDefault();
    socket.emit("test", {
      message: "it should workd",
    });
  };
  socket.on("test", (data) => {
    setData(data);
  });
  return (
    <>
      <button onClick={handleClick}>emit</button>
      <p>data i send: {data.message}</p>
    </>
  );
};

export default Contact;

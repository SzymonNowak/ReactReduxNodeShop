import React, { useState } from "react";
import Plus from "../assets/plus.svg";
import styled from "styled-components";
import IconButton from "../components/atoms/IconButton/IconButton";
import NewItemBar from "../components/organism/NewItemBar/NewItemBar";

const StyledIconButton = styled(IconButton)`
  position: absolute;
  bottom: 40px;
  right: 50px;
  z-index: 200;
`;

const Main = () => {
  const [isVisible, setVisibility] = useState(false);
  console.log(isVisible);
  return (
    <div>
      <StyledIconButton
        icon={Plus}
        active
        onClick={() => setVisibility(!isVisible)}
      />
      <NewItemBar isVisible={isVisible} />
    </div>
  );
};

export default Main;

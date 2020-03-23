import React, { useState } from "react";
import Plus from "../assets/plus.svg";
import styled from "styled-components";
import IconButton from "../components/atoms/IconButton/IconButton";
import NewItemBar from "../components/organism/NewItemBar/NewItemBar";
import { connect } from 'react-redux';
import Card from '../components/molecules/Card/Card';
const StyledIconButton = styled(IconButton)`
  position: absolute;
  bottom: 40px;
  right: 50px;
  z-index: 200;
`;

const Main = ({products}) => {
  const [isVisible, setVisibility] = useState(false);

  const getData = () => {
    fetch('http://localhost:8080/')
    .then(response => {
      return response.json()
    })
    .then(data => console.log(data) )
  }

  return (
    <div>
      {products.map(({ id, tittle, count, price, description }) => (
        <Card
          id={id}
          tittle={tittle}
          count={count}
          price={price}
          description={description}
          key={id}
        />
      ))}

      <StyledIconButton
        icon={Plus}
        active
        onClick={() => setVisibility(!isVisible)}
      />
      <NewItemBar isVisible={isVisible} />
      <button onClick={getData}> get fucking data</button>
    </div>
  );
};


const mapeStateToProps = ({ products }) => ({products});

export default connect(mapeStateToProps)(Main);

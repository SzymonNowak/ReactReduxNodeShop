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

const Main = ({ products }) => {
  const [isVisible, setVisibility] = useState(false);

  return (
    <div>
      {products.map(({ tittle, count, price, description }) => (
        <Card
          tittle={tittle}
          count={count}
          price={price}
          description={description}
          key={tittle}
        />
      ))}

      <StyledIconButton
        icon={Plus}
        active
        onClick={() => setVisibility(!isVisible)}
      />
      <NewItemBar isVisible={isVisible} />
    </div>
  );
};


const mapeStateToProps = ({ ProductReducer }) => ({
  products: ProductReducer.products
});




export default connect(mapeStateToProps)(Main);

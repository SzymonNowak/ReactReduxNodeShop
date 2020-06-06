import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Plus from "../assets/plus.svg";
import IconButton from "../components/atoms/IconButton/IconButton";
import Card from "../components/molecules/Card/Card";
import NewItemBar from "../components/organism/NewItemBar/NewItemBar";

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
      {products.map(({
        tittle, count, price, description,
      }) => (
          <Card
            tittle={tittle}
            count={count}
            price={price}
            description={description}
            key={tittle}
          />
        ))}
    </div>
  );
};

const mapeStateToProps = ({ ProductReducer }) => ({
  products: ProductReducer.products,
});

export default connect(mapeStateToProps)(Main);

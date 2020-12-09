import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addItemToCart as addItemToCartAction } from "../../../actions/addItemToCart";
import PriceText from "../../atoms/PriceText/PriceText";
import LongButton from "../../atoms/LongButton/LongButton";

const Wrapper = styled.div`
  height: 100%;
  width: 305px;
  text-align: center;
  margin: 20px 10px 20px 10px;
`;
const StyledLink = styled(Link)`
  color: black;
`;
const StyledImg = styled.img`
  width: 100%;
`;
const Card = ({
  id,
  name,
  price,
  ingredients,
  meatType,
  mealType,
  sauce,
  addItemToCart,
  photo,
}) => {
  const item = {
    id,
    name,
    price,
    sauce,
  };
  return (
    <Wrapper>
      <StyledLink to={`meal/${id}`}>
        <StyledImg src={photo} />
      </StyledLink>
      <h1>{name}</h1>
      <PriceText>{`${price} zl`}</PriceText>
      <p>
        {ingredients &&
          ingredients.map((ingredient, index) => (
            <span key={index}>{`${ingredient}, `}</span>
          ))}
      </p>
      <p>{sauce && `sauce: ${sauce}`}</p>
      <p>{mealType}</p>
      <LongButton onClick={() => addItemToCart(item)}>Add to cart</LongButton>
    </Wrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCartAction(item)),
});

export default connect(() => ({}), mapDispatchToProps)(Card);

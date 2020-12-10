import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addItemToCart as addItemToCartAction } from "../../../actions/addItemToCart";
import SmallerHeader from "../../atoms/SmallerHeader/SmallerHeader";
import LongButton from "../../atoms/BUTTONS/LongButton/LongButton.js";
const Wrapper = styled.div`
  height: 100%;
  min-width: 250px;
  max-width: 250px;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.margin.l};
`;
const StyledImg = styled.img`
  width: 200px;
`;
const StyledSmallerHeader = styled(SmallerHeader)`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.m};
  letter-spacing: 3px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const Text = styled.p`
  margin-top: 10px;
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
    meatType,
    mealType,
  };
  return (
    <Wrapper>
      <Link to={`meal/${id}`}>
        <StyledImg src={photo} />
      </Link>
      <h1>{name}</h1>
      <StyledSmallerHeader>{`${price} zl`}</StyledSmallerHeader>
      <Text>
        {ingredients &&
          ingredients.map((ingredient, index) => (
            <span key={index}>{`${ingredient}, `}</span>
          ))}
      </Text>
      <Text>{sauce && `sauce: ${sauce}`}</Text>
      <LongButton onClick={() => addItemToCart(item)}>Add to cart</LongButton>
    </Wrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCartAction(item)),
});

export default connect(() => ({}), mapDispatchToProps)(Card);

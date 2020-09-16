import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { removeItem as removeItemAction } from "../../../actions/removeItemAction";
import { addItemToCart as addItemToCartAction } from "../../../actions/addItemToCartAction";
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
  tittle,
  price,
  ingredients,
  sauce,
  addItemToCart,
  photo,
}) => {
  const item = {
    tittle,
    price,
    ingredients,
    sauce,
  };
  return (
    <Wrapper>
      <StyledLink to={`burger/${id}`}>
        <StyledImg src={photo} />
      </StyledLink>
      <h1>{tittle}</h1>
      <PriceText>{`${price} zl`}</PriceText>
      {ingredients.map((ingredient, index) => (
        <span key={index}>{`${ingredient}, `}</span>
      ))}
      <p>{sauce ? `sauce: ${sauce}` : null}</p>
      <LongButton onClick={() => addItemToCart(item)}>Add to cart</LongButton>
    </Wrapper>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  tittle: PropTypes.string,
  price: PropTypes.string,
  ingredients: PropTypes.arrayOf(PropTypes.string),
  sauce: PropTypes.string,
  addItemToCart: PropTypes.func,
};

Card.defaultProps = {
  tittle: "asd",
  price: 18,
  ingredients: [],
  // sauce: "M M",
  addItemToCart: () => ({}),
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCartAction(item)),
});

export default connect(() => ({}), mapDispatchToProps)(Card);

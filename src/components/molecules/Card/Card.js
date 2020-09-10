import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { removeItem as removeItemAction } from "../../../actions/removeItemAction";
import { addItemToCart as addItemToCartAction } from "../../../actions/addItemToCartAction";
import DrawBurger from "../../../assets/drawBurger.jpg";
import PriceText from "../../atoms/PriceText/PriceText";
import LongButton from "../../atoms/LongButton/LongButton";

const Wrapper = styled.div`
  height: 100%;
  width: 305px;
  float: left;
  text-align: center;
  margin-left: 100px;
  margin-top: 50px;
  margin-bottom: 50px;
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
  mealOfTheWeek,
  removeItem,
  addItemToCart,
}) => {
  const item = {
    tittle,
    price,
  };
  return (
    <Wrapper>
      <StyledLink to={`burger/${id}`}>
        <StyledImg src={DrawBurger} />
      </StyledLink>
      <h1>{tittle}</h1>
      <PriceText>{`${price} zl`}</PriceText>
      <p>ingredients:</p>
      {ingredients.map((ingredient, index) => (
        <span key={index}>{ingredient + ", "}</span>
      ))}
      <p>
        sauce:
        {sauce}
      </p>
      <LongButton onClick={() => removeItem(id)}>Usun</LongButton>
      <LongButton onClick={() => addItemToCart(item)}>Add to cart</LongButton>
    </Wrapper>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  tittle: PropTypes.string,
  price: PropTypes.number,
  ingredients: PropTypes.arrayOf(PropTypes.string),
  sauce: PropTypes.string,
  mealOfTheWeek: PropTypes.bool,
  removeItem: PropTypes.func,
  addItemToCart: PropTypes.func,
};

Card.defaultProps = {
  tittle: "asd",
  price: 18,
  ingredients: ["beef", "tomato", "onion"],
  mealOfTheWeek: false,
  sauce: "M M",
  removeItem: () => ({}),
  addItemToCart: () => ({}),
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (tittle) => dispatch(removeItemAction(tittle)),
  addItemToCart: (item) => dispatch(addItemToCartAction(item)),
});

export default connect(() => ({}), mapDispatchToProps)(Card);

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { removeItem as removeItemAction } from "../../../actions/removeItemAction";
import { addItemToCart as addItemToCartAction } from "../../../actions/addItemToCartAction";
import Burger from "../../../assets/burger.jpg";

const Wrapper = styled.div`
  height: 100%;
  width: 305px;
  float: left;
  text-align: center;
  margin-left: 200px;
  margin-top: 15px;
`;
const StyledLink = styled(Link)`
  color: black;
`;
const StyledImg = styled.img`
  /* margin-top:5px; */
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
    <StyledLink to={`burger/${id}`}>
      <Wrapper>
        <StyledImg src={Burger} />
        <h2>{tittle}</h2>
        <p>
          price:
          {price}
        </p>
        <p>ingredients:</p>
        {ingredients.map((ingredient, index) => (
          <span key={index}>{ingredient + ", "}</span>
        ))}
        <p>
          sauce:
          {sauce}
        </p>
        <button onClick={() => removeItem(tittle)}>Usun</button>
        <button>Edit</button>
        <button onClick={() => addItemToCart(item)}>Add to cart</button>
      </Wrapper>
    </StyledLink>
  );
};

Card.propTypes = {
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

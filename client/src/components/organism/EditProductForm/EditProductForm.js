import React from "react";
import styled from "styled-components";
import NewAddomForm from "../NewProductForms/NewAddonForm/NewAddonForm";
import NewMealForm from "../NewProductForms/NewMealForm/NewMealForm";
import NewSauceForm from "../NewProductForms/NewSauceForm/NewSauceForm";
import NewBeveragesFrom from "../NewProductForms/NewBeveragesForm/NewBeveragesForm";
const Wrapper = styled.div`
  display: flex;
`;
const NewProduct = ({ match }) => {
  const { collection, id } = match.params;

  return (
    <Wrapper>
      {collection === "meals" && <NewMealForm action="update" id={id} edit />}
      {collection === "addons" && <NewAddomForm action="update" id={id} />}
      {collection === "sauces" && <NewSauceForm action="update" id={id} />}
      {collection === "beverages" && (
        <NewBeveragesFrom action="update" id={id} />
      )}
    </Wrapper>
  );
};

export default NewProduct;

// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import { useForm } from "react-hook-form";
// import { connect, useDispatch } from "react-redux";
// import Input from "../../atoms/Input/Input";
// import SmallButton from "../../atoms/SmallButton/SmallButton";
// import LongButton from "../../atoms/LongButton/LongButton";
// import ErrorMessage from "../../atoms/ErrorMessage/ErrorMessage";
// import AddProductGridTemplate from "../../../templates/NewProductGridTemplate";
// import { addItem as addItemAction } from "../../../actions/addItemAction";
// import { useFirestoreConnect } from "react-redux-firebase";
// import { compose } from "redux";
// import { firestoreConnect } from "react-redux-firebase";
// const FormWrapper = styled.form`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;
// const StyledLongButton = styled(LongButton)`
//   width: 100%;
// `;
// const EditProductForm = ({ match, burgers, tortillas, addons, beverages }) => {
//   const id = match.params.id;
//   const collection = match.params.collection;

//   const [ingredients, setIngredients] = useState([]);
//   const { register, handleSubmit, errors } = useForm();
//   const dispatch = useDispatch();

//   const onSubmit = (itemContent) => {
//     console.log(itemContent);
//   };
//   console.log(burgers);

//   const addIngredient = (e) => {
//     e.preventDefault();
//     setIngredients(ingredients.concat(""));
//   };

//   const handleInputRemove = (e, index) => {
//     e.preventDefault();
//     const ingredientsCopy = [...ingredients];
//     ingredientsCopy.splice(index, 1);
//     setIngredients(ingredientsCopy);
//   };
//   return (
//     <AddProductGridTemplate>
//       {burgers.map((item) => (
//         <FormWrapper onSubmit={handleSubmit(onSubmit)}>
//           <h1 htmlFor="productName"> name</h1>
//           <Input
//             id="productName"
//             name="productName"
//             type="text"
//             ref={register({
//               required: true,
//             })}
//             defaultValue={item.id}
//           />
//           <h1>product price</h1>
//           <Input
//             id="productPrice"
//             name="productPrice"
//             type="number"
//             step="any"
//             ref={register({
//               required: true,
//             })}
//           />

//           <label htmlFor="sauce">Choose a sauce:</label>
//           <select
//             name="sauce"
//             id="sauce"
//             ref={register({
//               required: true,
//             })}
//           >
//             <option value="MM">MM</option>
//             <option value="Garlic">Garlic</option>
//             <option value="DIP">DIP</option>
//             <option value="BBQ">BBQ</option>
//           </select>
//           <SmallButton id="addIngredient" onClick={(e) => addIngredient(e)}>
//             +
//           </SmallButton>
//           <StyledLongButton type="submit">Update Product</StyledLongButton>
//         </FormWrapper>
//       ))}
//     </AddProductGridTemplate>
//   );
// };

// const mapeStateToProps = ({ ProductReducer, firestoreReducer }) => ({
//   burgers: firestoreReducer.ordered.burgers || ProductReducer.products,
//   tortillas: firestoreReducer.ordered.tortillas || ProductReducer.products,
//   addons: firestoreReducer.ordered.addons || ProductReducer.products,
//   beverages: firestoreReducer.ordered.beverages || ProductReducer.products,
// });

// export default compose(
//   firestoreConnect(() => [
//     { collection: "burgers", doc: "LnhjqkxAirPDaDPRUp2C" },
//   ]),
//   connect(mapeStateToProps)
// )(EditProductForm);

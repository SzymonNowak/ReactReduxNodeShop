import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllMeals, deleteMeal } from "../actions/meals";
import { getAllAddons, deleteAddon } from "../actions/addons";
import { getAllBeverages, deleteBeverage } from "../actions/beverages";
import { getAllSauces, deleteSauce } from "../actions/sauces";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const EditProduct = () => {
  const dispatch = useDispatch();
  const meals = useSelector((state) => state.MealReducer.meals);
  const addons = useSelector((state) => state.AddonReducer.addons);
  const beverages = useSelector((state) => state.BeveragesReducer.beverages);
  const sauces = useSelector((state) => state.SauceReducer.sauces);
  useEffect(() => {
    dispatch(getAllMeals());
    dispatch(getAllAddons());
    dispatch(getAllBeverages());
    dispatch(getAllSauces());
  }, [dispatch]);

  const deletePorduct = async (productId, e) => {
    const sectionId = e.target.id;
    if (sectionId === "meal") {
      await dispatch(deleteMeal(productId));
      await dispatch(getAllMeals());
    } else if (sectionId === "addon") {
      await dispatch(deleteAddon(productId));
      await dispatch(getAllAddons());
    } else if (sectionId === "sauce") {
      await dispatch(deleteSauce(productId));
      await dispatch(getAllSauces());
    } else if (sectionId === "beverage") {
      await dispatch(deleteBeverage(productId));
      await dispatch(getAllBeverages());
    } else {
      console.log("cant delete");
    }
  };

  return (
    <>
      <h1>Meals:</h1>
      {meals &&
        meals.map((item) => {
          const id = item._id;
          return (
            <>
              <p>
                {item.name}{" "}
                <Link to={`/editProductForm/meals/${id}`}>
                  <span>edit</span>
                </Link>
                <button onClick={(e) => deletePorduct(id, e)} id="meal">
                  delete
                </button>
              </p>
            </>
          );
        })}
      <h1>Addons:</h1>
      {addons &&
        addons.map((item) => {
          const id = item._id;
          return (
            <>
              <p>
                {item.name}{" "}
                <Link to={`/editProductForm/addons/${id}`}>
                  <span>edit</span>
                </Link>
                <button onClick={(e) => deletePorduct(id, e)} id="addon">
                  delete
                </button>
              </p>
            </>
          );
        })}
      <h1>Beverages:</h1>
      {beverages &&
        beverages.map((item) => {
          const id = item._id;
          return (
            <>
              <p>
                {item.name}{" "}
                <Link to={`/editProductForm/beverages/${id}`}>
                  <span>edit</span>
                </Link>
                <button onClick={(e) => deletePorduct(id, e)} id="beverage">
                  delete
                </button>
              </p>
            </>
          );
        })}
      <h1>Sauces:</h1>

      {sauces &&
        sauces.map((item) => {
          const id = item._id;
          return (
            <>
              <p>
                {item.name}{" "}
                <Link to={`/editProductForm/sauces/${id}`}>
                  <span>edit</span>
                </Link>
                <button onClick={(e) => deletePorduct(id, e)} id="sauce">
                  delete
                </button>
              </p>
            </>
          );
        })}
    </>
  );
};

export default EditProduct;

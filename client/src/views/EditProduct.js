import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllMeals } from "../actions/meals";
import { getAllAddons } from "../actions/addons";
import { getAllBeverages } from "../actions/beverages";
import { getAllSauces } from "../actions/sauces";
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

  return (
    <>
      <h1>Meals:</h1>
      {meals &&
        meals.map((item) => {
          console.log(item);
          const id = item._id;
          const type = item.type;
          return (
            <>
              <p>
                {item.name}{" "}
                <Link to={`${type}/${id}`}>
                  <span>edit</span>
                </Link>
              </p>
            </>
          );
        })}
      <h1>Addons:</h1>
      {addons && addons.map((item) => <p>{item.name}</p>)}
      <h1>Beverages:</h1>
      {beverages && beverages.map((item) => <p>{item.name}</p>)}
      <h1>Sauces:</h1>

      {sauces && sauces.map((item) => <p>{item.name}</p>)}
    </>
  );
};

export default EditProduct;

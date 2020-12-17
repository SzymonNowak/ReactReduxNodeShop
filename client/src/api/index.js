import axios from "axios";
import { apiRoutes, routes } from "../routes/index";

export const fetchMeals = () => axios.get(apiRoutes.getAllMeals);
export const fetchAddons = () => axios.get(apiRoutes.getAllAddons);
export const fetchBeverages = () => axios.get(apiRoutes.getAllBeverages);
export const fetchSauces = () => axios.get(apiRoutes.getAllSauces);
export const addMeal = (meal) => axios.post(apiRoutes.addMeal, meal);
export const addAddon = (addon) => axios.post(apiRoutes.addAddon, addon);
export const addBeverages = (bevereages) =>
  axios.post(apiRoutes.addBeverage, bevereages);
export const addSauce = (sauce) => axios.post(apiRoutes.addSauce, sauce);

export const getSingleProduct = (id, collection) =>
  axios.get(`${apiRoutes.getProduct}/${collection}/single/${id}`);

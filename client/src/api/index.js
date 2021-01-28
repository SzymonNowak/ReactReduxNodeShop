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
export const updateMeal = (meal) => axios.put(apiRoutes.updateMeal, meal);
export const updateAddon = (addon) => axios.put(apiRoutes.updateAddon, addon);
export const updateSauce = (sauce) => axios.put(apiRoutes.updateSauce, sauce);
export const updateBeverage = (beverage) =>
  axios.put(apiRoutes.updateBeverage, beverage);
export const deleteMeal = (id) => axios.delete(`${apiRoutes.deleteMeal}/${id}`);
export const deleteSauce = (id) =>
  axios.delete(`${apiRoutes.deleteSauce}/${id}`);
export const deleteAddon = (id) =>
  axios.delete(`${apiRoutes.deleteAddon}/${id}`);
export const deleteBeverage = (id) =>
  axios.delete(`${apiRoutes.deleteBeverage}/${id}`);

export const getSingleProduct = (id, collection) =>
  axios.get(`${apiRoutes.getProduct}/${collection}/single/${id}`);

export const makeOrder = (order) => {
  return axios.post(apiRoutes.makeOrder, order);
};
export const getAllNotFinishedOrders = () =>
  axios.get(apiRoutes.getAllNotFinishedOrders);

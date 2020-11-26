import axios from "axios";
import { apiRoutes } from "../routes/index";

export const fetchMeals = () => axios.get(apiRoutes.getAllMeals);
export const fetchAddons = () => axios.get(apiRoutes.getAllAddons);
export const fetchBeverages = () => axios.get(apiRoutes.getAllBeverages);
export const fetchSauces = () => axios.get(apiRoutes.fetchSauces);

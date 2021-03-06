export const routes = {
  home: "/",
  main: "/main",
  orders: "/orders",
  contact: "/contact",
  register: "/register",
  login: "/login",
  addNewProduct: "/newProduct",
  newMeal: "/meals",
  newAddons: "/addons",
  newBeverages: "/beverages",
  newSauces: "/sauces",
  admin: "/admin",
  user: "/user",
  checkOutmyOrder: "/checkOutmyOrder",
  OrderSummary: "/OrderSummary",
  addresForm: "/addresForm",
  editProduct: "/editProduct",
  editProductForm: "/editProductForm/:collection/:id",
};

export const apiRoutes = {
  getAllMeals: "http://localhost:5000/meals/getAllMeals",
  getAllAddons: "http://localhost:5000/addons/getAllAddons",
  getAllBeverages: "http://localhost:5000/beverages/getAllBeverages",
  getAllSauces: "http://localhost:5000/sauces/getAllSauces",
  addMeal: "http://localhost:5000/meals/addMeal",
  addAddon: "http://localhost:5000/addons/addAddon",
  addBeverage: "http://localhost:5000/beverages/addBeverage",
  addSauce: "http://localhost:5000/sauces/addSauce",
  getProduct: "http://localhost:5000",
  updateMeal: "http://localhost:5000/meals/updateMeal",
  updateAddon: "http://localhost:5000/addons/updateAddon",
  updateBeverage: "http://localhost:5000/beverages/updateBeverage",
  updateSauce: "http://localhost:5000/sauces/updateSauce",
  deleteMeal: "http://localhost:5000/meals/deleteMeal",
  deleteAddon: "http://localhost:5000/addons/deleteAddon",
  deleteSauce: "http://localhost:5000/sauces/deleteSauce",
  deleteBeverage: "http://localhost:5000/beverages/deleteBeverage",
  makeOrder: "http://localhost:5000/orders/makeOrder",
};

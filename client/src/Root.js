import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { routes } from "./routes/index";
import { theme } from "./theme/mainTheme";
import Main from "./views/Main";
import store from "./store/index";
import GlobalStyle from "./theme/GlobalStyle";
import Contact from "./views/Contact";
import Login from "./views/Login";
import Register from "./views/Register";
import OrderList from "./views/OrderList";
import NewProduct from "./views/NewProduct";
import User from "./views/User";
import Admin from "./views/Admin";
import MainUserTemaplte from "./templates/MainTemplate";
import NewMealForm from "./components/organism/NewMealForm/NewMealForm";
import NewBeveragesForm from "./components/organism/NewBeveragesForm/NewBeveragesForm";
import NewAddonForm from "./components/organism/NewAddonForm/NewAddonForm";
import NewSauceForm from "./components/organism/NewSauceForm/NewSauceForm";

import ProductsDetailsTemplate from "./templates/ProductsDetailsTemplate";
import CheckOutMyOrder from "./views/CheckOutMyOrder";
import AdressForm from "./components/organism/AdressForm/AdressForm";
import EditProduct from "./views/EditProduct";
import EditProductForm from "./components/organism/EditProductForm/EditProductForm";

const Root = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <MainUserTemaplte>
            <Switch>
              <Route
                exact
                path={routes.home}
                render={() => <Redirect to="/main" />}
              />
              <Route path={routes.main} component={Main} />
              <Route path={routes.contact} component={Contact} />
              <Route path={routes.register} component={Register} />
              <Route path={routes.login} component={Login} />
              <Route path={routes.orders} component={OrderList} />
              <Route path={routes.addNewProduct} component={NewProduct} />
              <Route path={routes.admin} component={Admin} />
              <Route path={routes.user} component={User} />
              <Route path={routes.newMeal} component={NewMealForm} />
              <Route
                path={routes.checkOutmyOrder}
                component={CheckOutMyOrder}
              />
              <Route path={routes.addresForm} component={AdressForm} />
              <Route path={routes.newAddons} component={NewAddonForm} />
              <Route path={routes.newBeverages} component={NewBeveragesForm} />
              <Route path={routes.newSauces} component={NewSauceForm} />

              <Route path="/burger/:id" component={ProductsDetailsTemplate} />
              <Route path={routes.editProduct} component={EditProduct} />
              <Route
                path={routes.editProductForm}
                component={EditProductForm}
              />
            </Switch>
          </MainUserTemaplte>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default Root;

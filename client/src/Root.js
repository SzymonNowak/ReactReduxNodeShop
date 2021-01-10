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
import OrderList from "./views/OrderList";
import NewProduct from "./views/NewProduct";
import Admin from "./views/Admin";
import MainUserTemaplte from "./templates/MainTemplate";
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
              <Route path={routes.orders} component={OrderList} />
              <Route path={routes.addNewProduct} component={NewProduct} />
              <Route path={routes.admin} component={Admin} />
              <Route
                path={routes.checkOutmyOrder}
                component={CheckOutMyOrder}
              />

              <Route
                exact
                path="/:collection/:id"
                component={ProductsDetailsTemplate}
              />
              <Route path={routes.editProduct} component={EditProduct} />
              <Route
                exact
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

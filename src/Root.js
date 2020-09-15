import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore"; // <- needed if using firestore
import { routes } from "./routes/index";
import { theme } from "./theme/mainTheme";
import { rrfConfig } from "./configuration/rrfConfig";
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
import AddNewProdcutsTemplate from "./templates/AddNewProdcutsTemplate";
import ProductsDetailsTemplate from "./templates/ProductsDetailsTemplate";
import firebase from "./services/firebase";
import CheckOutMyOrder from "./views/CheckOutMyOrder";
import AdressForm from "./components/organism/AdressForm/AdressForm";

const Root = () => {
  const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance, // <- needed if using firestore
  };
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider
        firebase={firebase}
        config={rrfConfig}
        dispatch={store.dispatch}
        createFirestoreInstance={createFirestoreInstance}
      >
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

                <Route
                  path={routes.newBurger}
                  component={AddNewProdcutsTemplate}
                />
                <Route
                  path={routes.checkOutmyOrder}
                  component={CheckOutMyOrder}
                />
                <Route path={routes.addresForm} component={AdressForm} />
                <Route
                  path={routes.newTortilla}
                  component={AddNewProdcutsTemplate}
                />
                <Route
                  path={routes.newAddons}
                  component={AddNewProdcutsTemplate}
                />
                <Route
                  path={routes.newBeverages}
                  component={AddNewProdcutsTemplate}
                />
                <Route path="/burger/:id" component={ProductsDetailsTemplate} />
              </Switch>
            </MainUserTemaplte>
          </BrowserRouter>
        </ThemeProvider>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
};

export default Root;

import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { routes } from "./routes/index";
import Main from "./views/Main";
import MainTemplate from "./templates/MainTemplate";
import { Provider } from 'react-redux';
import store from './store/index';
const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          {/* <Route exact path={routes.home} render={() => <Redirect to="/" />} /> */}
          <Route exact path={routes.main} component={Main} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;

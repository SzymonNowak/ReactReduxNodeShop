import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { routes } from "./routes/index";
import Main from "./views/Main";
import MainTemplate from "./templates/MainTemplate";
const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path={routes.home} render={() => <Redirect to="/" />} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;

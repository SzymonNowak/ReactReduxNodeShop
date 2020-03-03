import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { routes } from "./routes/index";
import Main from "./views/Main";
import MainUserTemaplte from "./templates/MainTemplate";
import { Provider } from 'react-redux';
import store from './store/index';
import { ThemeProvider } from "styled-components";
import GlobalStyle from './theme/GlobalStyle';
import { theme } from './theme/mainTheme';
const Root = () => (
  <Provider store={store}>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MainUserTemaplte>
          <Switch>
            {/* <Route exact path={routes.home} render={() => <Redirect to="/" />} /> */}
            <Route exact path={routes.main} component={Main} />
          </Switch>
        </MainUserTemaplte>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);

export default Root;

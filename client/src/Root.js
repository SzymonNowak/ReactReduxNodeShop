import React, { Component } from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { routes } from './routes/index';
import Main from './views/Main';
import MainUserTemaplte from './templates/MainTemplate';
import store from './store/index';
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

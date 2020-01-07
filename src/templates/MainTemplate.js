import React, { Component } from "react";
import GlobalStyle from "../theme/GlobalStyle";
import NavBar from "../components/organism/NavBar/NavBar";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/mainTheme";

class MainTemaplte extends Component {
  state = {};

  render() {
    const { children } = this.props;
    return (
      <div>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <NavBar />
          {children}
        </ThemeProvider>
      </div>
    );
  }
}

export default MainTemaplte;

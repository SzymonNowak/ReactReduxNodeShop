import React, { Component } from "react";
import GlobalStyle from "../theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/mainTheme";

class MainTemaplte extends Component {
  state = {};

  render() {
    const { children } = this.props;
    return (
      <div>
        <GlobalStyle />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </div>
    );
  }
}

export default MainTemaplte;

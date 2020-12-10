import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:wght@300;400;500&,600&display=swap');
    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        padding:0;
        margin:0;
    }
    body {
        font-family: "Montserrat", sans-serif;

    }
`;

export default GlobalStyle;

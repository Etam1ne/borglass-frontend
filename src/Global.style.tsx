import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        overflow: hidden scroll;
        min-height: 100vh;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    a:visited {
        color: inherit;
    }
`
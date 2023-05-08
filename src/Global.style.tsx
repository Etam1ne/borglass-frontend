import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    a:visited {
        color: inherit;
    }
`
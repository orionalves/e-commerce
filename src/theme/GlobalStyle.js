import { createGlobalStyle } from "styled-components"
import { colors } from "./constants.js"


export const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0 auto;
    background-color: ${colors.background};
  }
`
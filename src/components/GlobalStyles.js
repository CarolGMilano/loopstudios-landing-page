import { createGlobalStyle } from "styled-components";
import { white, josefinSans } from "./UI/variables.js";
 
const GlobalStyles = createGlobalStyle `
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${white};
    font-family: ${josefinSans};
    overflow-x: hidden;
  }
`;

export default GlobalStyles;

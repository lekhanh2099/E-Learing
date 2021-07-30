import { createGlobalStyle } from "styled-components";

// Config style global with styled components
export const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: "Roboto",Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    font-size: 62.5%;
  }
  * {
    outline: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  ::-webkit-file-upload-button {
      display: none !important;
    }
  ::selection {
  color: #ffffff;
  background: #ff9800;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    ul.MuiList-padding{
      padding: 0 !important;
    }
  }

  ::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;

}
`;

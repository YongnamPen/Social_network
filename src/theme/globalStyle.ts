import { Theme } from "./theme";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url(https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900);

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-width: 530px;
  margin: 0;
  font-family: "Inter";
  background-color: ${(props) => props.theme.colors.bgc};
  color:${(props) => props.theme.colors.textColor};
}

button,
input {
  border: 1px solid transparent;
  outline: 0;
  font-family: inherit;
}

a {
  text-decoration: none;
  color: inherit;
  
  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color: ${(props) => props.theme.colors.textColor};
  }
}

._no-select {
  -webkit-touch-callout: none; //? iOS Safari
  -webkit-user-select: none; //? Safari
  -khtml-user-select: none; //? Konqueror HTML
  -moz-user-select: none; //? Old versions of Firefox
  -ms-user-select: none; //? Internet Explorer/Edge
  user-select: none; //? Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox
}

input {
  padding: 12px 15px;
  background-color: ${(props) => props.theme.colors.bgc};
  border-radius: 10px;
  border: 1px solid transparent;

  transition: 200ms;

  &:is(:hover, :focus) {
    border-color: ${(props) => props.theme.colors.primeColor};
  }
}

@media (max-width: 730px) {
  input, button {
    padding: 10px 12px;
  }
}
`;

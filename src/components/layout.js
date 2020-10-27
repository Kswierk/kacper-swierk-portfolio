import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*,::before, ::after {
    margin: 0;
    padding:0;
    box-sizing: border-box;
    font-size: 1rem;
}
  body, html {
    background-color: #14274e;
    font-family: "Montserrat", sans-serif;
    color: #dadada;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;  
     }
`
export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle theme="purple" />
    </React.Fragment>
  )
}

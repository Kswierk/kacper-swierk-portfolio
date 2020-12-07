import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*,::before, ::after {
    margin: 0;
    padding:0;
    box-sizing: border-box;
    font-size: 1rem;
}

body{
  /* overflow: hidden; */

}
  body, html {
    background-color: #0a192f;
    font-family: "Montserrat", sans-serif;
    color: #8892b0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;  
     }
`
export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle />
    </React.Fragment>
  )
}

import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body, html {
    background-color: #eee;
    font-family: "Roboto Mono", monospace;
    margin: 0;
    padding:0;
    box-sizing: border-box;
    font-size: 1rem;
    overflow-x: hidden;

  }
`
export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle theme="purple" />
    </React.Fragment>
  )
}

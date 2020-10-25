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
    font-family: "Roboto Mono", monospace;
    color: #e94560;
  }
`
export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle theme="purple" />
    </React.Fragment>
  )
}

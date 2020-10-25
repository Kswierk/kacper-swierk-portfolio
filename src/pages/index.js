import React from "react"
import Hero from "../components/hero"
import Layout from "../components/layout"
import Navbar from "../components/Navbar/navbar"

import styled from "styled-components"

const SiteWraper = styled.div`
  /* overflow-x: hidden; */
  /* position: relative; */
`

const IndexPage = () => (
  <>
    <Layout />
    <Navbar />
    <Hero />
  </>
)

export default IndexPage

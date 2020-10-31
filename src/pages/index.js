import React from "react"
import Hero from "../components/hero"
import Layout from "../components/layout"
import Navbar from "../components/Navbar/navbar"
import Sidebars from "../components/Sidebars/sidebars"
import About from "../components/about"
import Technologies from "../components/Technologies/technologies"
import Work from "../components/Work/work"

const IndexPage = () => (
  <>
    <Layout />
    <Navbar />
    <Hero />
    <Sidebars />
    <About />
    <Technologies />
    <Work />
  </>
)

export default IndexPage

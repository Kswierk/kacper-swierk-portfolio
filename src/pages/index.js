import React from "react"
import Hero from "../components/hero"
import Layout from "../components/layout"
import Navbar from "../components/Navbar/navbar"
import Sidebars from "../components/sidebars/sidebars"
import About from "../components/about"

const IndexPage = () => (
  <>
    <Layout />
    <Navbar />
    <Hero />
    <Sidebars />
    <About />
  </>
)

export default IndexPage

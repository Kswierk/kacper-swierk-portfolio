import React from "react"
import Hero from "../components/hero"
import Layout from "../components/layout"
import Navbar from "../components/Navbar/navbar"
import Sidebars from "../components/sidebars"
import About from "../components/about"
import Technologies from "../components/Technologies/technologies"
import Work from "../components/Work/work"
import Contact from "../components/contact"
import Footer from "../components/footer"

const IndexPage = () => {
  return (
    <>
      <Layout />
      <Navbar />
      <Hero />
      <Sidebars />
      <About />
      <Technologies />
      <Work />
      <Contact />
      <Footer />
    </>
  )
}

export default IndexPage

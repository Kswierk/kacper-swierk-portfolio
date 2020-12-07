import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar/Navbar"
import Sidebars from "../components/Sidebars"
import About from "../components/About"
import Technologies from "../components/Technologies/Technologies"
import Work from "../components/Work/Work"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

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

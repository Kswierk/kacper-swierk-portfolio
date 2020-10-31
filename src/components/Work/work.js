import React, { useEffect } from "react"
import SectionHeading from "../sectionheading"
import ProjectCard from "./projectCard"
import styled from "styled-components"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Wraper = styled.div`
  max-width: 900px;
  margin: 50px auto;
  @media (min-width: 1300px) {
    max-width: 1000px;
  }
`

const Work = () => {
  useEffect(() => {
    const triggerElement = document.querySelector(".heder")

    gsap.fromTo(
      triggerElement,
      {
        y: "+=50",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: { trigger: triggerElement, start: "top 70%" },
      }
    )
  }, [])
  return (
    <>
      <Wraper className="heder">
        <SectionHeading sectionNumber="03." sectionName="My Projects" />
      </Wraper>
      <ProjectCard />
    </>
  )
}

export default Work

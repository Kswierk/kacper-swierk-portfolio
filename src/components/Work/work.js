import React, { useEffect } from "react"
import SectionHeading from "../sectionheading"
import ProjectCard from "./projectCard"
import styled from "styled-components"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Wraper = styled.div`
  max-width: 1000px;
  margin: 50px auto;
`

const Work = () => {
  useEffect(() => {
    const triggerElement = document.querySelector(".heder")

    gsap.fromTo(
      triggerElement,
      {
        x: "+=-100",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: { trigger: triggerElement, start: "top 70%" },
      }
    )
  }, [])
  return (
    <>
      <Wraper id="work" className="heder">
        <SectionHeading
          className="heder"
          sectionNumber="03."
          sectionName="My Projects"
        />
        <ProjectCard />
      </Wraper>
    </>
  )
}

export default Work

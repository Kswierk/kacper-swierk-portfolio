import React, { useEffect } from "react"
import SectionHeading from "../sectionheading"
import { svgs } from "./svgs"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import styled from "styled-components"
gsap.registerPlugin(ScrollTrigger)

const Wraper = styled.div`
  max-width: 700px;
  margin: 200px auto;
  position: relative;
  @media (min-width: 1300px) {
    /* left: 150px; */
  }
`
const StyledH3 = styled.h3`
  margin: 15px;
  line-height: 1.7rem;
  font-weight: 400;
  @media (min-width: 790px) {
    margin: 20px auto;
    width: 75%;
  }
  @media (min-width: 1100px) {
    width: 100%;
  }
`

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  margin-top: 30px;
  @media (min-width: 550px) {
    flex-direction: row;
  }
  @media (min-width: 790px) {
    width: 75%;
    margin: 0 auto;
  }
  @media (min-width: 1100px) {
    width: 100%;
  }
`

const StyledLi = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 10px 0 0 25px;
  font-size: 1.2rem;
  font-weight: 500;
  ::before {
    content: "‣";
    position: relative;
    margin-right: 15px;
    color: #08ffc8;
    font-size: 1.5rem;
    line-height: 12px;
  }
`

const FlexWraper = styled.div`
  display: block;
  @media (min-width: 1300px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
`

const Technologies = () => {
  useEffect(() => {
    const triggerElement = document.querySelector(".technologiesTrigger")

    gsap.fromTo(
      triggerElement.children,
      {
        y: "+=100",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: { trigger: triggerElement, start: "top 70%" },
      }
    )
  }, [])
  return (
    <>
      <Wraper className="technologiesTrigger">
        <SectionHeading sectionNumber="02." sectionName="Technologies">
          Technologies
        </SectionHeading>
        <StyledH3>
          Here are some technologies and tools I've been working with recently
          in my projects. Currently im learning TypeScript and improving my unit
          testing skills.
        </StyledH3>
        <FlexWraper>
          <StyledUl>
            <div>
              <StyledLi>HTML</StyledLi>
              <StyledLi>(S)CSS</StyledLi>
              <StyledLi>BEM</StyledLi>
              <StyledLi>Mobile First</StyledLi>
              <StyledLi>JavaScript (ES6+)</StyledLi>
              <StyledLi>React &amp; Hooks</StyledLi>
              <StyledLi>Redux</StyledLi>
              <StyledLi>Gatsby</StyledLi>
            </div>
            <div>
              <StyledLi>Jest</StyledLi>
              <StyledLi>GSAP</StyledLi>
              <StyledLi>CSS Modules</StyledLi>
              <StyledLi>Styled Components</StyledLi>
              <StyledLi>Axios</StyledLi>
              <StyledLi>Docker</StyledLi>
              <StyledLi>Postman</StyledLi>
              <StyledLi>Git</StyledLi>
            </div>
          </StyledUl>
        </FlexWraper>
      </Wraper>
    </>
  )
}

export default Technologies

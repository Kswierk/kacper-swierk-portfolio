import React, { useEffect } from "react"
import styled from "styled-components"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const StyledHeaderText = styled.h3`
  color: #ccd6f6;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 40px 15px;
  @media (min-width: 790px) {
    margin: 40px auto;
    width: 75%;
    font-size: 3vw;
  }
  @media (min-width: 1000px) {
    width: 100%;
    font-size: 28px;
  }

  &::after {
    content: "";
    display: inline-block;
    position: relative;
    top: -8px;
    width: 50%;
    height: 1px;
    margin-left: 20px;
    background-color: #303c55;
  }
`
const StyledHeaderSpan = styled.span`
  font-family: "Roboto Mono", monospace;
  font-size: 1.2rem;
  margin-right: 8px;
  color: #08ffc8;
  font-weight: 400;
`

const SectionHeading = props => {
  return (
    <>
      <StyledHeaderText>
        <StyledHeaderSpan>{props.sectionNumber}</StyledHeaderSpan>
        {props.sectionName}
      </StyledHeaderText>
    </>
  )
}

export default SectionHeading

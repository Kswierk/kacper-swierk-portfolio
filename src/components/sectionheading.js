import React, { useEffect } from "react"
import styled from "styled-components"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const StyledHeaderText = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  margin: 40px 15px;
  @media (min-width: 790px) {
    margin: 40px auto;
    width: 75%;
    font-size: 3vw;
  }
  @media (min-width: 1100px) {
    width: 100%;
    font-size: 33px;
  }

  &::after {
    content: "";
    display: inline-block;
    position: relative;
    top: -8px;
    width: 50%;
    height: 1px;
    margin-left: 20px;
    background-color: #dadada;
  }
`
const StyledHeaderSpan = styled.span`
  font-family: "Roboto Mono", monospace;
  font-size: 1.2rem;
  margin-right: 8px;
  color: #08ffc8;
`

const SectionHeading = props => {
  // useEffect(() => {
  //   const sectionHeader = document.querySelectorAll(".sectionHeading")
  //   sectionHeader.forEach(elem => {
  //     gsap.fromTo(
  //       elem,
  //       {
  //         y: "+=50",
  //         opacity: 0,
  //       },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         duration: 0.5,
  //         scrollTrigger: { trigger: elem, start: "top 70%" },
  //       }
  //     )
  //   })
  // }, [])
  return (
    <>
      <StyledHeaderText className="sectionHeading">
        <StyledHeaderSpan>{props.sectionNumber}</StyledHeaderSpan>
        {props.sectionName}
      </StyledHeaderText>
    </>
  )
}

export default SectionHeading

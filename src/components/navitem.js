import React, { useEffect } from "react"
import styled from "styled-components"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const StyledLi = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
`

const StyledA = styled.a`
  padding: 25px;
  font-size: 1rem;
  display: block;
  cursor: pointer;

  @media (min-width: 768px) {
    padding: 16px;
    font-size: 0.9rem;
  }
`

const StyledAResume = styled.a`
  border: 1px solid #fbff12;
  padding: 15px 35px;
  border-radius: 4px;
  cursor: pointer;
  display: block;
  font-size: 1rem;
  @media (min-width: 768px) {
    font-size: 0.9rem;
    padding: 10px 20px;
    margin: 30px;
  }
`

const NumberSpan = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    display: inline-block;
  }
`

const NavItem = () => {
  useEffect(() => {
    if (window.innerWidth > 768) {
      const elements = document.querySelectorAll(".fadelink")

      elements.forEach((elem, index) => {
        gsap.set(elem, { autoAlpha: 0 })

        gsap.fromTo(
          elem,
          { y: "-=50" },
          { y: "+=50", autoAlpha: 1, delay: index / 15 }
        )
      })
    }
  })

  return (
    <>
      <StyledLi>
        <StyledA className="fadelink">
          <NumberSpan> 01.</NumberSpan> About
        </StyledA>
      </StyledLi>
      <StyledLi>
        <StyledA className="fadelink">
          <NumberSpan> 02.</NumberSpan> Work
        </StyledA>
      </StyledLi>
      <StyledLi>
        <StyledA className="fadelink">
          <NumberSpan> 03.</NumberSpan> Technologies
        </StyledA>
      </StyledLi>
      <StyledLi>
        <StyledA className="fadelink">
          <NumberSpan> 04.</NumberSpan> Contact
        </StyledA>
      </StyledLi>
      <StyledLi>
        <StyledAResume className="fadelink">Resume</StyledAResume>
      </StyledLi>
    </>
  )
}

export default NavItem

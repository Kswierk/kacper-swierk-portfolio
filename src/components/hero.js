import React, { useEffect } from "react"
import styled from "styled-components"
import gsap from "gsap"
import { Link } from "react-scroll"

const StyledLink = styled(Link)`
  font-size: 0.9rem;
  border: 1px solid #08ffc8;
  color: #08ffc8;
  background-color: transparent;
  padding: 1rem 2rem;
  border-radius: 4px;
  margin-top: 50px;
  display: inline-block;
  font-family: "Roboto Mono", monospace;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    background-color: RGBA(8, 255, 200, 0.2);
    transition: all 0.2s ease-in-out;
  }
`

const HeroWraper = styled.div`
  position: relative;
  height: 100vh;
  visibility: hidden;
`

const Wraper = styled.div`
  padding: 20px;
  top: 50%;
  position: relative;
  transform: translateY(-50%);

  @media (max-height: 630px) {
    position: relative;
    top: 80px;
    transform: none;
  }

  @media (min-width: 470px) {
    margin-left: 40px;
  }
  @media (min-width: 790px) {
    margin: 0 70px 0 120px;
  }
  @media (min-width: 1000px) {
    margin-left: 150px;
  }

  @media (min-width: 1500px) {
    margin-left: 300px;
  }
`

const HeroText = styled.div`
  padding: 20px 0;
  font-size: 2rem;
  font-family: "Montserrat", sans-serif;
  color: #ccd6f6;
  font-weight: 700;

  @media (min-width: 500px) {
    font-size: 6.2vw;
  }
  @media (min-width: 1000px) {
    font-size: 65px;
  }
`

const HeroTexth3 = styled.h3`
  font-size: 2rem;
  margin-top: 15px;
  font-weight: 700;
  color: #8892b0;

  @media (min-width: 500px) {
    font-size: 6vw;
  }
  @media (min-width: 1000px) {
    font-size: 60px;
  }
`

const StyledP = styled.p`
  font-family: "Montserrat", sans-serif;
  line-height: 1.8rem;

  @media (min-width: 500px) {
    width: 70%;
  }
  @media (min-width: 900px) {
    width: 45%;
  }
`

const StyledGreeting = styled.p`
  font-family: "Roboto Mono", monospace;
  color: #08ffc8;
`

const Hero = () => {
  useEffect(() => {
    const fadeElements = document.querySelectorAll(".fadeElement")

    fadeElements.forEach(elem => {
      gsap.fromTo(
        elem,
        { y: "-=50", opacity: 0 },
        {
          y: "0",
          opacity: 1,
          delay: 1.2,
          duration: 1.2,
          visibility: "visible",
        }
      )
    })
  }, [])
  return (
    <HeroWraper>
      <Wraper>
        <StyledGreeting className="fadeElement">Hi, my name is</StyledGreeting>
        <HeroText className="fadeElement">
          Kacper Świerk.
          <HeroTexth3 className="fadeElement">
            I work to make a better web.
          </HeroTexth3>
        </HeroText>
        <StyledP className="fadeElement">
          I'm a front end developer based in Cracow, Poland. I enjoy building
          useful websites, applications and everything in between.
        </StyledP>
        <StyledLink
          to={"work"}
          smooth={true}
          duration={500}
          offset={-100}
          className="fadeElement"
        >
          Check my work
        </StyledLink>
      </Wraper>
    </HeroWraper>
  )
}

export default Hero

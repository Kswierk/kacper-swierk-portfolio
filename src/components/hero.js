import React, { useEffect } from "react"
import styled from "styled-components"
import gsap from "gsap"

const StyledBtn = styled.button`
  border: 1px solid #08ffc8;
  color: #08ffc8;
  background-color: transparent;
  padding: 1rem 2rem;
  border-radius: 4px;
  margin-top: 50px;
  font-family: "Roboto Mono", monospace;
  cursor: pointer;

  &:hover {
    background-color: RGBA(8, 255, 200, 0.2);
    transition: all 0.1s ease-in-out;
  }
`

const HeroWraper = styled.div`
  position: relative;
  height: 100vh;
`

const Wraper = styled.div`
  padding: 20px;
  top: 50%;
  position: relative;
  transform: translateY(-50%);

  @media (max-height: 530px) {
    position: relative;
    top: 0;
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
  color: #dadada;
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
  color: #dadada;
  font-weight: 700;

  @media (min-width: 500px) {
    font-size: 6vw;
  }
  @media (min-width: 1000px) {
    font-size: 60px;
  }
`

const StyledP = styled.p`
  font-family: "Montserrat", sans-serif;
  color: #dadada;
  line-height: 1.8rem;

  @media (min-width: 500px) {
    width: 70%;
  }
  @media (min-width: 900px) {
    width: 60%;
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
      gsap.set(elem, { autoAlpha: 0 })

      gsap.fromTo(
        elem,
        { y: "+=50" },
        { y: "-=50", autoAlpha: 1, delay: 1.4, duration: 1 }
      )
    })
  })
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
          I'm a front end developer based in Cracow, Poland. I like building
          useful websites, applications and everything in between.
        </StyledP>
        <StyledBtn className="fadeElement">Check my work!</StyledBtn>
      </Wraper>
    </HeroWraper>
  )
}

export default Hero

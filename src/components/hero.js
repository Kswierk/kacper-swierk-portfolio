import React from "react"
import styled from "styled-components"

const StyledBtn = styled.button`
  border: 1px solid #08ffc8;
  color: #08ffc8;
  background-color: transparent;
  padding: 1rem 2rem;
  border-radius: 4px;
  margin-top: 50px;
`

const Wraper = styled.div`
  padding: 50px;
`

const HeroTexth2 = styled.h2`
  padding: 20px 0;
  font-size: 2rem;
  font-family: "Montserrat", sans-serif;
`

const HeroTexth3 = styled.h3`
  font-size: 2rem;
  margin-top: 15px;
`

const Hero = () => {
  return (
    <Wraper>
      <p>Hi, my name is</p>
      <HeroTexth2>
        Kacper Świerk.
        <HeroTexth3>I build thing for the web.</HeroTexth3>
      </HeroTexth2>
      <p>
        I'm front end developer based in Cracow, Poland. I like building useful
        websites, applications and everything in between
      </p>
      <StyledBtn>Check my work!</StyledBtn>
    </Wraper>
  )
}

export default Hero

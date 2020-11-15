import React, { useEffect } from "react"
import styled from "styled-components"
import SectionHeading from "../components/sectionheading"
import Image from "../assets/images/kacper.jpg"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Wraper = styled.div`
  max-width: 900px;
  margin: 50px auto;
`

const StyledPara = styled.p`
  margin-bottom: 15px;
  line-height: 1.7rem;
  @media (min-width: 790px) {
    width: 85%;
  }
`

const ImgWraper = styled.div`
  max-width: 300px;
  max-height: 300px;
  width: 50vw;
  min-width: 200px;
  border: 1px solid #08ffc8;
  border-radius: 4px;
  margin-top: 30px;

  @media (min-width: 790px) {
    width: 25vw;
  }
`

const StyledImg = styled.img`
  width: 100%;
  transform: translate(-15px, -15px);
  border-radius: 4px;
`

const SectionWraper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px 15px;

  @media (min-width: 790px) {
    flex-direction: row;
    width: 75%;
    margin: 0 auto;
  }
  @media (min-width: 1100px) {
    width: 100%;
  }
`

const StyledSpan = styled.span`
  color: #08ffc8;
  margin-left: 4px;
`

const About = () => {
  useEffect(() => {
    const triggerElement = document.querySelector(".scrollTriggered")

    gsap.fromTo(
      triggerElement.children,
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
    <Wraper id="about" className="scrollTriggered">
      <SectionHeading sectionNumber="01." sectionName="About Me" />
      <SectionWraper>
        <div>
          <StyledPara>
            Hello! I'm Kacper, a front end developer
            <StyledSpan>based in Cracow, Poland.</StyledSpan>
          </StyledPara>
          <StyledPara>
            Shortly after graduating from
            <StyledSpan>Cracow University of Technology</StyledSpan>, I started
            to ask myself a question - what I want to do with in my career ? and
            then I just started to programming. My main professional goal right
            now is to find a job that will give me an opportunity to improve my
            programming skills and engage in interesting and meaningful
            projects.
          </StyledPara>
          <StyledPara>
            <StyledSpan>On a personal level,</StyledSpan> I am self-motivated,
            goal oriented, fast learner and constantly seeking to improve my
            skills. In my spare time I do combat sports and train at the gym, it
            keeps me motivated, creative and well.
          </StyledPara>
        </div>
        <div>
          <ImgWraper>
            <StyledImg src={Image} />
          </ImgWraper>
        </div>
      </SectionWraper>
    </Wraper>
  )
}

export default About

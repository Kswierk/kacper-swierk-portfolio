import React from "react"
import styled from "styled-components"
import SectionHeading from "../components/sectionheading"
import Image from "../assets/images/kacper.jpg"

const Wraper = styled.div`
  max-width: 900px;
  margin: 50px auto;
`

const StyledPara = styled.p`
  margin: 15px 0;
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
  border: 1px solid red;
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
  /* justify-content: space-between; */
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
  return (
    <Wraper>
      <SectionHeading sectionNumber="01." sectionName="About Me" />
      <SectionWraper>
        <div>
          <StyledPara>
            Hello! I'm Kacper, a front end developer
            <StyledSpan>based in Cracow, Poland.</StyledSpan>
          </StyledPara>
          <StyledPara>
            I enjoy creating things that live on the internet, whether that be
            websites, applications, or anything in between. My goal is to always
            build products that provide pixel-perfect, performant experiences
          </StyledPara>
          <StyledPara>
            Shortly after graduating from
            <StyledSpan>Cracow University of Technology</StyledSpan>, I joined
            the engineering team at Upstatement where I work on a wide variety
            of interesting and meaningful projects on a daily basis.
          </StyledPara>
          <StyledPara>
            Here are some main technologies I've been working with:
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

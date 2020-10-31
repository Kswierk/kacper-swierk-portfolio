import React, { useEffect } from "react"
import styled from "styled-components"
import projectImage from "../../assets/images/kacper.jpg"
import { outSideSvg, githubSvg } from "./workData"
import { projects } from "./workData"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const CardWraper = styled.div`
  width: 90%;
  height: 100%;
  margin: 80px auto;
  position: absolute;
  max-width: 900px;
  background-image: url(${projectImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  color: white;

  @media (min-width: 500px) {
    margin: 80px auto;
    height: 45vw;
  }

  @media (min-width: 790px) {
    height: 22vw;
    margin: 0 auto 130px auto;
    background: none;
    width: 75%;
  }
  @media (min-width: 1000px) {
    margin: 0 auto 100px auto;
  }
  @media (min-width: 1300px) {
    max-width: 1000px;
  }

  @media (min-width: 1100px) {
    width: 85%;
  }

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(106, 90, 205, 0.7);

    @media (min-width: 790px) {
      display: none;
    }
  }
`

const StyledImg = styled.div`
  background-image: url(${projectImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  display: none;
  height: 100%;
  width: 40vw;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 4px;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(106, 90, 205, 0.7);
    transition: all 0.2s ease-in-out;
    border-radius: 4px;
  }
  &:hover::after {
    background-color: rgba(106, 90, 205, 0);
  }

  @media (min-width: 790px) {
    display: block;
    right: ${props => (props.left ? "0" : null)};
  }
`

const StyledH3 = styled.h3`
  padding: 20px 0;
  z-index: 4;
  font-size: 1.3rem;
  font-weight: 700;

  @media (min-width: 700px) {
    padding: 40px 0;
  }
`

const StyledText = styled.p`
  text-align: ${props => (props.left ? "start" : "end")};
  line-height: 1.5rem;
  font-size: 0.9rem;
  z-index: 50;

  @media (min-width: 500px) {
    width: 80%;
  }
  @media (min-width: 790px) {
    background-color: gray;
    padding: 15px;
    width: 70%;
    margin: 10px 0;
    border-radius: 4px;
  }
  @media (min-width: 1000px) {
    width: 65%;
  }
  @media (min-width: 1150px) {
    width: 55%;
  }
`

const FlexWraper = styled.div`
  display: flex;
  margin: 10px 0;
  font-family: "Roboto Mono", monospace;
`

const StyledTech = styled.p`
  margin: 0 0 13px 5px;
  font-size: 0.8rem;
  z-index: 222;
`

const StyledLink = styled.a`
  z-index: 10;
  margin: 25px 7px;
  fill: #08ffc8;
`

const IconsWraper = styled.div`
  z-index: 222;
`

const InsideWraper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  right: 0;
  position: relative;
  align-items: flex-end;
  margin: 15px;

  @media (min-width: 790px) {
    align-items: ${props => (props.left ? "flex-start" : "flex-end")};
  }
  @media (min-width: 1000px) {
    width: 100%;
  }
`

const ProjectCard = () => {
  useEffect(() => {
    const triggerElement = document.querySelectorAll(".cardTrigger")

    triggerElement.forEach(elem => {
      gsap.fromTo(
        elem,
        {
          y: "+=50",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: { trigger: elem, start: "top 70%" },
        }
      )
    })
  }, [])

  return (
    <>
      {projects.map((elem, index) => (
        <CardWraper className="cardTrigger" key={index}>
          <InsideWraper left={elem.left}>
            <StyledH3>{elem.title}</StyledH3>
            <StyledText left={elem.left}>{elem.description}</StyledText>
            <FlexWraper>
              {elem.technologies.map((element, index) => (
                <StyledTech key={index}>{element}</StyledTech>
              ))}
            </FlexWraper>
            <IconsWraper>
              <StyledLink href={elem.githubLink}>{githubSvg}</StyledLink>
              <StyledLink href={elem.outsideLink}>{outSideSvg}</StyledLink>
            </IconsWraper>
          </InsideWraper>
          <a href={elem.outsideLink}>
            <StyledImg left={elem.left} src={projectImage} />
          </a>
        </CardWraper>
      ))}

      {/* <CardWraper>
        <InsideWraper left={props.left}>
          <StyledH3>Projekt Pierwszy</StyledH3>
          <StyledText>
            A nicer look at your github profielA nicer look at your github
            profielA nicer look at your github profiel A nicer look at your
            github profiel
          </StyledText>
          <FlexWraper>
            <StyledTech>Next.js</StyledTech>
            <StyledTech>Next.js</StyledTech>
            <StyledTech>Next.js</StyledTech>
            <StyledTech>Next.js</StyledTech>
          </FlexWraper>
          <IconsWraper>
            <StyledLink href="#">{githubSvg}</StyledLink>
            <a href="#">{outSideSvg}</a>
          </IconsWraper>
        </InsideWraper>
        <a href="#">
          <StyledImg left={props.left} src={projectImage} />
        </a>
      </CardWraper> */}
    </>
  )
}

export default ProjectCard
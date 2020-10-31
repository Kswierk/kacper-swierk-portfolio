import React, { useEffect } from "react"
import styled from "styled-components"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Wraper = styled.div`
  max-width: 900px;
  margin: 200px auto 80px auto;
  text-align: center;

  @media (min-width: 790px) {
    margin: 200px auto;
  }

  @media (min-width: 1300px) {
    max-width: 1000px;
  }
`

const StyledH3 = styled.h3`
  color: #08ffc8;
  font-family: "Roboto Mono", monospace;
  font-weight: 400;
  font-size: 1.1rem;
`

const StyledH2 = styled.h2`
  font-size: 2.5rem;
  padding: 20px 0;
  color: #ccd6f6;
`

const StyledP = styled.p`
  font-size: 1.1rem;
  line-height: 1.7rem;
  margin: 0 10px 30px 10px;

  @media (min-width: 790px) {
    width: 60%;
    margin: 0 auto 30px auto;
  }
`

const StatusWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 200px;
`

const StatusInnerWraper = styled.div`
  border: 1px solid #08ffc8;
  padding: 1rem;
  border-radius: 4px;
  margin: 0 10px;
`

const StyledStatusPara = styled.p`
  padding: 10px;
  font-weight: 600;
  font-size: 1.5rem;
  color: #ccd6f6;
`

const StyledLink = styled.a`
  text-decoration: none;
  color: #08ffc8;
  font-family: "Roboto Mono", monospace;
  padding: 1rem;
  border: 1px solid #08ffc8;
  border-radius: 4px;
  transition: all 0.2s ease-out;

  &:hover {
    background-color: RGBA(8, 255, 200, 0.2);
  }
`

const Contact = () => {
  useEffect(() => {
    const triggerElement = document.querySelectorAll(".contactTrigger")

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
    <Wraper className="contactTrigger">
      <StyledH3>04. What's Next?</StyledH3>
      <StyledH2>Get In Touch</StyledH2>
      <StyledP>
        Currently I am looking for opportunity to start a new job and expand my
        commercial experience. If you have any questions, feel free to contact
        me via any media!
      </StyledP>
      <StatusWraper>
        <StatusInnerWraper>
          <h4>Status</h4>
          <StyledStatusPara>Open for job offers</StyledStatusPara>
        </StatusInnerWraper>
        <StyledLink href="mailto:kacper.swierk@gmail.com">Say Hello</StyledLink>
      </StatusWraper>
    </Wraper>
  )
}

export default Contact

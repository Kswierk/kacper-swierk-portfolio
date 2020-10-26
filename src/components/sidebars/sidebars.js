import React, { useEffect } from "react"
import styled from "styled-components"
import { data } from "./data"
import gsap from "gsap"

const RightBar = styled.div`
  position: fixed;
  display: none;
  bottom: 0;
  right: 60px;
  writing-mode: vertical-lr;
  text-decoration: none;

  &:after {
    content: "";
    display: inline-block;
    width: 1px;
    height: 100px;
    margin-top: 30px;
    margin-right: 2px;
    background-color: #dadada;
    transform: none;
  }

  @media (min-width: 790px) and (min-height: 430px) {
    display: block;
  }
`
const StyledMailLink = styled.a`
  color: #dadada;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  font-size: 0.9rem;
  display: inline-block;

  &:hover {
    color: #08ffc8;
    transform: translateY(-4px);
  }
`

const LeftBar = styled.div`
  position: fixed;
  display: none;
  bottom: -4px;
  left: 60px;
  &:after {
    content: "";
    display: inline-block;
    width: 1px;
    height: 100px;
    margin-top: 30px;
    margin-left: 8px;
    background-color: #dadada;
  }
  @media (min-width: 790px) and (min-height: 430px) {
    display: block;
  }
`

const StyledLi = styled.li`
  list-style: none;
`

const StyledLink = styled.a`
  text-decoration: none;
  color: #dadada;
`

const Sidebars = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".sidebar")

    elements.forEach(elem => {
      gsap.fromTo(elem, { opacity: 0 }, { opacity: 1, delay: 1.4 })
    })
  }, [])
  return (
    <>
      <LeftBar className="sidebar">
        <ul>
          {data.map(elem => {
            return (
              <StyledLi key={elem.title}>
                <StyledLink href="#">{elem.element}</StyledLink>
              </StyledLi>
            )
          })}
        </ul>
      </LeftBar>
      <RightBar className="sidebar">
        <StyledMailLink href="mailto:kacper.swierk@gmail.com">
          kacper.swierk@gmail.com
        </StyledMailLink>
      </RightBar>
    </>
  )
}

export default Sidebars

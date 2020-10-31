import React from "react"
import { data } from "./socialsIconsData"
import styled from "styled-components"

const Wraper = styled.div`
  margin: 0 auto;
  width: 30%;
  height: 100px;

  @media (min-width: 790px) {
    display: none;
  }
`

const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
`

const StyledLi = styled.li`
  list-style: none;
`

const StyledLink = styled.a`
  text-decoration: none;
  margin: 20px;
  fill: #8892b0;
`

const Footer = () => {
  return (
    <Wraper>
      <StyledUl>
        {data.map(elem => {
          return (
            <StyledLi key={elem.title}>
              <StyledLink href="#">{elem.element}</StyledLink>
            </StyledLi>
          )
        })}
      </StyledUl>
    </Wraper>
  )
}

export default Footer

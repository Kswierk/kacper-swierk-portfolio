import React from "react"
import styled from "styled-components"

const StyledLi = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
`

const StyledA = styled.a`
  padding: 36px;
  font-size: 1.1rem;
  display: block;
  cursor: pointer;

  @media (min-width: 768px) {
    padding: 16px;
    font-size: 0.9rem;
  }
`

const StyledAResume = styled.a`
  border: 1px solid red;
  /* margin: 10px; */
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

const NavItem = () => (
  <>
    <StyledLi>
      <StyledA>
        <NumberSpan> 01.</NumberSpan> About
      </StyledA>
    </StyledLi>
    <StyledLi>
      <StyledA>
        <NumberSpan> 02.</NumberSpan> Work
      </StyledA>
    </StyledLi>
    <StyledLi>
      <StyledA>
        <NumberSpan> 03.</NumberSpan> Technologies
      </StyledA>
    </StyledLi>
    <StyledLi>
      <StyledA>
        <NumberSpan> 04.</NumberSpan> Contact
      </StyledA>
    </StyledLi>
    <StyledLi>
      <StyledAResume>Resume</StyledAResume>
    </StyledLi>
  </>
)

export default NavItem

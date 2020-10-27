import React from "react"
import styled from "styled-components"

const StyledHeaderText = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0 20px;

  &::after {
    content: "";
    display: inline-block;
    position: relative;
    top: -8px;
    width: 50%;
    height: 1px;
    margin-left: 20px;
    background-color: #dadada;
  }
`
const StyledHeaderSpan = styled.span`
  font-family: "Roboto Mono", monospace;
  font-size: 1.2rem;
  margin-right: 8px;
  color: #08ffc8;
`

const SectionHeading = props => {
  return (
    <StyledHeaderText>
      <StyledHeaderSpan>{props.sectionNumber}</StyledHeaderSpan>
      {props.sectionName}
    </StyledHeaderText>
  )
}

export default SectionHeading

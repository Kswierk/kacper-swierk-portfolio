import React from "react"
import styled from "styled-components"

const StyledBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  backdrop-filter: blur(3px);
`

const Backdrop = props =>
  props.show ? <StyledBackdrop onClick={props.clicked}></StyledBackdrop> : null

export default Backdrop

import React from "react"
import styled from "styled-components"

import { ImPlus } from "react-icons/im"
import { ImMinus } from "react-icons/im"

const Wraper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eee;
  padding: 5px 15px;
  border-radius: 4px;
`

const StyledSpan = styled.span`
  margin: 0 25px;
  font-family: "Montserrat", sans-serif;
`

const PlusButton = styled(ImPlus)`
  font-size: 22px;
  cursor: pointer;
  color: #5271ff;
`
const MinusButton = styled(ImMinus)`
  font-size: 22px;
  cursor: pointer;
  color: #5271ff;
`

const ControlPanelResume = props => {
  const { scale, setScale } = props

  const isMinZoom = scale <= 0.5
  const isMaxZoom = scale >= 2

  const zoomIn = () => {
    if (!isMaxZoom) setScale(scale + 0.2)
  }

  const zoomOut = () => {
    if (!isMinZoom) setScale(scale - 0.2)
  }

  return (
    <Wraper>
      <PlusButton onClick={zoomIn} />
      <StyledSpan>{(scale * 100).toFixed()}%</StyledSpan>
      <MinusButton onClick={zoomOut} />
    </Wraper>
  )
}

export default ControlPanelResume

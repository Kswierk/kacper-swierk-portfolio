import React, { useState } from "react"
import styled from "styled-components"
import NavItem from "./navitem"

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  height: 70px;
  background-color: #fff;
`

const LogoContainer = styled.div`
  z-index: 200;
`

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  right: 0;
  top: 0;
  background-color: #fff;
  position: absolute;
  width: 70vw;
  height: 100vh;
  transform: ${({ showMenu }) =>
    showMenu ? "translateX(0)" : "translateX(70vw)"};
  transition: all 0.2s ease-in-out;

  @media (min-width: 750px) {
    transition: none;
  }

  @media (min-width: 768px) {
    transform: none;
    flex-direction: row;
    height: 70px;
    width: 100vw;
    transition: none;
    justify-content: flex-end;
  }
`

const StyledBurger = styled.button`
  position: absolute;
  top: 35px;
  transform: translateY(-50%);
  right: 5px;
  padding: 10px;
  display: inline-block;
  background-color: transparent;
  border: 0;
  z-index: 100;
  cursor: pointer;
  outline: none;

  @media (min-width: 768px) {
    display: none;
  }
`

const BurgerBox = styled.span`
  width: 24px;
  height: 20px;
  display: inline-block;
  position: relative;
`

const BurgerInner = styled.span`
  width: 100%;
  height: 3px;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${({ hamburger }) => (hamburger ? "transparent" : "black")};
  transition: transform 0.1 ease-in-out;

  &::after {
    content: "";
    left: 0;
    width: 100%;
    height: 3px;
    position: absolute;
    background-color: black;
    top: 8px;
    transform: ${({ hamburger }) =>
      hamburger
        ? "translateY(-8px) rotate(-135deg)"
        : "translateY(0) rotate(0)"};
    transition: transform 250ms ease-in-out;
  }
  &::before {
    content: "";
    left: 0;
    width: 100%;
    height: 3px;
    position: absolute;
    background-color: black;
    top: -8px;
    transform: ${({ hamburger }) =>
      hamburger ? "translateY(8px) rotate(135deg)" : "translateY(0) rotate(0)"};
    transition: transform 250ms ease-in-out;
  }
`
const Header = () => {
  const [menu, setMenu] = useState(false)

  return (
    <>
      <StyledNav>
        <LogoContainer>
          <a href="/">logo</a>
        </LogoContainer>
        <StyledUl showMenu={menu}>
          <NavItem />
        </StyledUl>
      </StyledNav>
      <StyledBurger hamburger={menu} onClick={() => setMenu(!menu)}>
        <BurgerBox>
          <BurgerInner hamburger={menu} />
        </BurgerBox>
      </StyledBurger>
    </>
  )
}

export default Header

import React, { useState, useEffect } from "react"
import { menuItems } from "./menuItems"
import styled from "styled-components"
import { gsap } from "gsap"
import logo from "../../assets/images/logo.jpg"

const StyledNav = styled.nav`
  background-color: #204969;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  z-index: 300;

  @media screen and (max-width: 790px) {
    position: relative;
    justify-content: start;
  }
`

const LogoContainer = styled.div`
  height: 50px;
  justify-self: start;
  cursor: pointer;
  margin-left: 20px;
`
const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 8px;
  list-style: none;
  text-align: center;
  width: 80vw;
  justify-content: end;
  margin-right: 2rem;
  background-color: #204969;

  @media screen and (max-width: 790px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
    position: absolute;
    height: 100vh;
    top: 0px;
    left: ${props => (props.active ? "0" : "-100%")};
    opacity: 1;
    transition: 0.3s ease;
    background-color: #204969;
  }
`

const StyledBurger = styled.button`
  position: absolute;
  top: 40px;
  transform: translateY(-50%);
  right: 5px;
  padding: 10px;
  display: inline-block;
  background-color: transparent;
  border: 0;
  z-index: 300;
  cursor: pointer;
  outline: none;

  @media (min-width: 790px) {
    display: none;
  }
`

const BurgerBox = styled.span`
  width: 32px;
  height: 20px;
  display: inline-block;
  position: relative;
`

const BurgerInner = styled.span`
  width: 100%;
  height: 2px;
  position: absolute;
  border-radius: 4px;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${({ hamburger }) =>
    hamburger ? "transparent" : "#08ffc8"};
  transition: all 0.5 ease-in-out;

  &::after {
    content: "";
    left: 0;
    width: ${({ hamburger }) => (hamburger ? "100% " : "66%")};
    height: 2px;
    position: absolute;
    background-color: #08ffc8;
    top: 10px;
    transform: ${({ hamburger }) =>
      hamburger
        ? "translateY(-10px) rotate(-135deg)"
        : "translateY(0) rotate(0)"};
    transition: transform 250ms ease-in-out;
  }
  &::before {
    content: "";
    left: 0;
    width: 100%;
    height: 2px;
    position: absolute;
    background-color: #08ffc8;
    top: -10px;
    transform: ${({ hamburger }) =>
      hamburger
        ? "translateY(10px) rotate(135deg)"
        : "translateY(0) rotate(0)"};
    transition: transform 250ms ease-in-out;
  }
`

const StyledLink = styled.a`
  text-decoration: none;
  padding: 0.5rem 0.8rem;
  font-size: 0.9rem;
  border: ${props => (props.resume ? "1px solid #08ffc8" : null)};
  border-radius: ${props => (props.resume ? "4px" : null)};
  color: ${props => (props.resume ? "#08ffc8" : "#dadada")};
  transition: all 0.3s ease-out;

  &:hover {
    color: #08ffc8;
    transition: all 0.3s ease-out;
  }

  @media screen and (max-width: 790px) {
    text-align: center;
    padding: ${props => (props.resume ? "1rem" : "2rem")};
    width: 100%;
    display: table;
    width: ${props => (props.resume ? "20%" : null)};
    margin: 0 auto;
  }
`

const Logo = styled.img`
  height: 50px;
`

const StyledSpan = styled.span`
  color: #08ffc8;
  font-size: 0.9rem;
`

const StyledLi = styled.li`
  transition: all 0.5s ease-out;
`

const Navbar = () => {
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    const links = document.querySelectorAll(".fadelink")
    const burger = document.querySelectorAll(".burger")
    const logo = document.querySelectorAll(".logo")
    gsap.fromTo(
      burger,
      {
        opacity: 0,
        duration: 1,
      },
      { autoAlpha: 1, opacity: 1 }
    )
    gsap.fromTo(
      logo,
      {
        opacity: 0,
        duration: 1,
        delay: 0.5,
      },
      { autoAlpha: 1, opacity: 1 }
    )

    links.forEach((elem, index) => {
      gsap.set(elem, { autoAlpha: 0 })

      gsap.fromTo(
        elem,
        { y: "-=100" },
        { y: "+=100", autoAlpha: 1, delay: index / 15 }
      )
    })
  }, [])

  return (
    <StyledNav>
      <LogoContainer>
        <Logo className="logo" src={logo} />
      </LogoContainer>
      <StyledBurger
        className="burger"
        hamburger={clicked}
        onClick={() => setClicked(!clicked)}
      >
        <BurgerBox>
          <BurgerInner hamburger={clicked} />
        </BurgerBox>
      </StyledBurger>
      <StyledUl active={clicked}>
        {menuItems.map((item, index) => {
          return (
            <StyledLi className={item.className} key={index}>
              <StyledLink resume={item.resume} href={item.url}>
                {item.resume ? null : <StyledSpan>0{index + 1}.</StyledSpan>}
                {item.title}
              </StyledLink>
            </StyledLi>
          )
        })}
      </StyledUl>
    </StyledNav>
  )
}

export default Navbar

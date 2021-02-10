import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { gsap } from "gsap"

import { menuItems } from "./menuItems"
import logo from "../../images/logo.jpg"
import Backdrop from "./backdrop"
import { Link } from "react-scroll"

import Resume from "../../PDF/resume.pdf"

const StyledNav = styled.nav`
  background-color: RGBA(10, 25, 47, 0.5);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => (props.top ? "80px" : "70px")};
  z-index: 300;
  position: fixed;
  backdrop-filter: blur(10px);
  top: ${props => (props.scrolled ? "-80px" : "0")};
  transition: all 0.3s ease-in;
  box-shadow: ${props => (props.top ? null : "0 10px 30px -10px black")};
  visibility: hidden;

  @media screen and (max-width: 790px) {
    position: fixed;
    justify-content: start;
  }
`

const LogoContainer = styled.div`
  height: 50px;
  justify-self: start;
  cursor: pointer;
  margin-left: 40px;
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

  @media screen and (max-width: 790px) {
    background-color: RGBA(218, 218, 218, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
    position: absolute;
    height: 100vh;
    top: 0;
    left: ${props => (props.active ? "0" : "-100%")};
    opacity: 1;
    transition: 0.3s ease;
    background-color: #172a45;
  }
`

const StyledBurger = styled.button`
  position: absolute;
  top: 40px;
  transform: translateY(-50%);
  right: 40px;
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

const StyledLink = styled(Link)`
  font-family: "Roboto Mono", monospace;
  cursor: pointer;

  text-decoration: none;
  padding: 0.5rem 0.8rem;
  font-size: 0.8rem;
  border: ${props => (props.resume ? "1px solid #08ffc8" : null)};
  border-radius: ${props => (props.resume ? "4px" : null)};
  color: ${props => (props.resume ? "#08ffc8" : "#ccd6f6")};
  transition: all 0.3s ease-out;

  &:hover {
    color: #08ffc8;
    transition: all 0.3s ease-out;
    background-color: ${props =>
      props.resume ? "RGBA(8, 255, 200, 0.2)" : "null"};
  }

  @media screen and (max-width: 790px) {
    font-size: 1rem;
    text-align: center;
    padding: ${props => (props.resume ? "1rem" : "2rem")};
    width: 100%;
    display: table;
    width: ${props => (props.resume ? "20%" : null)};
    margin: 0 auto;
  }
`

const Logo = styled.img`
  height: 100%;
  /* width: 100%; */
`

const StyledSpan = styled.span`
  color: #08ffc8;
  font-size: 0.9rem;
`

const Navbar = () => {
  const [clicked, setClicked] = useState(false)
  const [scroll, setScroll] = useState(false)
  const [isTop, setisTop] = useState(true)
  const [body, setBody] = useState("")

  useEffect(() => {
    const links = document.querySelectorAll(".fadelink")
    const burger = document.querySelectorAll(".burger")
    const logo = document.querySelectorAll(".logo")
    gsap.fromTo(
      burger,
      {
        opacity: 0,
      },
      { opacity: 1, duration: 1 }
    )
    gsap.fromTo(
      logo,
      {
        y: 0,
        opacity: 0,
      },
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    )

    links.forEach((elem, index) => {
      gsap.set(elem, { autoAlpha: 0, opacity: 0 })

      gsap.fromTo(
        elem,
        {
          y: "-=30",
          opacity: 0,
          visibility: "hidden",
        },
        {
          y: "+=30",
          autoAlpha: 1,
          opacity: 1,
          delay: index / 8,
          // duration: 0.6,
          visibility: "visible",
          ease: "power1.inOut",
        }
      )
    })
  }, [])

  const windowGlobal = typeof window !== "undefined" && window
  useEffect(() => {
    let prevScrollpos = windowGlobal.pageYOffset
    windowGlobal.onscroll = () => {
      if (scroll) {
        setisTop(true)
      } else setisTop(false)
      if (windowGlobal.pageYOffset === 0) {
        setisTop(true)
      } else {
        setisTop(false)
      }
      let currentScrollPos = windowGlobal.pageYOffset
      if (prevScrollpos > currentScrollPos) {
        setScroll(false)
      } else {
        setScroll(true)
      }
      prevScrollpos = currentScrollPos
    }
  })

  useEffect(() => {
    setBody(document.querySelector("body"))
  }, [])

  // const body = document.querySelector("body")

  const blockSideMenuHandler = () => {
    clicked
      ? (body.style.overflowY = "initial")
      : (body.style.overflowY = "hidden")
  }

  const showSideMenuHandler = () => {
    setClicked(!clicked)
    blockSideMenuHandler()
  }

  const closeSideMenuHandler = () => {
    setClicked(false)
    body.style.overflow = "initial"
  }

  return (
    <>
      <StyledNav top={isTop} scrolled={scroll} className="fadelink">
        <LogoContainer>
          <Logo className="logo" src={logo} />
        </LogoContainer>
        <StyledBurger
          className="burger"
          hamburger={clicked}
          onClick={showSideMenuHandler}
        >
          <BurgerBox>
            <BurgerInner hamburger={clicked} />
          </BurgerBox>
        </StyledBurger>
        <StyledUl active={clicked}>
          {menuItems.map((item, index) => {
            return (
              <li className={item.className} key={index}>
                <StyledLink
                  resume={item.resume}
                  to={item.url}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={closeSideMenuHandler}
                >
                  {item.resume ? null : <StyledSpan>0{index + 1}.</StyledSpan>}
                  {item.title}
                </StyledLink>
              </li>
            )
          })}
        </StyledUl>
      </StyledNav>
      <Backdrop show={clicked} clicked={showSideMenuHandler} />
    </>
  )
}

export default Navbar

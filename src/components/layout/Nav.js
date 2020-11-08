import React, { useState } from "react"

import gsap from "gsap"

import LinkList from "./LinkList"
import Hamburger from "./Hamburger"
import StyledNav from '../../styles/layout/StyledNav';

const Nav = props => {
  const [isOpen, setIsOpen] = useState(false)

  const animateMenu = () => {
    const openMenu = () => {
      gsap.to(props.layoutRef.current, {rotate: -30});
      gsap.to(props.layoutRef.current.parentNode, {overflow: "hidden"})
    }
    const closeMenu = () => {
      gsap.to(props.layoutRef.current, {rotate: 0});
      gsap.to(props.layoutRef.current.parentNode, {overflow: "visible"})

    }
    isOpen ? closeMenu() : openMenu()
    console.log()
  }
  const handleClick = () => {
    setIsOpen(!isOpen)
    animateMenu()
  }

  return (
      <StyledNav >
        <div onClick={handleClick} >
          <Hamburger isOpen={isOpen} />
        </div>
        <LinkList isOpen={isOpen} />
      </StyledNav>
  )
}

export default Nav

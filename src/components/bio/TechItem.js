import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import media from "styled-media-query"
import { Icon } from "@iconify/react"
import {
  showIcon,
  hideIcon,
  setPosition,
  setPositionAndScale,
  mouseEnterAnimation,
  mouseLeaveAnimation
} from "../../animations/IconAnimations"

const TechItem = props => {
  const [isActive, setIsActive] = useState()
  const [hovered, setHovered] = useState(false);

  const parentEl = useRef(null)

  useEffect(() => {
    setPosition(parentEl.current.children[0])
    setPositionAndScale(parentEl.current.children[1])

    hideIcon(parentEl.current.children[1])
  }, [])

  useEffect(() => {
    setIsActive(props.activeTech[props.dataIcon])
  }, [props.activeTech])

  useEffect(() => {
    isActive
      ? showIcon(parentEl.current.children[1])
      : hideIcon(parentEl.current.children[1])
  }, [isActive])


  useEffect( () => {
    hovered 
    ? mouseEnterAnimation(parentEl.current.children[0])
    : mouseLeaveAnimation(parentEl.current.children[0])
  }, [hovered])

  const handleHover = (e) => {
    setHovered( hovered => !hovered)
  }

  return (
    <div ref={parentEl} className="techItemsContainer">
      <StyledRect data-icon={props.dataIcon} onMouseEnter={handleHover} onMouseLeave={handleHover}>
        {props.icon ? (
          <Icon icon={props.icon} width="35px" height="35px" />
        ) : (
          <img
            src={props.gsapLogo}
            alt="gsap logo"
            width="35px"
            height="auto"
          />
        )}
      </StyledRect>
      <StyledRect data-icon={props.dataIcon}>
        {props.icon ? (
          <Icon icon={props.icon} width="45px" height="45px" />
        ) : (
          <img
            src={props.gsapLogo}
            alt="gsap logo"
            width="40px"
            height="auto"
          />
        )}
      </StyledRect>
    </div>
  )
}

const StyledRect = styled.div`
  position: absolute;
  width: 60px;
  height: 120px;
  background: rgba(196, 196, 196, 0.6);
  border-radius: 10%;
  transform-style: preserve-3d;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: grayscale(0.9);
  z-index: 10;
  &:nth-of-type(2) {
    background: #9f9f9f;
    filter: grayscale(0);
    z-index: 15;
  }
  img {
    padding-right: 5px;
  }
  ${media.between("medium", "large")`
    width: 70px;
    height: 150px;`}
  ${media.greaterThan("large")`
    width: 80px;
    height: 180px;
  `}
`

export default TechItem

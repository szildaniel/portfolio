import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import gsap from "gsap"
import { Icon, InlineIcon } from "@iconify/react"

const TechItem = props => {
  const [isActive, setIsActive] = useState()

  const parentEl = useRef(null)

  const hideIcon = () => {
    gsap.to(parentEl.current.children[1], { autoAlpha: 0, x: 0, y: 0, duration: 0.3 })
  }
  const showIcon = () => {
    gsap.to(parentEl.current.children[1], {autoAlpha: 1, x: 20, y: -30, duration: 0.9 })
  }

  useEffect(() => {
    hideIcon()
  }, [])

  useEffect(() => {
    setIsActive(props.activeTech[props.dataIcon])
  }, [props.activeTech])

  useEffect(() => {
    isActive ?  showIcon() : hideIcon();
  }, [isActive])

  return (
    <div ref={parentEl} className="techItemsContainer">
      <StyledRect data-icon={props.dataIcon}>
        {props.icon ? (
          <Icon
            icon={props.icon}
            width="35px"
            height="35px"
          />
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
          <Icon
            icon={props.icon}
            width="45px"
            height="45px"
          />
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
  transform: rotateX(-40deg) rotateZ(-40deg);
  transform-style: preserve-3d;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: grayscale(0.9);
  z-index: 10;
  &:nth-of-type(2) {
    background: #9f9f9f;
    transform: rotateX(-40deg) rotateZ(-40deg) scale(1.025);
    filter: grayscale(0);
    z-index: 15;
  }
  img {
    padding-right: 5px;
  }
`

export default TechItem

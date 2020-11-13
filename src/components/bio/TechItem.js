import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import gsap from "gsap"
import { Icon, InlineIcon } from "@iconify/react"

const TechItem = props => {
  const [isAnimated, setIsAnimated] = useState(false)

  const parentEl = useRef(null)

  const handleClick = e => {
    console.log("iam animating")
    if (isAnimated) {
      setIsAnimated(!isAnimated)
      props.hideIcon(parentEl.current.children[1])
    } else {
      setIsAnimated(!isAnimated)
      gsap.to(parentEl.current.children[1], {
        x: 20,
        y: -30,
        autoAlpha: 1,
        duration: 2,
      })
    }
  }

  useEffect(() => {
    gsap.set(parentEl.current.children[1], { autoAlpha: 0 })
  }, [])

  return (
    <div ref={parentEl} onClick={handleClick} className="techItemsContainer">
      <StyledRect>
        {props.icon ? (
          <Icon
            icon={props.icon}
            width={isAnimated ? "0px" : "35px"}
            height={isAnimated ? "0px" : "35px"}
          />
        ) : (
          <img
            src={props.gsapLogo}
            alt="gsap logo"
            width={isAnimated ? "0px" : "35px"}
            height={isAnimated ? "0px" : "auto"}
          />
        )}
      </StyledRect>
      <StyledRect>
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
  img{
      padding-right: 5px;
  }
`

export default TechItem

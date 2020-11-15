import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import gsap from "gsap"
import { info } from "../../helpers/techStackInfo";

const StackInfo = props => {
  const [activeItem, setActiveItem] = useState("html")

  useEffect(() => {
    const filtered =  Object.fromEntries(Object.entries(props.activeTech).filter(([key,value]) => value === true))
    const actItem = Object.keys(filtered);
    console.log(info[activeItem].header);
    setActiveItem(actItem[0]);
    
  }, [props.activeTech])
  return (
    <StyledInfo>
      <h2>{activeItem && info[activeItem].header}</h2>
      <p>{activeItem && info[activeItem].text}</p>
    </StyledInfo>
  )
}

const StyledInfo = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 5;
  h2 {
    font-family: "Lato", sans-serif;
    font-size: 20px;
    font-weight: 600;
    padding: 10px 0;
    text-transform: uppercase;
  }
`

export default StackInfo

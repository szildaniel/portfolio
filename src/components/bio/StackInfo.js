import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import { slideText } from "../../animations/stackInfoAnimation"
import { info } from "../../helpers/techStackInfo"
import media from "styled-media-query"

const StackInfo = props => {
  const [activeItem, setActiveItem] = useState("html")
  const [data, setData] = useState()

  const parentEl = useRef(null)

  useEffect(() => {
    const filtered = Object.fromEntries(
      Object.entries(props.activeTech).filter(([key, value]) => value === true)
    )
    const actItem = Object.keys(filtered)
    setActiveItem(actItem[0])
    slideText(parentEl)
  }, [props.activeTech])

  useEffect(() => {
    setData(info)
  }, [])

  return (
    <StyledInfo ref={parentEl}>
      <h2>{data && data[activeItem].header}</h2>
      <p>{data && data[activeItem].text}</p>
    </StyledInfo>
  )
}

const StyledInfo = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
  h2 {
    font-family: "Lato", sans-serif;
    font-size: 20px;
    font-weight: 600;
    padding: 10px 0;
    text-transform: uppercase;
  }
  ${media.greaterThan(`medium`)`
    grid-column-start: 6;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 3;`}
  ${media.between(`medium`, "900px")`
    grid-column-start: 5;
    grid-column-end: 8;`}
`

export default StackInfo

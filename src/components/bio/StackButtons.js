import React, { useEffect, useRef, useState } from "react"
import Button from "../Button"
import { Link } from "gatsby"
import styled from "styled-components"
import media from "styled-media-query"

export const StackButtons = () => {
  const parentEl = useRef(null)

  return (
    <StyledStackButton ref={parentEl}>
      <Button primary>
        <Link to="/portfolio">Porfolio</Link>
      </Button>
      <Button primary>
        <Link to="/contact">Contact</Link>
      </Button>
    </StyledStackButton>
  )
}

const StyledStackButton = styled.div`
  display: flex;
  justify-content: space-evenly;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 6;
  grid-row-end: 7;
  width: 100%;
  button {
    margin: 0;
    ${media.lessThan("medium")`
      font-size: 14px;
      width: 120px;
      height: 30px;
      `}
    ${media.greaterThan(`medium`)`
    width: 150px;
      height: 40px;
    &:first-of-type(){
      margin: 0;
    }
    `}
  }
  ${media.greaterThan(`medium`)`
      align-self: end;
      grid-column-start: 6;
      grid-column-end: 9;
      grid-row-start: 2;
      grid-row-end: 3;
      justify-content: space-between;
    `}
`

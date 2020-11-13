import React from "react"
import styled from "styled-components"

import StackGrid from "./StackGrid"
import { H1 } from "../../styles/bio/H1"

const TechStackSection = () => {
 
  return (
    <StyledStackSection >
      <H1 bgText={`"tech"`}>technology stack</H1>
      <StackGrid />
    </StyledStackSection>
  )
}

const StyledStackSection = styled.section`
  padding-top: 220px;

  background: white;
  color: var(--dark);
  display: flex;
  flex-direction: column;
  h1{
    font-size: clamp(36px,1rem + 2vw,75px);
  }
  .techItemsContainer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export default TechStackSection

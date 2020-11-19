import React from "react"
import StackGrid from "./StackGrid"
import { H1 } from "../../styles/bio/H1"
import {StyledStackSection} from '../../styles/bio/StyledStackSection';
import { StackButtons } from './StackButtons';

const TechStackSection = () => {
  return (
    <StyledStackSection>
      <H1 bgText={`"tech"`}>technology stack</H1>
      <StackGrid />
      {/* <StackButtons /> */}
    </StyledStackSection>
  )
}


export default TechStackSection

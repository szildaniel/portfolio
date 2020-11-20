import React from "react"
import StackGrid from "./StackGrid"
import { H1 } from "../../styles/bio/H1"
import {StyledStackSection} from '../../styles/bio/StyledStackSection';
import Footer from './Footer';

const TechStackSection = () => {
  return (
    <StyledStackSection id="technology-stack">
      <H1 bgText={`"tech"`}>technology stack</H1>
      <StackGrid />
      <Footer />
    </StyledStackSection>
  )
}


export default TechStackSection

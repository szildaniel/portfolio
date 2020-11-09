import React from "react"
import StyledBeginnningSection from "../../styles/bio/StyledBeginningSection"
import BooksArticle from "../bio/BooksArticle"
import { H1 } from "../../styles/bio/H1"

import DiceArticle from '../bio/DiceArticle';

const BeginningSection = () => {
  return (
      <StyledBeginnningSection>
        <H1 bgText={`"Beg"`}>Beginning</H1>
        <DiceArticle />
        <BooksArticle />
      </StyledBeginnningSection>
  )
}

export default BeginningSection
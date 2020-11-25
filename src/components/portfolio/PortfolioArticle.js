import React from "react"
import StyledPortfolioArticle from "../../styles/portfolio/StyledPortfolioArticle"
import { Icon } from "@iconify/react"
import arrowRight from "@iconify/icons-bi/arrow-right"

const PortfolioArticle = props => {
  return (
    <StyledPortfolioArticle bgPhoto={props.bgPhoto || null}>
      {props.children}
      <a href={props.ghLink} target="_blank">
        <Icon icon={arrowRight} className="arrowIcon" />
        see more
      </a>
    </StyledPortfolioArticle>
  )
}

export default PortfolioArticle

import React from "react"
import PortfolioArticle from "../PortfolioArticle"
import PortfolioItem from "../PortfolioItem";

import porfolioBg from "../../../images/portfolio/bgItems/porfolioBg.svg"

const PortfolioItem1 = () => {
  return (
    <PortfolioArticle
      name="porfolio"
      bgPhoto={porfolioBg}
      ghLink="https://github.com/szildaniel/portfolio2020"
    >
      <PortfolioItem bgColor="var(--linearYellow)" itemTitle="Portfolio">
        <div className="portfolioDesktopSVG"></div>
        <div className="portfolioMobileSvg"></div>
      </PortfolioItem>
      <p>
        Portfolio page was created in GatsbyJS that gives me opportunity to
        display images via graphql query. Design prepared in Figma, animations
        in GSAP.
      </p>
    </PortfolioArticle>
  )
}

export default PortfolioItem1

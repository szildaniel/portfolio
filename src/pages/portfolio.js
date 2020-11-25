import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import StyledPortfolioSection from "../styles/portfolio/StyledPorfolioSection"
import { H1 } from "../styles/bio/H1"
import PortfolioArticle from "../components/portfolio/PortfolioArticle"
import PortfolioItem from '../components/portfolio/PortfolioItem';

import flipGameBg from "../images/portfolio/bgItems/flipGameBg.svg"
import porfolioBg from "../images/portfolio/bgItems/porfolioBg.svg"

const Portfolio = () => (
  <Layout>
    <SEO title="Daniel Mydlarz | Portfolio" />
    <StyledPortfolioSection>
      <H1 color="var(--dark)">Portfolio</H1>
      <PortfolioArticle
        name="porfolio"
        bgPhoto={porfolioBg}
        ghLink="https://github.com/szildaniel/portfolio2020"
      >
        <PortfolioItem 
          bgColor="var(--linearYellow)" 
          itemTitle="Portfolio">
            <div className="portfolioDesktopSVG"></div>
            <div className="portfolioMobileSvg"></div>
        </PortfolioItem>
        <p>
            Portfolio page was created in GatsbyJS that gives me opportunity to
            display images via graphql query. Design prepared in Figma,
            animations in GSAP.
        </p>
      </PortfolioArticle>
      <PortfolioArticle name="GitubUsersAPI" ghLink="https://github.com/szildaniel/Github-Users-API" />
      <PortfolioArticle name="FlipGame" bgPhoto={flipGameBg} />
    </StyledPortfolioSection>
  </Layout>
)

export default Portfolio

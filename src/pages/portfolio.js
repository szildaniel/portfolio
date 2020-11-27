import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import StyledPortfolioSection from "../styles/portfolio/StyledPorfolioSection"
import { H1 } from "../styles/bio/H1"

import PortfolioItem1 from '../components/portfolio/projects/Portfolio';
import GithubUsersItem from '../components/portfolio/projects/GithubUserAPI';
import FlipGameItem from '../components/portfolio/projects/FlipGame';

const Portfolio = () => (
  <Layout>
    <SEO title="Daniel Mydlarz | Portfolio" />
    <StyledPortfolioSection>
      <H1 color="var(--dark)">Portfolio</H1>
      <PortfolioItem1 />
      <GithubUsersItem />
      <FlipGameItem />
    </StyledPortfolioSection>
  </Layout>
)

export default Portfolio

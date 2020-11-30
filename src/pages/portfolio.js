import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import StyledPortfolioSection from "../styles/portfolio/StyledPorfolioSection"
import { H1 } from "../styles/bio/H1"

import PortfolioProject from "../components/portfolio/projects/PortfolioProject"
import GithubUserProject from '../components/portfolio/projects/GithubUserProject';

import FlipGameProject from "../components/portfolio/projects/FlipGameProject"
import DeezerMusicProject from "../components/portfolio/projects/DeezerMusicProject"

const Portfolio = () => {
  return (
    <Layout>
      <SEO title="Daniel Mydlarz | Portfolio" />
      <StyledPortfolioSection>
        <H1 color="var(--dark)">Portfolio</H1>
        <PortfolioProject />
        <GithubUserProject />
        <FlipGameProject />
        <DeezerMusicProject />
      </StyledPortfolioSection>
    </Layout>
  )
}

export default Portfolio

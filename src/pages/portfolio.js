import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import StyledPortfolioSection from "../styles/portfolio/StyledPorfolioSection"
import { H1 } from "../styles/bio/H1"

import PortfolioProject from "../components/portfolio/projects/PortfolioProject"
import GithubUserProject from "../components/portfolio/projects/GithubUserProject"
import FlipGameProject from "../components/portfolio/projects/FlipGameProject"
import DeezerMusicProject from "../components/portfolio/projects/DeezerMusicProject"

import Footer from "../components/bio/Footer"

const Portfolio = () => {
  return (
    <Layout>
      <SEO
        title="Daniel Mydlarz personal portfolio website see my projects."
        description="Click and see projects that I created: flip game, porfolio website, github-user-app. There is also hyperlinks to source code and more information."
      />
      <StyledPortfolioSection>
        <H1 color="var(--dark)">Portfolio</H1>
        <PortfolioProject />
        <GithubUserProject />
        <FlipGameProject />
        <DeezerMusicProject />
        <Footer />
      </StyledPortfolioSection>
    </Layout>
  )
}

export default Portfolio

import React from "react"
import PortfolioArticle from "../PortfolioArticle"
import FlipGameItem from "../FlipGameItem"

import { useFlipGameQueryFiles } from "../../../helpers/hooks/useFlipGameQueryFiles"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import Img from "gatsby-image"

const FlipGameProject = () => {
  const images = useFlipGameQueryFiles()
 
  return (
    <StyledBackground
      Tag="div"
      fluid={images.flipGameArticleBgDesktop.childImageSharp.fluid}
    >
      <PortfolioArticle
        name="FlipGame"
        ghLink="https://github.com/szildaniel/flip-game"
        paddingBot="120px"
      >
        <div className="mockupsContainers">
            <Img fluid={images.myMockups.childImageSharp.fluid} alt="Game Mockups"/>
          </div>
        <FlipGameItem />
          
        <p>
          Flip game is a memory game. User have 30 seconds to uncover all cards
          and find doubles. Game is created in NextJS.{" "}
        </p>
      </PortfolioArticle>
    </StyledBackground>
  )
}

export default FlipGameProject

const StyledBackground = styled(BackgroundImage)`
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
`

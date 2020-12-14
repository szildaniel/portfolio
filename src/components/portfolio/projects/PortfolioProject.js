import React, {useState} from "react"
import { usePortfolioQueryFiles } from "../../../helpers/hooks/usePortfolioQueryFiles"
import PortfolioArticle from "../PortfolioArticle"
import PortfolioItem from "../PortfolioItem"

import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import styled from 'styled-components';

const PortfolioProject = () => {
  const [ghLink] = useState("https://github.com/szildaniel/portfolio");
  const [liveLink] = useState("https://portfolio-6hth04q4z.vercel.app/");

  const images = usePortfolioQueryFiles();

  const sources = [
    images.portfolioBgMobile.childImageSharp.fluid,
    {
      ...images.portfolioBgDekstop.childImageSharp.fluid,
      media: `(min-width: 761px)`,
    },
  ]
  return (
    <StyledBackground Tag="div" fluid={sources}>
      <PortfolioArticle
        name="porfolio"
        ghLink={ghLink}
      >
        <PortfolioItem  liveLink={liveLink} ghLink={ghLink} bgColor="var(--linearYellow)" itemTitle="Portfolio">
          <div className="fluidDesktopContainer">
            <Img fluid={images.portfolioDesktopImage.childImageSharp.fluid}/>
          </div>
          <div className="fluidMobileContainer">
          <Img fluid={images.portfolioMobileImage.childImageSharp.fluid}/>
          </div>
        </PortfolioItem>
        <p>
          Portfolio page was created in GatsbyJS that gives me opportunity to
          display images via graphql query. Design prepared in Figma, animations
          in GSAP.
        </p>
      </PortfolioArticle>
    </StyledBackground>
  )
}

export default PortfolioProject


const StyledBackground = styled(BackgroundImage)`
  width: 100%;
  min-height: 80vh;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
`
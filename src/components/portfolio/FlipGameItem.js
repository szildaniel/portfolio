import React, {useState} from 'react';
import PortfolioItem from './PortfolioItem';
import BackgroundImage from 'gatsby-background-image';
import { useFlipGameQueryFiles } from "../../helpers/hooks/useFlipGameQueryFiles"
import styled from 'styled-components';

const FlipGameItem = ({children}) => {
    const images = useFlipGameQueryFiles();
    const [ghLink, setGhLink] = useState("https://github.com/szildaniel/flip-game");
    const [liveLink, setLiveLink] = useState("https://flip-game.now.sh/");
  return (
    <PortfolioItem
      bgColor="#9B9A9A"
      itemTitle="Flip Game"
      marginTop="30px"
      overflowHidden
      iconsAbsolute
      liveLink={liveLink} 
      ghLink={ghLink}
    >
      <StyledBgImage fluid={images.flipGameBgProject.childImageSharp.fluid}>
        {children}
      </StyledBgImage>
    </PortfolioItem>
  )
}

export default FlipGameItem


const StyledBgImage = styled(BackgroundImage)`
width: 100%;
min-height: 100%;
background-position: bottom center;
background-size: contain;
background-repeat: no-repeat;
`
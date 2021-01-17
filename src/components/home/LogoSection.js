import React from "react"
import MyLogo from "../home/MyLogo"
import StyledArtDirectedBackground from "./ArtImageBackground";
import StyledLogoSection from '../../styles/home/StyledLogoSection';
import AnimatedLink from './AnimatedLink';

const LogoSection = () => {
  return (
    <StyledLogoSection>
      <StyledArtDirectedBackground />
      <div className="logoContainer">
        <MyLogo />
      </div>

      <div className="linkContainer">
        <AnimatedLink toPage="/bio/" name="bio"/>
        <div className="rightSide">
          <AnimatedLink toPage="/portfolio/" name="portfolio"/>
          <AnimatedLink toPage="/contact" name="contact"/>
        </div>
      </div>
    </StyledLogoSection>
  )
}

export default LogoSection